import requests
from bs4 import BeautifulSoup as soup
class BooKingClass:
	def get_score(links):
		response = requests.get(links)
		page_soup=soup(response.text,"html.parser")
		page_soup.select('span.review-score-badge')[0].get_text()
		split=page_soup.select('span.review-score-badge')[0].get_text()
		b=split[1:4]
		book=float(b)/2
		return book
