import re
import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open('src/app/pages/Directory.tsx', 'r') as f:
    content = f.read()

urls = re.findall(r'https://images.unsplash.com/[^\s"\'\`]+', content)
broken = []

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, context=ctx)
        if res.getcode() != 200:
            broken.append(url)
    except Exception as e:
        broken.append(url)

print(f"Tested {len(urls)} urls. Found {len(broken)} broken.")
for b in broken:
    print(b)
