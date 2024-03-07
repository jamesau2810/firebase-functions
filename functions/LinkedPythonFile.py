# Use techathon_use environment only
from PyDictionary import PyDictionary 

# Short Hand Breaker
# dictionary  = PyDictionary()
# Title = input("Enter degree: ")
# brkdwn = Title.split()
# print(brkdwn)
# titleStr = []
# SubjectStr = []
# for i in brkdwn:
#     # re = {}
#     # tir = ""
#     try:
#         dictionary.meaning(i)
#     except:
#         titleStr.append(i)
#         # print("An exception occurred")
#     else:
#         SubjectStr.append(i)
# print(titleStr,SubjectStr)
# raise IndexError("Error: The Following Error occured: %s" % e)
    # print(i,dictionary.meaning(i))

# for i in sd:
#     print(i)

"""
Bachelor of Engineering - BE, Computer Science
Sep 2018 - Jul 2023Sep 2018 - Jul 2023
Grade: First Class Honors

Maybe a recursive removal of hypening
Full-Stack Developer

BBA in Global BusinessBBA in Global Business
2022 - 20262022 - 2026
Extracurricular activities:
• HKUST Case Analys

Bachelor of Science - BS Global China Studies, Minor in Sustainability, Social SciencesBachelor of Science - BS Global China Studies, Minor in Sustainability, Social Sciences
Sep 2021 - 2025Sep 2021 - 2025
Activities and societies: Financial Controller, 30th HKUST Students' Union Editorial Board
• Manage the financial status of the association
• Do news report on school affairs and social issues
Data Science Intern

"""


strin = "[\""
dt = open('superData.txt','r')
Lines = dt.readlines()
for n,i in enumerate(Lines):
    if len(i[:-1])==0:
        continue
    else:
        sdf = "\",\"" if (n+1)<len(Lines) else "\"]"
        lm = i[:-1]+sdf
        strin += lm
ab = open('fault.txt','w')
ab.write(strin)
dt.close()
ab.close()

# Random date Generator




"""



https://spotterful.com/blog/job-description-template/ A->G

"""

"""

"""
