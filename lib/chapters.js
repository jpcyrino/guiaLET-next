import fs from 'fs';
import path from 'path';

// Gets the path to the chapters
const chapterPath = path.join(process.cwd(), 'chapters');

// Lists all the chapter Ids
export function getChaptersId(){
    const fileNames = fs.readdirSync(chapterPath);
    return fileNames.map(fileName => {
        return {
            params : {
                chapter : fileName.replace(/\.html$/,'')
            }
        }
    })
}


export function getChapterJSX(chapter){
    const fullPath = path.join(chapterPath, `${chapter}.html`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return {
        chapter,
        fileContents
    }

}