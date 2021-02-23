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
ingredients = soup.select("div[class*='ingredient_row']")
print(ingredients)
