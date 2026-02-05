const fs = require('fs');
const path = require('path');

console.log('=== GFB-insulation-website Fix Verification ===\n');

// Check if all required dist files exist
const distPath = path.join(__dirname, 'dist');
const distFiles = fs.readdirSync(distPath);

console.log('1. Checking dist folder structure:');
console.log('   - Dist folder contains:', distFiles.join(', '));

// Check assets folder
const assetsPath = path.join(distPath, 'assets');
const assetsFiles = fs.readdirSync(assetsPath);

console.log('\n2. Checking assets folder:');
console.log('   - Assets contain:', assetsFiles.join(', '));

// Check if index.css is properly bundled in assets
const cssFile = assetsFiles.find(file => file.endsWith('.css'));
console.log(`\n3. CSS file found: ${cssFile}`);
if (cssFile) {
  const cssContent = fs.readFileSync(path.join(assetsPath, cssFile), 'utf8');
  console.log(`   - Size: ${cssContent.length} bytes`);
  console.log(`   - Contains Tailwind CSS: ${cssContent.includes('@tailwind')}`);
}

// Check if JS files are bundled
const jsFiles = assetsFiles.filter(file => file.endsWith('.js'));
console.log(`\n4. JS files found: ${jsFiles.length}`);

// Verify index.html references
const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');
console.log('\n5. Checking index.html references:');

// Check if CSS is properly referenced
const cssRef = indexHtml.includes('GFB-insulation-website/assets') && indexHtml.includes('.css');
console.log(`   - CSS reference: ${cssRef ? '✓ Valid' : '✗ Invalid'}`);

// Check if JS is properly referenced
const jsRef = indexHtml.includes('GFB-insulation-website/assets') && indexHtml.includes('.js');
console.log(`   - JS reference: ${jsRef ? '✓ Valid' : '✗ Invalid'}`);

// Check if CDN Tailwind is removed
const cdnRef = indexHtml.includes('cdn.tailwindcss.com');
console.log(`   - Tailwind CDN: ${cdnRef ? '✗ Still present' : '✓ Removed'}`);

console.log('\n=== Verification Complete ===');