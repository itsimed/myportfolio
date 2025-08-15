import fs from 'fs';
import path from 'path';

const htmlPath = path.join(process.cwd(), 'dist', 'index.html');
const distPath = path.join(process.cwd(), 'dist');

try {
  // Fix HTML
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Find the script tag and get the JS file name
  const scriptMatch = html.match(/<script[^>]*src="\.\/assets\/([^"]+\.js)"[^>]*>/);
  
  if (scriptMatch) {
    const jsFileName = scriptMatch[1];
    
    // Replace the entire script tag with CDN versions and our script
    const newScriptTags = `
    <script crossorigin src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>
    <script src="./assets/${jsFileName}"></script>
    `;
    
    // Remove the old script tag completely
    html = html.replace(/<script[^>]*src="\.\/assets\/[^"]+\.js"[^>]*>.*?<\/script>/s, '');
    
    // Add the new script tags before closing body tag
    html = html.replace('</body>', `${newScriptTags}\n  </body>`);
    
    fs.writeFileSync(htmlPath, html);
    console.log('✅ HTML fixed: replaced with CDN React and local script');
  }
  
  // Find and fix the main JavaScript file
  const files = fs.readdirSync(path.join(distPath, 'assets'));
  const jsFile = files.find(file => file.endsWith('.js'));
  
  if (jsFile) {
    const jsPath = path.join(distPath, 'assets', jsFile);
    let jsContent = fs.readFileSync(jsPath, 'utf8');
    
    // Remove any module-related code and ensure it's a plain script
    jsContent = jsContent.replace(/import\s+.*?from\s+['"][^'"]+['"];?\n?/g, '');
    jsContent = jsContent.replace(/export\s+.*?;?\n?/g, '');
    
    // Ensure it starts with a proper IIFE wrapper
    if (!jsContent.startsWith('(function(')) {
      jsContent = `(function() {\n${jsContent}\n})();`;
    }
    
    fs.writeFileSync(jsPath, jsContent);
    console.log('✅ JavaScript file cleaned and wrapped in IIFE');
  }
  
} catch (error) {
  console.error('❌ Error fixing files:', error);
  process.exit(1);
}
