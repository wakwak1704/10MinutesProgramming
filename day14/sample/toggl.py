import base64
import urllib3
import json
import math
import datetime


def getWorkDescription():
    now = datetime.datetime.now()
    JST = datetime.timezone(datetime.timedelta(hours=+9), 'JST')
    start = datetime.datetime(
        now.year, now.month, now.day, 0, 0, 0, 0, tzinfo=JST)
    end = datetime.datetime(now.year, now.month, now.day,
                            23, 59, 59, 999999, tzinfo=JST)
    url = "https://api.track.toggl.com/api/v8/time_entries"
    print(start.isoformat(), end.isoformat())
    fields = {"start_date": start.isoformat(),
              "end_date": end.isoformat()}
    token = "xxx"
    headers = urllib3.util.make_headers(basic_auth=token + ':api_token')
    http = urllib3.PoolManager()
    req = http.request(method="get", url=url, fields=fields, headers=headers)
    if(req.status != 200):
        return "Toggl API returned " + str(req.status)
    else:
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


now = datetime.datetime.now()
fileName = "dailyReport" + str(now.month) + "-" + str(now.day) + ".txt"
with open(fileName, "w") as f:
    f.write("■雑記")
    f.write("■今日のランチ")
    f.write("■実績\n")
    f.write(getWorkDescription())
    f.write("■改善")
