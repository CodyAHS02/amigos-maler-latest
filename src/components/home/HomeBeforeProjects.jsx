/* eslint-disable react/no-unescaped-entities */
export default function HomeBeforeProjects() {
  return (
    <>

    {/*5*/}
    <section className="ai-section">
        <div className="ai-container">
            <div className="ai-top">
                <div className="ai-heading">
                    <span className="section-tag">AI PROPERTY VISUALIZER</span>
                    <h2>Visualize Your Property <span>Before You Paint.</span></h2>
                </div>
                <div className="ai-side">
                    <p>Upload a photo of your facade, living room, bedroom, office or kitchen and instantly explore different paint colors, materials and finishes before making a decision.</p>
                </div>
            </div>

            <div className="ai-workspace" id="aiWorkspace">
                <input type="file" id="roomUpload" accept="image/*" hidden />
                <div className="ai-stage" id="aiStage">
                    <div className="stage-corner tl"></div>
                    <div className="stage-corner tr"></div>
                    <div className="stage-corner bl"></div>
                    <div className="stage-corner br"></div>

                    <div className="stage-topbar" id="stageTopbar">
                        <div className="preview-toggle">
                            <button className="toggle-btn active" data-view="before">Before</button>
                            <button className="toggle-btn" data-view="after">After</button>
                        </div>
                        <span className="ai-status-badge" id="aiStatusBadge">
                            <span className="ai-status-dot"></span> Idle
                        </span>
                    </div>

                    <div className="stage-empty" id="stageEmpty">
                        <div className="upload-icon-ring">
                            <div className="upload-icon">⬆</div>
                        </div>
                        <h3>Upload Your Photo</h3>
                        <p>Drag &amp; drop an image here, or click to choose one</p>
                        <button className="upload-btn" id="uploadBtn" type="button">Choose Image</button>
                        <span className="upload-hint">AI wall detection runs automatically</span>
                    </div>

                    <div className="preview-images" id="previewImages">
                        <img className="preview-before active" id="beforeImg" src="" alt="Before" />
                        <img className="preview-after" id="afterImg" src="" alt="After" />
                    </div>

                    <div className="scan-overlay" id="scanOverlay">
                        <div className="scan-grid"></div>
                        <div className="scan-line"></div>
                        <div className="scan-status" id="scanStatusText">Analyzing image…</div>
                    </div>
                </div>

                <div className="ai-controls-dock" id="aiControlsDock">
                    <div className="dock-picker">
                        <div className="option-tabs">
                            <button className="option-tab active" data-mode="color" type="button">Paint Color</button>
                            <button className="option-tab" data-mode="wallpaper" type="button">Wallpaper</button>
                        </div>

                        <div className="option-panel color-panel active" data-panel="color">
                            <div className="color-slider-wrap">
                                <div className="color-slider" id="colorSlider">
                                    <div className="color-slider-cursor" id="colorSliderCursor">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M17.5 3.5a2.6 2.6 0 0 1 3.68 3.68L9.5 18.86l-4.86 1.18 1.18-4.86L17.5 3.5Z" stroke="#111" stroke-width="1.6" stroke-linejoin="round" fill="#fff" />
                                            <path d="M14.5 6.5l3 3" stroke="#111" stroke-width="1.6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="color-selected-row" id="colorSelectedRow">
                                <span className="color-selected-swatch" id="colorSelectedSwatch"></span>
                                <span className="color-selected-label">Your selected color <b id="colorSelectedHex"></b></span>
                            </div>
                        </div>

                        <div className="option-panel wallpaper-panel" data-panel="wallpaper">
                            <div className="wallpaper-grid">
    <button className="wallpaperAI" data-wallpaper="/wall-textures/texture-1.jpg" type="button" title="Mineral Plaster">
        <img src="/wall-textures/texture-1.jpg" alt="Mineral Plaster" />
        <span>Mineral Plaster</span>
    </button>
    <button className="wallpaperAI" data-wallpaper="/wall-textures/texture-2.jpg" type="button" title="Architectural Panels">
        <img src="/wall-textures/texture-2.jpg" alt="Arch Panels" />
        <span>Arch Panels</span>
    </button>
    <button className="wallpaperAI" data-wallpaper="/wall-textures/texture-3.jpg" type="button" title="Sage Combed">
        <img src="/wall-textures/texture-3.jpg" alt="Sage Combed" />
        <span>Sage Combed</span>
    </button>
    <button className="wallpaperAI" data-wallpaper="/wall-textures/texture-4.jpg" type="button" title="Classic Damask">
        <img src="/wall-textures/texture-4.jpg" alt="Classic Damask" />
        <span>Classic Damask</span>
    </button>
    <button className="wallpaperAI" data-wallpaper="/wall-textures/texture-5.jpg" type="button" title="Terracotta Geo">
        <img src="/wall-textures/texture-5.jpg" alt="Terracotta Geo" />
        <span>Terracotta Geo</span>
    </button>
    <button className="wallpaperAI" data-wallpaper="/wall-textures/texture-6.jpg" type="button" title="Soft Botanical">
        <img src="/wall-textures/texture-6.jpg" alt="Soft Botanical" />
        <span>Soft Botanical</span>
    </button>
    <button className="wallpaperAI" data-wallpaper="/assets/wallpapers/wallpaper-1.jpg" type="button" title="Textured Linen">
        <img src="/assets/wallpapers/wallpaper-1-thumb.jpg" alt="Textured Linen" />
        <span>Textured Linen</span>
    </button>
    <button className="wallpaperAI" data-wallpaper="/assets/wallpapers/wallpaper-2.jpg" type="button" title="Botanical Leaf">
        <img src="/assets/wallpapers/wallpaper-2-thumb.jpg" alt="Botanical Leaf" />
        <span>Botanical Leaf</span>
    </button>
</div>
                        </div>
                    </div>

                    <div className="dock-action">
                        <button className="generate-btn" id="generateBtn" disabled>Generate AI Visualization</button>
                        <div className="ai-note">
                            <p>Colors may vary slightly depending on lighting conditions in your photo.</p>
                            <p>For the most accurate preview, upload a clear, high-quality image with good resolution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*7115*/}
    <section className="why-amigos">
        <div className="why-container">
            <div className="why-content reveal">
                <span className="section-tag">Why Amigos?</span>
                <h2>Craftsmanship. Trust. Property Preservation.</h2>
                <p>From individual painting work to complete renovations, we personally support owners and property managers with transparency and reliability.</p>
                <a href="/about" className="why-btn">GET TO KNOW AMIGOS</a>
            </div>
            <div className="stats-column">
                <div className="stat reveal">
                    <h3 className="counter" data-target="500">500</h3>
                    <span>Completed Projects</span>
                </div>
                <div className="stat reveal">
                    <h3 className="counter" data-target="100">100</h3>
                    <span>Satisfied Clients</span>
                </div>
                <div className="stat reveal">
                    <h3 className="counter" data-target="10">10</h3>
                    <span>Years Experience</span>
                </div>
                <div className="stat reveal">
                    <h3 className="counter" data-target="6000">6000</h3>
                    <span>m² of Completed Surfaces</span>
                </div>
            </div>
        </div>
    </section>


    </>
  );
}
