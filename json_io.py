
import requests
import arrow
import time
from bs4 import BeautifulSoup as soup
from flask import Flask, render_template, request, redirect, Response
from holidayiq import HoliDayiqClass
from booking import BooKingClass
from tripadvisor import TripAdvisorClass
from expedia import ExPediaClass
from makemytrip import MakeMyTripClass
from zomato import ZomatoClass
from pymongo import MongoClient



app = Flask(__name__)#special variable that gets as value the string "__main__" when you’re executing the script
app.config.update(DEBUG=True)

@app.route("/")
def index():
	return render_template('index.html')
			

@app.route('/receiver', methods = ['POST'])
def get_links():
	# mdata=request.get_json()
	# loc=[]
	# hotel=[]
	# for x in mdata:
	# 	if x == "hotel":
	# 		hotel.append(mdata[x])
	# 		print(hotel)
	# 	elif x =="location":
	# 		loc.append(mdata[x])
	# 		print("loc",loc)


			SCORES=[]
			Response = request.get_json()
			
			dict={}
			SCORES=[]
			for channel in Response:
				links=Response[channel]
				dict[channel]=[]
				class_name = get_class(channel)
				for link in links:
					
					score = class_name.get_score(link)
					SCORES.append(float(score))
					dict[channel].append({"links":link,"scores":score})

										
												
			n=len(SCORES)
			avgg=sum(SCORES)/n
			avg=round(avgg,2)
			print("avg",avg)
			#connection to mongodb
			Client=MongoClient()
			db=Client["test"]
			collection=db["link"]
			tim=time.strftime("%I:%M:%S")
			date=arrow.now().format('YYYY-MM-DD')
			print("dict",dict)
			collection.insert({"data":dict,"average":avg,"date":date,"time":tim})
			return str(avg)



			
			
					



def get_class(raw_name):
	if raw_name == "makemytrip":
		return MakeMyTripClass
	elif raw_name == "tripadvisor":
		return TripAdvisorClass
	elif raw_name == "booking":
		return	BooKingClass
	elif raw_name == "holidayiq":
		return HoliDayiqClass
	elif raw_name == "expedia":
		return	ExPediaClass
	elif raw_name == "zomato":
		return ZomatoClass


		return 'send'

					
			

if __name__ == "__main__":
	app.run(port=9000)
