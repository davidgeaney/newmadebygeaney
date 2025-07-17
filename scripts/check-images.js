const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const outDir = path.join(__dirname, '..', '.next', 'static', 'media');

console.log('Checking image files in public directory...');

// Check if images exist in public directory
const projectsDir = path.join(publicDir, 'images', 'projects');
if (fs.existsSync(projectsDir)) {
  const files = fs.readdirSync(projectsDir);
  console.log('Project images found:', files);
  
  // Check if files are accessible
  files.forEach(file => {
    const filePath = path.join(projectsDir, file);
    try {
      fs.accessSync(filePath, fs.constants.R_OK);
      console.log(`✅ ${file} is readable`);
    } catch (err) {
      console.error(`❌ ${file} is not readable:`, err.message);
    }
  });
} else {
  console.error('Projects directory not found:', projectsDir);
}

// Check if images are in the build output
if (fs.existsSync(outDir)) {
  console.log('\nChecking build output directory...');
  try {
    const buildFiles = fs.readdirSync(outDir);
    console.log('Build output files:', buildFiles);
  } catch (err) {
    console.error('Error reading build output directory:', err);
  }
} else {
  console.log('Build output directory not found. Run `npm run build` first.');
}
