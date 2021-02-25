import requests
from bs4 import BeautifulSoup
import datetime
import matplotlib.pyplot as plt

url = "https://github.com/wakwak1704"
html = requests.get(url)
soup = BeautifulSoup(html.content, "html.parser")
nodes = soup.select(
    "div[class*='ContributionCalendar'] svg g g rect[class*='ContributionCalendar-day']")

# Implement here.
for node in nodes:
    dateStr = node['data-date']
    levelstr = node['data-level']
    splitedDateStr = dateStr.split('-')
    date = datetime.date(int(splitedDateStr[0]), int(
        splitedDateStr[1]), int(splitedDateStr[2]))
    LAST_DAY_OF_LAST_MONTH = datetime.date(2021, 1, 31)
    FIRST_DAY_OF_NEXT_MONTH = datetime.date(2021, 2, 28)
    if LAST_DAY_OF_LAST_MONTH < date and FIRST_DAY_OF_NEXT_MONTH > date:
         print()  

graph = plt.subplots()
graph.pie([10, 20, 30, 40])
graph.axis('equal')

