const fs = require('fs');

const pages = [
  'app/(public)/solutions/audio-visual/page.tsx',
  'app/(public)/solutions/home-automation/page.tsx',
  'app/(public)/solutions/network-communications/page.tsx',
  'app/(public)/solutions/security-surveillance/page.tsx'
];

for (const page of pages) {
  let txt = fs.readFileSync(page, 'utf8');
  txt = txt.replace(/import SolutionVerticalHero.*?\n/, '');
  txt = txt.replace(/<SolutionVerticalHero[\s\S]*?\/>\n*/, '');
  fs.writeFileSync(page, txt);
  console.log('Fixed', page);
}
