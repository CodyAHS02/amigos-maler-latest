const canvas = document.getElementById("paintCanvas");
const ctx = canvas.getContext("2d", {
    willReadFrequently: true
});

const maskCache = {};
const images = {
    room: null,
    masks: {}
};

const maskNames = [
    "front-wall",
    "left-wall",
    "right-wall",
    "ceiling"
];

const WALLPAPERS = [
    { id: "texture-1", name: "Mineral Plaster", url: "/wall-textures/texture-1.jpg" },
    { id: "texture-2", name: "Architectural Panels", url: "/wall-textures/texture-2.jpg" },
    { id: "texture-3", name: "Sage Combed", url: "/wall-textures/texture-3.jpg" },
    { id: "texture-4", name: "Classic Damask", url: "/wall-textures/texture-4.jpg" },
    { id: "texture-5", name: "Terracotta Geo", url: "/wall-textures/texture-5.jpg" },
    { id: "texture-6", name: "Soft Botanical", url: "/wall-textures/texture-6.jpg" },
    { id: "wallpaper-1", name: "Textured Linen", url: "/assets/wallpapers/wallpaper-1.jpg" },
    { id: "wallpaper-2", name: "Botanical Leaf", url: "/assets/wallpapers/wallpaper-2.jpg" }
];

const textureCache = {};
const maskLightingRatios = {};

const wallState = {
    "front-wall": null,
    "left-wall": null,
    "right-wall": null,
    "ceiling": null
};

let highlightedWall = null;
let selectedPaintFinish = "matte";

const paintFinishLabels = {
    matte: "Matte",
    satin: "Satin",
    textured: "Textured"
};

const paintFinishSettings = {
    matte: {
        shadingPreserve: 0.52,
        saturationLift: 0.95,
        highlightSoftness: 0
    },
    satin: {
        shadingPreserve: 0.78,
        saturationLift: 0.98,
        highlightSoftness: 0.075
    },
    textured: {
        shadingPreserve: 0.68,
        saturationLift: 0.92,
        highlightSoftness: 0.025
    }
};

async function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

async function init() {
    // Load room image first
    images.room = await loadImage("/assets/room.png");

    // Set canvas size
    canvas.width = images.room.width;
    canvas.height = images.room.height;

    // Load & cache masks
    for (const name of maskNames) {
        const img = await loadImage(`/assets/masks/${name}.png`);
        images.masks[name] = img;

        const c = document.createElement("canvas");
        c.width = img.width;
        c.height = img.height;
        const cctx = c.getContext("2d");
        cctx.drawImage(img, 0, 0);

        maskCache[name] = cctx.getImageData(0, 0, c.width, c.height).data;
    }

    drawRoom();
    computeMaskBaseLightness();

    // Preload wallpapers & wall textures into memory canvas
    await Promise.all(WALLPAPERS.map(async (wp) => {
        try {
            const tImg = await loadImage(wp.url);
            const tc = document.createElement("canvas");
            tc.width = tImg.width;
            tc.height = tImg.height;
            const tctx = tc.getContext("2d");
            tctx.drawImage(tImg, 0, 0);
            textureCache[wp.url] = {
                width: tImg.width,
                height: tImg.height,
                data: tctx.getImageData(0, 0, tImg.width, tImg.height).data
            };
        } catch (e) {
            console.warn("Failed to load wallpaper texture:", wp.url, e);
        }
    }));
}

let originalImageData;

function drawRoom() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images.room, 0, 0);
    originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function isTextureValue(val) {
    if (!val) return false;
    if (typeof val === "string") {
        return val.includes("/wall-textures/") || val.includes("/assets/wallpapers/");
    }
    return val && val.type === "texture";
}

function renderScene() {
    drawRoom();

    for (const wall in wallState) {
        const val = wallState[wall];
        if (val) {
            if (isTextureValue(val)) {
                const url = typeof val === "string" ? val : val.url;
                paintTextureMaskOnly(wall, url);
            } else {
                paintMaskOnly(wall, val);
            }
        }
    }

    if (highlightedWall) {
        drawHighlight(highlightedWall);
    }
}

function hexToRgb(hex) {
    hex = hex.replace("#", "");
    const bigint = parseInt(hex, 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h, s;
    const l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return {
        h: h * 360,
        s: s,
        l: l
    };
}

function hslToRgb(h, s, l) {
    h /= 360;
    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
        r: r * 255,
        g: g * 255,
        b: b * 255
    };
}

function clamp01(n) {
    return Math.max(0, Math.min(1, n));
}

function pseudoRandom(x, y) {
    const noise = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return noise - Math.floor(noise);
}

