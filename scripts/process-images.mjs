// Usage: npm run images -- <folder-of-source-jpgs>
// Resizes source photography and writes optimised WebP files to public/images.
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const src = process.argv[2];
const out = path.resolve('public/images');
await mkdir(out, { recursive: true });

for (const file of await readdir(src)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const name = file.replace(/\.(jpe?g|png)$/i, '');
  const width = name === 'hero' ? 2400 : 1800;
  const info = await sharp(path.join(src, file))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(out, `${name}.webp`));
  console.log('ok', name, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`);
}
