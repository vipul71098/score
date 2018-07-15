import requests
from bs4 import BeautifulSoup as soup
class ZomatoClass:
	def get_score(links):
		header = {"User-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"}
		response = requests.get(links,headers=header)
		page_soup = soup(response.text, "html.parser")
		res=page_soup.find("div", {"class":"res-rating pos-relative clearfix mb5"}).div.get_text()
		split=res.split()
		rate=split[0]
		rating=float(rate[:3])
		return rating

