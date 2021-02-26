import requests
from bs4 import BeautifulSoup
import datetime
import matplotlib.pyplot as plt

url = "https://github.com/wakwak1704"
html = requests.get(url)
soup = BeautifulSoup(html.content, "html.parser")
# 余計なノードが釣られてこないようにsvgタグやgタグをネストした構造でノードをセレクトしている
nodes = soup.select(
    "div[class*='ContributionCalendar'] svg g g rect[class*='ContributionCalendar-day']")

# 配列で各LEVELの合計日数を管理する
totalDaysOfEachLevel = [0, 0, 0, 0, 0]

# 草の数だけループ
for node in nodes:
    dateStr = node['data-date']
    levelstr = node['data-level']
    splitedDateStr = dateStr.split('-')
    date = datetime.date(int(splitedDateStr[0]), int(
        splitedDateStr[1]), int(splitedDateStr[2]))
    level = int(levelstr)
    # 2月中のデータのみを取得するために1月末日より大きく3月初日より小さい範囲のデータのみを見る
    LAST_DAY_OF_LAST_MONTH = datetime.date(2021, 1, 31)
    FIRST_DAY_OF_NEXT_MONTH = datetime.date(2021, 3, 1)
    # その日のレベルごとにそのレベルを取得した合計日数を求める
    if LAST_DAY_OF_LAST_MONTH < date and FIRST_DAY_OF_NEXT_MONTH > date:
        if level == 4:
            totalDaysOfEachLevel[4] += 1
        elif level == 3:
            totalDaysOfEachLevel[3] += 1
        elif level == 2:
            totalDaysOfEachLevel[2] += 1
        elif level == 1:
            totalDaysOfEachLevel[1] += 1
        else:
            totalDaysOfEachLevel[0] += 1
# グラフのデータと塗りつぶしの色を指定（今回はパイチャートを表示する）
plt.pie(totalDaysOfEachLevel, colors=["#e1e4e8", "#85e89d", "#34d058", "#22863a", "#144620"])
# グラフを描画
plt.show()
