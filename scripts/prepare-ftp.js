import { copyFile, mkdir, readdir, access } from 'fs/promises';
import { join } from 'path';
import { constants } from 'fs';

async function copyFiles(src, dest) {
  try {
    await mkdir(dest, { recursive: true });
    const files = await readdir(src, { withFileTypes: true });
    
    for (const file of files) {
      const srcPath = join(src, file.name);
      const destPath = join(dest, file.name);
      
      if (file.isDirectory()) {
        await copyFiles(srcPath, destPath);
      } else {
        await copyFile(srcPath, destPath);
      }
    }
  } catch (err) {
    console.error('Error preparing files for FTP:', err);
    process.exit(1);
  }
}

async function main() {
  try {
    // First, ensure the ftp-ready directory exists and is clean
    await mkdir('ftp-ready', { recursive: true });
    
    // Copy the entire dist directory to ftp-ready
    await copyFiles('dist', 'ftp-ready');
    
    console.log('Files prepared for FTP upload in ftp-ready directory');
  } catch (err) {
    console.error('Error in main process:', err);
    process.exit(1);
  }
}

main();
