import requests
from bs4 import BeautifulSoup
import csv

# スクレピングするサイト
url = "https://cookpad.com/recipe/6311648"
# HTMLテキストを取得
html = requests.get(url)
# Beautiful SoupでHTMLを解析する
soup = BeautifulSoup(html.content, "html.parser")
# classに"ingredient_row"を含むdiv要素を取得
ingredients = soup.select("div[class='ingredient_row']")
# CSVファイルをオープン（新規作成）
with open("ingredient.csv", "w") as f:
    writer = csv.writer(f)
    # 材料の数だけループ
    for ingredient in ingredients:
        # 材料名と量のテキストを取得
        name = ingredient.select("div[class*='ingredient_name']")[0].text.strip()
        quantity = ingredient.select("div[class*='ingredient_quantity']")[0].text.strip()
        # 標準出力
        print(name, quantity)
        # CSVに書き込み
        writer.writerow([name, quantity])
