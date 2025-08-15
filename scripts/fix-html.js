import fs from 'fs';
import path from 'path';

const htmlPath = path.join(process.cwd(), 'dist', 'index.html');
const distPath = path.join(process.cwd(), 'dist');

try {
  // Fix HTML
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Remove type="module" from script tags
  html = html.replace(/type="module"/g, '');
  
  // Also remove crossorigin if present to avoid any issues
  html = html.replace(/crossorigin/g, '');
  
  fs.writeFileSync(htmlPath, html);
  console.log('✅ HTML fixed: removed type="module" and crossorigin from script tags');
  
  // Find and fix the main JavaScript file
  const files = fs.readdirSync(path.join(distPath, 'assets'));
  const jsFile = files.find(file => file.endsWith('.js'));
  
  if (jsFile) {
    const jsPath = path.join(distPath, 'assets', jsFile);
    let jsContent = fs.readFileSync(jsPath, 'utf8');
    
    // Ensure the file starts with a proper IIFE wrapper
    if (!jsContent.startsWith('(function(')) {
      jsContent = `(function() {\n${jsContent}\n})();`;
      fs.writeFileSync(jsPath, jsContent);
      console.log('✅ JavaScript file wrapped in IIFE');
    }
  }
  
} catch (error) {
  console.error('❌ Error fixing files:', error);
  process.exit(1);
}