function getFinishLightnessOffset(finish, x, y) {
    if (finish === "satin") {
        const diagonal = (x / canvas.width) * 1.35 + (y / canvas.height) * 0.85;
        const sheen = Math.max(0, 1 - Math.abs(diagonal - 1.05) / 0.22);
        return Math.pow(sheen, 2) * paintFinishSettings.satin.highlightSoftness;
    }
    if (finish === "textured") {
        const fineGrain = Math.sin(x * 0.85 + y * 1.15) * 0.012;
        const broadGrain = Math.sin(x * 0.12 - y * 0.18) * 0.016;
        const stipple = (pseudoRandom(x, y) - 0.5) * 0.034;
        return fineGrain + broadGrain + stipple;
    }
    return 0;
}

const maskBaseLightness = {};

function computeMaskBaseLightness() {
    for (const name of maskNames) {
        const maskPixels = maskCache[name];
        let total = 0;
        let count = 0;

        for (let i = 0; i < maskPixels.length; i += 4) {
            if (maskPixels[i + 3] < 10) continue;
            const r = originalImageData.data[i];
            const g = originalImageData.data[i + 1];
            const b = originalImageData.data[i + 2];
            total += rgbToHsl(r, g, b).l;
            count++;
        }

        const baseL = count ? total / count : 0.68;
        maskBaseLightness[name] = baseL;

        const ratios = new Float32Array(canvas.width * canvas.height);
        for (let i = 0; i < maskPixels.length; i += 4) {
            if (maskPixels[i + 3] < 10) continue;
            const r = originalImageData.data[i];
            const g = originalImageData.data[i + 1];
            const b = originalImageData.data[i + 2];
            const l = rgbToHsl(r, g, b).l;
            const pixelIdx = i / 4;
            // Photometric ratio preserves natural directional sunlight, blind shadows and ambient corner occlusion
            ratios[pixelIdx] = Math.pow(l / baseL, 0.72);
        }
        maskLightingRatios[name] = ratios;
    }
}

function paintTextureMaskOnly(maskName, textureUrl) {
    const tex = textureCache[textureUrl];
    if (!tex) return;

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imgData.data;
    const origPixels = originalImageData.data;
    const maskPixels = maskCache[maskName];
    const ratios = maskLightingRatios[maskName];
    if (!maskPixels) return;

    const w = canvas.width;
    const tw = tex.width;
    const th = tex.height;
    const texData = tex.data;

    const scale = 0.50;

    for (let i = 0; i < pixels.length; i += 4) {
        const alpha = maskPixels[i + 3];
        if (alpha < 10) continue;

        const pixelIdx = i / 4;
        const px = pixelIdx % w;
        const py = Math.floor(pixelIdx / w);

        let u = Math.floor(px * scale) % tw;
        let v = Math.floor(py * scale) % th;
        if (u < 0) u += tw;
        if (v < 0) v += th;

        const tidx = (v * tw + u) * 4;
        const tr = texData[tidx];
        const tg = texData[tidx + 1];
        const tb = texData[tidx + 2];

        const ratio = ratios ? ratios[pixelIdx] : 1.0;
        const sr = Math.min(255, (tr * ratio) | 0);
        const sg = Math.min(255, (tg * ratio) | 0);
        const sb = Math.min(255, (tb * ratio) | 0);

        if (alpha >= 250) {
            pixels[i] = sr;
            pixels[i + 1] = sg;
            pixels[i + 2] = sb;
        } else {
            const a = alpha / 255;
            pixels[i] = ((origPixels[i] * (1 - a)) + (sr * a)) | 0;
            pixels[i + 1] = ((origPixels[i + 1] * (1 - a)) + (sg * a)) | 0;
            pixels[i + 2] = ((origPixels[i + 2] * (1 - a)) + (sb * a)) | 0;
        }
    }

    ctx.putImageData(imgData, 0, 0);
}

function paintMaskOnly(maskName, color) {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imgData.data;
    const maskPixels = maskCache[maskName];

    const target = hexToRgb(color);
    const targetHsl = rgbToHsl(target.r, target.g, target.b);
    const finish = paintFinishSettings[selectedPaintFinish] || paintFinishSettings.matte;

    for (let i = 0; i < pixels.length; i += 4) {
        if (maskPixels[i + 3] < 10) continue;

        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        const hsl = rgbToHsl(r, g, b);
        hsl.h = targetHsl.h;
        hsl.s = hsl.s * .35 + targetHsl.s * .65;
        hsl.s *= finish.saturationLift;

        const baseL = maskBaseLightness[maskName] ?? 0.5;
        const pixelIndex = i / 4;
        const x = pixelIndex % canvas.width;
        const y = Math.floor(pixelIndex / canvas.width);

        hsl.l = clamp01(
            targetHsl.l +
            (hsl.l - baseL) * finish.shadingPreserve +
            getFinishLightnessOffset(selectedPaintFinish, x, y)
        );

        const rgb = hslToRgb(hsl.h, hsl.s, hsl.l);
        pixels[i] = rgb.r;
        pixels[i + 1] = rgb.g;
        pixels[i + 2] = rgb.b;
    }

    ctx.putImageData(imgData, 0, 0);
}

