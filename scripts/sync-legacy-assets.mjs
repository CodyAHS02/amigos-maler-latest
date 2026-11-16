import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const srcStyles = path.join(root, "src", "styles", "legacy");
const srcScripts = path.join(root, "src", "scripts", "legacy");
const destStyles = path.join(root, "public", "legacy", "styles");
const destScripts = path.join(root, "public", "legacy", "scripts");

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else if (entry.isFile()) {
      // Only copy if modified or not exists
      let shouldCopy = true;
      if (fs.existsSync(destPath)) {
        const srcStat = fs.statSync(srcPath);
        const destStat = fs.statSync(destPath);
        if (srcStat.mtimeMs <= destStat.mtimeMs && srcStat.size === destStat.size) {
          shouldCopy = false;
        }
      }
      if (shouldCopy) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

copyDirRecursive(srcStyles, destStyles);
copyDirRecursive(srcScripts, destScripts);
console.log("✓ Legacy styles and scripts synced to public/legacy/");
