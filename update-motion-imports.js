const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function updateFiles(dir) {
  const files = await fs.promises.readdir(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      await updateFiles(fullPath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.jsx') || file.name.endsWith('.js')) {
      try {
        let content = await readFile(fullPath, 'utf8');
        
        // Update motion imports
        const updatedContent = content
          .replace(/from\s+['"]motion\/react['"]/g, 'from "framer-motion"')
          .replace(/import\s*\{\s*([^}]*?)\s*\}\s*from\s*['"]motion['"]/g, 'import { $1 } from "framer-motion"');
        
        if (content !== updatedContent) {
          await writeFile(fullPath, updatedContent, 'utf8');
          console.log(`Updated: ${fullPath}`);
        }
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  }
}

// Start from the src directory
updateFiles(path.join(__dirname, 'src'))
  .then(() => console.log('All files updated!'))
  .catch(console.error);
