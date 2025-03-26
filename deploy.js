// Simple script to fix paths for Netlify deployment
import fs from 'fs';

// Read the built index.html
const indexPath = './dist/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// Fix script paths by adding a ./ prefix to asset paths if they don't have it
html = html.replace(/src="\/assets\//g, 'src="./assets/');
html = html.replace(/href="\/assets\//g, 'href="./assets/');

// Write the fixed file
fs.writeFileSync(indexPath, html);

console.log('✅ Fixed asset paths in index.html for Netlify deployment');