function paintWall(maskName, color) {
    wallState[maskName] = color;
    renderScene();
}

const paintIcons = document.querySelector(".paint-icons");

function updateFinishMode() {
    const isTextured = selectedPaintFinish === "textured";
    if (paintIcons) {
        paintIcons.classList.toggle("is-textured-mode", isTextured);
    }
    const mobileDock = document.getElementById("mobileColorDock");
    if (mobileDock) {
        mobileDock.classList.toggle("is-textured-mode", isTextured);
    }

    const bannerTitle = document.querySelector(".paint-screen-banner h2");
    const bannerSub = document.querySelector(".paint-screen-banner p");
    if (bannerTitle && bannerSub) {
        if (isTextured) {
            bannerTitle.textContent = "Discover what wallpaper can change.";
            bannerSub.textContent = "Choose a texture and experience the room a new.";
        } else {
            bannerTitle.textContent = "Discover what color can change.";
            bannerSub.textContent = "Choose a color and experience the room a new.";
        }
    }

    if (isTextured && !activePoint) {
        const frontPoint = document.querySelector(".paint-point.front");
        if (frontPoint) {
            points.forEach(p => p.classList.remove("active"));
            frontPoint.classList.add("active");
            highlightWall("front-wall");
            activePoint = frontPoint;
            paintIcons.classList.add("editing");
        }
    }
}

function createPaintFinishPanel() {
    if (!paintIcons || paintIcons.querySelector(".paint-finish-panel")) return;

    const panel = document.createElement("div");
    panel.className = "paint-finish-panel";
    panel.setAttribute("aria-label", "Paint finish options");

    panel.innerHTML = `
        <span>Finish</span>
        <div class="paint-finish-options">
            ${Object.entries(paintFinishLabels).map(([finish, label]) => `
                <button
                    class="paint-finish-btn${finish === selectedPaintFinish ? " active" : ""}"
                    type="button"
                    data-finish="${finish}"
                    aria-pressed="${finish === selectedPaintFinish ? "true" : "false"}"
                >
                    ${label}
                </button>
            `).join("")}
        </div>
    `;

    panel.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    panel.querySelectorAll(".paint-finish-btn").forEach((button) => {
        button.addEventListener("click", () => {
            selectedPaintFinish = button.dataset.finish || "matte";

            panel.querySelectorAll(".paint-finish-btn").forEach((item) => {
                const isActive = item === button;
                item.classList.toggle("active", isActive);
                item.setAttribute("aria-pressed", isActive ? "true" : "false");
            });

            updateFinishMode();
            renderScene();
        });
    });

    paintIcons.appendChild(panel);
    updateFinishMode();
}

createPaintFinishPanel();

const points = document.querySelectorAll(".paint-point");

let activePoint = null;

