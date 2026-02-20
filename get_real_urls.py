import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = []
print("Fetching 4 random architecture/restoration images...")
for _ in range(4):
    try:
        req = urllib.request.Request(
            "https://source.unsplash.com/random/800x600/?architecture,building,restoration,heritage", 
            headers={'User-Agent': 'Mozilla/5.0'}
        )
        res = urllib.request.urlopen(req, context=ctx)
        urls.append(res.url)
    except Exception as e:
        print("Error fetching:", e)

for u in urls:
    print(u)
