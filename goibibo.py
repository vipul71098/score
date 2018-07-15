import requests
from bs4 import BeautifulSoup as soup
class GoiBiboClass:
	def get_score():
		response = requests.get(my_url)
		page_soup=soup(response.text,"html.parser")
		go=page_soup.find('span',itemprop="ratingValue").get_text()
		return go

