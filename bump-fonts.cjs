const fs = require('fs');
const path = require('path');

const walkSync = function (dir, filelist) {
    const files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            filelist = walkSync(dir + '/' + file, filelist);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                filelist.push(path.join(dir, file));
            }
        }
    });
    return filelist;
};

const files = walkSync('./src');
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;

    // Bump specific responsive pairs first to avoid conflicts
    // e.g., text-[15px] md:text-base -> text-base md:text-lg
    content = content.replace(/text-\[15px\]([\s\S]*?)md:text-base/g, 'text-base$1md:text-lg');
    content = content.replace(/text-\[13px\]([\s\S]*?)md:text-base/g, 'text-sm$1md:text-base');
    // Replace standalone classes
    content = content.replace(/text-\[15px\]/g, 'text-base');
    content = content.replace(/text-\[13px\]/g, 'text-sm');
    content = content.replace(/text-\[14px\]/g, 'text-base');
    content = content.replace(/text-\[12px\]/g, 'text-sm');
    // Replace standard tailwind small sizes
    // We need to be careful with text-sm as it could have a prefix like "sm:text-sm"
    // We use word boundaries \b
    content = content.replace(/\btext-xs\b/g, 'text-sm');
    content = content.replace(/\btext-sm\b/g, 'text-base');

    // By replacing text-sm to text-base, existing text-base isn't touched unless it's too small compared to new elements.
    // Wait, if text-sm -> text-base, then it might make some UI elements slightly misaligned, but 14px -> 16px is exactly what the user wants for "readability".
    // Let's also bump md:text-sm to md:text-base
    content = content.replace(/\bmd:text-sm\b/g, 'md:text-base');
    content = content.replace(/\bmd:text-xs\b/g, 'md:text-sm');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        changedFiles++;
    }
});

console.log(`Updated fonts in ${changedFiles} files.`);
