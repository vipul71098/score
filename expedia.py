import requests
from bs4 import BeautifulSoup as soup
class ExPediaClass:
	def get_score(links):
		response = requests.get(links)
		page_soup=soup(response.text,"html.parser")
		c=page_soup.find("span", {"class": "rating-scale"}).get_text()
		ex=c[:4]
		return ex
