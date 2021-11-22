import asyncio
from pyppeteer import launch
import imgcompare
import os
from dotenv import load_dotenv
import pymongo

load_dotenv()


absolute_path = os.path.dirname(os.path.abspath(__file__))

myclient = pymongo.MongoClient(os.getenv("MONGO_URL"))
myDB = myclient[os.getenv("DB")]
myCol = myDB[os.getenv("COLLECTION")]

async def screenshot(path, name, isRef):
    browser = await launch()
    page = await browser.newPage()
    await page.goto('file://{}'.format(os.path.join(absolute_path, path)))
    if isRef:
        await page.screenshot({'path': 'compare.png'})
    else:
        await page.screenshot({'path': 'images/{}.png'.format(name)})
    await browser.close()


refHtml = input("enter path to reference html file: ")
submissionDir = input("enter directory where submissions are stored: ")
asyncio.get_event_loop().run_until_complete(screenshot(path=refHtml, name="", isRef=True))
comparision_img = "compare.png"
try: 
    os.mkdir(os.path.join(absolute_path, "images"))
except OSError as error: 
    pass

for html_file in os.listdir(submissionDir):
    name, extension = os.path.splitext(html_file)
    if(name==refHtml.split('.')[0]):
        continue
    if extension == '.html':
        print(html_file)
        asyncio.get_event_loop().run_until_complete(screenshot(path=os.path.join(submissionDir, html_file), name=name, isRef=False))
        print(name)
        img = "images/{}.png".format(name)
        percentage = round((100 - imgcompare.image_diff_percent(comparision_img, img)), 3)
        print(percentage)
        score = {
            "name": name,
            "percentage": percentage
        }
        x = myCol.insert_one(score)
        print(x.inserted_id)