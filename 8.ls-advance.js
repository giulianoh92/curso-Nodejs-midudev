import { promises as fs } from 'node:fs';
import path from 'node:path';

const folder = process.argv[2] ?? '.';

async function ls(folder) {
    let files;
    try {
        files = await fs.readdir(folder);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    const filePromises = files.map(async (file) => {
        const filePath = path.join(folder, file);
        try {
            const fileStats = await fs.stat(filePath);
            return {
                name: file,
                isDirectory: fileStats.isDirectory(),
                size: fileStats.size,
            };
        } catch (err) {
            console.error(`Error reading file stats for ${filePath}:`, err);
        }
    });

    const fileDetails = await Promise.all(filePromises);
    console.log(fileDetails);
}

ls(folder);