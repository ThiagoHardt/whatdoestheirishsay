import os
from flask import Flask, render_template
from flask_pymongo import PyMongo

if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGODB_NAME"] = os.environ.get("MONGODB_NAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")


mongo = PyMongo(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/play")
def play():
    return render_template("game_page.html")


@app.route("/rules")
def rules():
    return render_template("rules.html")


@app.route("/leaderboard")
def leaderboard():
    return render_template("leaderboard.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
