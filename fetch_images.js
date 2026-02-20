const fs = require('fs');
const https = require('https');

async function getWorkingIds() {
    const query = 'architecture,building,restoration,carpentry,roof,masonry,heritage';
    const url = `https://unsplash.com/napi/search/photos?query=${query}&per_page=20`;

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const ids = json.results.map(r => r.id);
                    resolve(ids);
                } catch (e) {
                    resolve([]);
                }
            });
        }).on('error', reject);
    });
}

async function fixFile() {
    let fileLines = fs.readFileSync('src/app/pages/Directory.tsx', 'utf-8');
    let newLines = fileLines;

    // Find all projectImages URLs
    const regex = /"https:\/\/images\.unsplash\.com\/photo-[^"]+"/g;
    const matches = [...newLines.matchAll(regex)];

    const ids = await getWorkingIds();
    if (ids.length < 18) {
        console.log("Not enough IDs found", ids.length);
        return;
    }

    let i = 0;
    newLines = newLines.replace(regex, (match) => {
        // Don't replace the expert portraits, only the project images
        if (match.includes("photo-") && match.includes("projectImages") === false) {
            // wait, the regex matches the whole string.
            // Let's count, there are 6 portraits and 18 project images.
        }
        return match;
    });

    // Just output the IDs so the LLM can construct the replacements safely
    console.log("FOUND IDS:\n" + ids.slice(0, 18).join('\n'));
}

fixFile();
