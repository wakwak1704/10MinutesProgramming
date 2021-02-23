import requests
from bs4 import BeautifulSoup
import csv

url = "https://cookpad.com/recipe/6311648"
html = requests.get(url)
soup = BeautifulSoup(html.content, "html.parser")
ingredients = soup.select("div[class='ingredient_row']")

# Implement here.
