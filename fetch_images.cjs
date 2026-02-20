const fs = require('fs');
const https = require('https');

async function getWorkingIds() {
    const query = 'architecture,building,restoration,carpentry,roof,masonry,heritage';
    const url = `https://unsplash.com/napi/search/photos?query=${query}&per_page=30`;

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

async function run() {
    const ids = await getWorkingIds();
    console.log("FOUND IDS START");
    console.log(ids.join('\n'));
    console.log("FOUND IDS END");
}

run();
