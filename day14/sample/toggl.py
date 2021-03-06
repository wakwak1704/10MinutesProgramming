import base64
import urllib3
import json
import math


def getWorkDescription():
    url = "https://api.track.toggl.com/api/v8/time_entries"
    fields = {"start_date": "2021-02-01T12:00:00+02:00",
              "end_date": "2021-03-01T12:00:00+02:00"}
    token = "xxx"
    headers = urllib3.util.make_headers(basic_auth=token + ':api_token')
    http = urllib3.PoolManager()
    req = http.request(method="get", url=url, fields=fields, headers=headers)
    entries = json.loads(req.data)
    result = ""
    isFirstLine = True
    for entry in entries:
        if(not isFirstLine):
            result = result + "\n"
        else:
            isFirstLine = False
        result = result + entry["description"]
        result = result + " ("
        result = result + (str(math.ceil(entry["duration"] /
                                         (60 * 60 * 60) * 10) / 10))
        result = result + ("時間")
        result = result + ")"
    return result


print(getWorkDescription())
