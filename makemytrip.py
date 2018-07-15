import requests
from bs4 import BeautifulSoup as soup
class MakeMyTripClass:
	def get_score(links):
		response = requests.get(links)
		page_soup = soup(response.text, "html.parser")
		make = page_soup.find("div", {"class": "htD-review-rate pull-left"}).span.get_text()
		return make
