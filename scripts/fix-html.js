import fs from 'fs';
import path from 'path';

const htmlPath = path.join(process.cwd(), 'dist', 'index.html');

try {
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Remove type="module" from script tags
  html = html.replace(/type="module"/g, '');
  
  fs.writeFileSync(htmlPath, html);
  console.log('✅ HTML fixed: removed type="module" from script tags');
} catch (error) {
  console.error('❌ Error fixing HTML:', error);
  process.exit(1);
}
