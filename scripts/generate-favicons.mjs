import sharp from "sharp"
import { writeFileSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = resolve(__dirname, "../public/logo.png")
const out = resolve(__dirname, "../public")

async function run() {
  const logo = sharp(src)

  await logo.clone().resize(32, 32).png().toFile(resolve(out, "icon-light-32x32.png"))

  await logo.clone().resize(32, 32).png().toFile(resolve(out, "icon-dark-32x32.png"))

  await logo.clone().resize(180, 180).png().toFile(resolve(out, "apple-icon.png"))

  const pngBase64 = (await logo.clone().resize(64, 64).png().toBuffer()).toString("base64")
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <image href="data:image/png;base64,${pngBase64}" width="64" height="64"/>
</svg>`
  writeFileSync(resolve(out, "icon.svg"), svg)

  console.log("Favicons generated:")
  console.log("  - icon-light-32x32.png")
  console.log("  - icon-dark-32x32.png")
  console.log("  - apple-icon.png")
  console.log("  - icon.svg")
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
