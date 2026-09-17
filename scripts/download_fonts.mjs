import fs from 'node:fs';
import path from 'node:path';

const fontsDir = path.resolve(process.cwd(), 'public/fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const fontDefinitions = [
  // Montserrat Latin & Latin-ext
  {
    family: 'Montserrat',
    weight: 600,
    latinUrl: 'https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu173w5aXp-p7K4KLg.woff2',
    latinExtUrl: 'https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu173w3aXp-p7K4KLjztg.woff2',
    baseName: 'montserrat-600',
  },
  {
    family: 'Montserrat',
    weight: 700,
    latinUrl: 'https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w5aXp-p7K4KLg.woff2',
    latinExtUrl: 'https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w3aXp-p7K4KLjztg.woff2',
    baseName: 'montserrat-700',
  },
  {
    family: 'Montserrat',
    weight: 800,
    latinUrl: 'https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr73w5aXp-p7K4KLg.woff2',
    latinExtUrl: 'https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr73w3aXp-p7K4KLjztg.woff2',
    baseName: 'montserrat-800',
  },
  {
    family: 'Montserrat',
    weight: 900,
    latinUrl: 'https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC73w5aXp-p7K4KLg.woff2',
    latinExtUrl: 'https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC73w3aXp-p7K4KLjztg.woff2',
    baseName: 'montserrat-900',
  },
  // Roboto Latin & Latin-ext
  {
    family: 'Roboto',
    weight: 400,
    latinUrl: 'https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAr0klQmz24.woff2',
    latinExtUrl: 'https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmaiAr0klQmz24O0g.woff2',
    baseName: 'roboto-400',
  },
  {
    family: 'Roboto',
    weight: 500,
    latinUrl: 'https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAr0klQmz24.woff2',
    latinExtUrl: 'https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmaiAr0klQmz24O0g.woff2',
    baseName: 'roboto-500',
  },
  {
    family: 'Roboto',
    weight: 700,
    latinUrl: 'https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAr0klQmz24.woff2',
    latinExtUrl: 'https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmaiAr0klQmz24O0g.woff2',
    baseName: 'roboto-700',
  },
];

async function downloadFile(url, destPath) {
  console.log(`Downloading ${url} -> ${destPath}`);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
  console.log(`Saved ${destPath} (${buffer.length} bytes)`);
}

async function main() {
  for (const font of fontDefinitions) {
    const latinPath = path.join(fontsDir, `${font.baseName}.woff2`);
    const latinExtPath = path.join(fontsDir, `${font.baseName}-latin-ext.woff2`);

    await downloadFile(font.latinUrl, latinPath);
    await downloadFile(font.latinExtUrl, latinExtPath);
  }
  console.log('All Latin and Latin-ext fonts successfully downloaded.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
