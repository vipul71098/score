from pymongo import MongoClient

   Client=MongoClient()
   db=Client["test"]
   collection=db["link"]
   collection.insert(data)
   print(collection)

# from holidayiq import HoliDayiqClass
# from booking import BooKingClass
# from tripadvisor import TripAdvisorClass
# from expedia import ExPediaClass
# from makemytrip import MakeMyTripClass
# p={  
#    "makemytrip":[  
#       "https://www.makemytrip.com/hotels/keys_select_hotel_pimpri-details-pune.html"
#    ],
#    "tripadvisor":[  
#       "https://www.tripadvisor.com/Hotel_Review-g297654-d1563533-Reviews-Keys_Prima_Hotel_Parc_Estique-Pune_Pune_District_Maharashtra.html",
#       "https://www.tripadvisor.com/Hotel_Review-g1968325-d2558303-Reviews-Keys_Select_Hotel_Pimpri_Pune-Pimpri_Chinchwad_Pune_District_Maharashtra.html"
#    ],
   
#    "booking":[  
#       "https://www.booking.com/hotel/in/keys-pimpri.en-gb.html",
#       "https://www.booking.com/hotel/in/the-dukes-retreat-a-keys-resort.html"
  
#    ],
#    "holidayiq":[  
#       "http://www.holidayiq.com/Keys-Hotel-Bangalore-hotel-412406.html",
#       "http://www.holidayiq.com/Keys-Hotel-Visakhapatnam-hotel-529162.html"
#    ],
#    "expedia":[  
#       "https://www.expedia.com/Pune-District-Hotels-Keys-Select-Hotel-Pimpri.h4886853.Hotel-Information",
#       "https://www.expedia.com/Pune-District-Hotels-Royal-Orchid-Golden-Suites-Pune.h1745110.Hotel-Information"
#    ]
# }
# def get_class(raw_name):
# 	if raw_name == "makemytrip":
# 		return MakeMyTripClass
# 	elif raw_name == "tripadvisor":
# 		return TripAdvisorClass
# 	elif raw_name == "booking":
# 		return	BooKingClass
# 	elif raw_name == "holidayiq":
# 		return HoliDayiqClass
# 	elif raw_name == "expedia":
# 		return	ExPediaClass



# SCORES=[]
# for channels in p:
# 	links = p[channels]
# 	class_name = get_class(channels)
# 	for link in links:
# 		score = class_name.get_score(link)
# 		SCORES.append(float(score))
# 		print(SCORES)


# n=len(SCORES)
# avg=sum(SCORES)/n
# print("avg",avg)   