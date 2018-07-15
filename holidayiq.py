from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
class HoliDayiqClass:
	def get_score(links):
		uClient=uReq(links)
		page_html=uClient.read()
		uClient.close()
		page_soup=soup(page_html,"html.parser")
		page_soup.select('span.dtl-rating-num')[0].get_text()
		split=page_soup.select('span.dtl-rating-num')[0].get_text()
		holi=split[:3]
		return holi
