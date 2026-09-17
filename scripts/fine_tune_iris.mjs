import sharp from 'sharp';
import path from 'path';

const hogarImg = '/Users/mario.monzon/.gemini/antigravity/brain/f5a3377f-c8b7-4216-9ca6-8cb24c1ccf34/.user_uploaded/media_1789639584269.jpg';
const outputDir = '/Users/mario.monzon/workspace/irisprosegur/public/images';

async function fineTuneIris() {
  // Let's crop from left: 0, top: 730, width: 250, height: 290
  // And let's also create a rounded avatar
  const irisBuffer = await sharp(hogarImg)
    .extract({ left: 5, top: 735, width: 250, height: 285 })
    .toBuffer();

  await sharp(irisBuffer)
    .webp({ quality: 95 })
    .toFile(path.join(outputDir, 'iris-portrait.webp'));

  console.log('Fine-tuned iris portrait saved');
}

fineTuneIris().catch(console.error);
