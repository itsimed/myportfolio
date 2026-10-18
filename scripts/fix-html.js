import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDirectory = resolve(process.cwd(), 'dist');
await writeFile(resolve(outputDirectory, '.nojekyll'), '');
console.log('Created .nojekyll for GitHub Pages.');
