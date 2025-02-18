import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'web/dist');

try {
    await fs.emptyDir(distDir);
    console.log('Emptied dist directory');
} catch (err) {
    console.error('Error emptying dist directory:', err);
}
