import requests
from bs4 import BeautifulSoup
import datetime
import matplotlib.pyplot as plt

url = "https://github.com/wakwak1704" #Change me!
html = requests.get(url)
soup = BeautifulSoup(html.content, "html.parser")
nodes = soup.select(
    "div[class*='ContributionCalendar'] svg g g rect[class*='ContributionCalendar-day']")

# Implement here.