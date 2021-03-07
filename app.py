import os
import six
import random
from flask import Flask, render_template
from flask_pymongo import PyMongo
from google.cloud import translate_v2 as translate

if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGODB_NAME"] = os.environ.get("MONGODB_NAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "google-credentials.json"


mongo = PyMongo(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/play")
def play():

    targetLanguage = "ga"
    randomWordsList = getRandomWordsList()
    randomWord = random.choice(randomWordsList)

    translatedWord = translate_text(targetLanguage, randomWord)

    return render_template("game_page.html", translatedWord=translatedWord, randomWordsList=randomWordsList)


@ app.route("/rules")
def rules():
    return render_template("rules.html")


@ app.route("/leaderboard")
def leaderboard():
    return render_template("leaderboard.html")

@ app.route("/about")
def about():
    return render_template("about.html")

def getRandomWordsList():

    randomWordsList = []
    while len(randomWordsList) < 4:
        randomWordsList.append(random.choice(
            open('words.txt').read().split()).strip())

    return randomWordsList


def translate_text(target, text):

    translate_client = translate.Client()

    if isinstance(text, six.binary_type):
        text = text.decode("utf-8")

    result = translate_client.translate(text, target_language=target)

    word = ""
    word = result

    return word


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
