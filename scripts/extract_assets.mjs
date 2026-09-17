import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const uploadedDir = '/Users/mario.monzon/.gemini/antigravity/brain/f5a3377f-c8b7-4216-9ca6-8cb24c1ccf34/.user_uploaded';
const outputDir = '/Users/mario.monzon/workspace/irisprosegur/public/images';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function extract() {
  const hogarImg = path.join(uploadedDir, 'media_1789639584269.jpg');
  const negocioImg = path.join(uploadedDir, 'media_1789639584274.jpg');
  const negocioImg2 = path.join(uploadedDir, 'media_1789639584266.jpg');

  // 1. Get metadata
  const metaHogar = await sharp(hogarImg).metadata();
  console.log('Hogar meta:', metaHogar);

  // 2. Extract Iris Benitez from Hogar (cleanest portrait at bottom left)
  // Dimensions 972 x 1024.
  // Bottom left is roughly left: 0 to 300, top: 730 to 1024.
  await sharp(hogarImg)
    .extract({ left: 0, top: 725, width: 280, height: 295 })
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'iris-benitez.webp'));
  console.log('Extracted iris-benitez.webp');

  // 3. Extract Kit Hogar (middle hardware section)
  // In Hogar (972 x 1024), kit is from around top 260 to 520, left 20 to 950
  await sharp(hogarImg)
    .extract({ left: 20, top: 260, width: 935, height: 265 })
    .webp({ quality: 92 })
    .toFile(path.join(outputDir, 'kit-hogar.webp'));
  console.log('Extracted kit-hogar.webp');

  // 4. Extract Kit Negocio from media_1789639584266.jpg (1007 x 1024)
  // Kit is in the center, from top 360 to 670, left 40 to 960
  await sharp(negocioImg2)
    .extract({ left: 40, top: 360, width: 925, height: 310 })
    .webp({ quality: 92 })
    .toFile(path.join(outputDir, 'kit-negocio.webp'));
  console.log('Extracted kit-negocio.webp');

  // 5. Extract Movistar Prosegur Alarmas Logo from Hogar top left
  // Top left: left 30, top 40, width 270, height 70
  await sharp(hogarImg)
    .extract({ left: 35, top: 40, width: 270, height: 75 })
    .webp({ quality: 95 })
    .toFile(path.join(outputDir, 'logo-movistar-prosegur.webp'));
  console.log('Extracted logo-movistar-prosegur.webp');

  // 6. Copy full high-res flyers for background or reference
  fs.copyFileSync(hogarImg, path.join(outputDir, 'flyer-hogar.jpg'));
  fs.copyFileSync(negocioImg, path.join(outputDir, 'flyer-negocio.jpg'));
  console.log('Copied flyer references');
}

extract().catch(console.error);
