import base64
import urllib3

url = "http://sample.com/index.html"
token = "xxx"
headers ={}
headers["authorization"] = "Basic " + base64.b64encode(token.encode()).decode('utf-8')
http = urllib3.PoolManager()
req = http.request(method="get", url=url, headers=headers)
print(req.data)