points.forEach(point => {
    const trigger = point.querySelector(".paint-trigger");

    // Add wallpaper icon if not present
    if (trigger) {
        const existingFa = trigger.querySelector("i");
        if (existingFa) existingFa.classList.add("paint-icon");
        if (!trigger.querySelector(".wallpaper-icon")) {
            const wpSpan = document.createElement("span");
            wpSpan.className = "wallpaper-icon";
            wpSpan.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                <rect x="3" y="3" width="18" height="18" rx="3"></rect>
                <path d="M3 9h18"></path>
                <path d="M9 21V9"></path>
                <path d="M3 15h6"></path>
                <path d="M15 9v12"></path>
                <path d="M15 15h6"></path>
            </svg>`;
            trigger.appendChild(wpSpan);
        }
    }

    const palette = point.querySelector(".palette");
    if (palette && !palette.querySelector(".palette-textures")) {
        // Group color spans inside .palette-colors
        if (!palette.querySelector(".palette-colors")) {
            const colorsDiv = document.createElement("div");
            colorsDiv.className = "palette-colors";
            while (palette.firstChild) {
                colorsDiv.appendChild(palette.firstChild);
            }
            palette.appendChild(colorsDiv);
        }

        // Add texture swatches inside .palette-textures
        const texturesDiv = document.createElement("div");
        texturesDiv.className = "palette-textures";

        WALLPAPERS.forEach((wp) => {
            const sw = document.createElement("span");
            sw.className = "texture-swatch";
            sw.dataset.texture = wp.url;
            sw.style.backgroundImage = `url("${wp.url}")`;
            sw.title = wp.name;

            sw.onclick = (e) => {
                e.stopPropagation();
                wallState[point.dataset.wall] = wp.url;
                point._backup = null;
                point.querySelectorAll(".texture-swatch").forEach(s => s.classList.remove("active"));
                sw.classList.add("active");
                renderScene();
            };

            sw.addEventListener("mouseleave", () => {
                if (!point._backup) return;
                Object.assign(wallState, point._backup);
                point._backup = null;
                renderScene();
            });

            sw.addEventListener("mouseenter", () => {
                if (!point._backup) {
                    point._backup = { ...wallState };
                }
                wallState[point.dataset.wall] = wp.url;
                renderScene();
            });

            texturesDiv.appendChild(sw);
        });

        palette.appendChild(texturesDiv);
    }

    trigger.onclick = (e) => {
        e.stopPropagation();

        // close previous
        points.forEach(p => p.classList.remove("active"));

        // same clicked
        if (activePoint === point) {
            activePoint = null;
            paintIcons.classList.remove("editing");
            return;
        }

        point.classList.add("active");
        highlightWall(point.dataset.wall);

        activePoint = point;
        paintIcons.classList.add("editing");
    };

    point.querySelectorAll(".palette span[data-color]")
        .forEach(color => {
            color.onclick = (e) => {
                e.stopPropagation();
                wallState[point.dataset.wall] = color.dataset.color;
                point._backup = null;
                renderScene();
            };

            color.addEventListener("mouseleave", () => {
                if (!point._backup) return;
                Object.assign(wallState, point._backup);
                point._backup = null;
                renderScene();
            });

            color.addEventListener("mouseenter", () => {
                if (!point._backup) {
                    point._backup = { ...wallState };
                }
                wallState[point.dataset.wall] = color.dataset.color;
                renderScene();
            });
        });

    const customInput = point.querySelector(".palette-custom");
    if (customInput) {
        customInput.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        customInput.addEventListener("input", () => {
            wallState[point.dataset.wall] = customInput.value;
            renderScene();
        });

        customInput.addEventListener("change", () => {
            wallState[point.dataset.wall] = customInput.value;
            point._backup = null;
            renderScene();
        });
    }
});

document.addEventListener("click", () => {
    points.forEach(p => {
        p.classList.remove("active");
    });

    activePoint = null;
    paintIcons.classList.remove("editing");
    highlightedWall = null;
    renderScene();
});

function highlightWall(maskName) {
    highlightedWall = maskName;
    renderScene();
}

function drawHighlight(maskName) {
    ctx.save();
    ctx.globalAlpha = .14;
    ctx.filter = "blur(8px)";
    ctx.drawImage(
        images.masks[maskName],
        0,
        0
    );
    ctx.restore();
}

function initMobileColorDock() {
    const mobileDock = document.getElementById("mobileColorDock");
    if (!mobileDock) return;

    let mobileColors = mobileDock.querySelector(".mobile-swatches-colors");
    if (!mobileColors) {
        const swatchesEl = mobileDock.querySelector(".mobile-swatches");
        if (swatchesEl) {
            swatchesEl.classList.add("mobile-swatches-colors");
            mobileColors = swatchesEl;
        }
    }

    if (mobileDock && !mobileDock.querySelector(".mobile-swatches-textures")) {
        const mobTexDiv = document.createElement("div");
        mobTexDiv.className = "mobile-swatches mobile-swatches-textures";
        mobTexDiv.style.display = "none";
        WALLPAPERS.forEach((wp) => {
            const msw = document.createElement("span");
            msw.className = "mobile-swatch texture-swatch";
            msw.dataset.texture = wp.url;
            msw.style.backgroundImage = `url("${wp.url}")`;
            msw.title = wp.name;
            msw.onclick = (e) => {
                e.stopPropagation();
                wallState["front-wall"] = wp.url;
                mobTexDiv.querySelectorAll(".texture-swatch").forEach(s => s.classList.remove("active"));
                msw.classList.add("active");
                renderScene();
            };
            mobTexDiv.appendChild(msw);
        });
        mobileDock.appendChild(mobTexDiv);
    }

    const mobileSwatches = mobileDock.querySelectorAll(".mobile-swatch:not(.texture-swatch)");
    mobileSwatches.forEach((swatch) => {
        swatch.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileSwatches.forEach((s) => s.classList.remove("active"));
            swatch.classList.add("active");
            wallState["front-wall"] = swatch.dataset.color;
            renderScene();
        });
    });

    const mobileCustom = document.querySelector(".mobile-palette-custom");
    if (mobileCustom) {
        mobileCustom.addEventListener("input", (e) => {
            e.stopPropagation();
            mobileSwatches.forEach((s) => s.classList.remove("active"));
            wallState["front-wall"] = mobileCustom.value;
            renderScene();
        });
        mobileCustom.addEventListener("change", (e) => {
            e.stopPropagation();
            mobileSwatches.forEach((s) => s.classList.remove("active"));
            wallState["front-wall"] = mobileCustom.value;
            renderScene();
        });
    }
}

init();
initMobileColorDock();
