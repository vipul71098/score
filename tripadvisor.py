
import requests
from bs4 import BeautifulSoup as soup
class TripAdvisorClass:
	def get_score(links):
		response = requests.get(links)
		page_soup=soup(response.text,"html.parser")
		page_soup.select('span.overallRating')
		page_soup.select('span.overallRating')[0].get_text()
		trip =page_soup.select('span.overallRating')[0].get_text()
		return trip
		
