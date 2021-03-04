# What does the Irish say?


![Website](https://img.shields.io/website?style=for-the-badge&url=) ![GitHub last commit](https://img.shields.io/github/last-commit/thiagohardt/whatdoestheirishsay?style=for-the-badge) ![enter image description here](https://img.shields.io/github/languages/count/thiagohardt/whatdoestheirishsay?style=for-the-badge)
 




# UX

placeholder xxxxxxxxxxxxxxxxxxx placeholder

## User Story

placeholder xxxxxxxxxxxxxxxxxxx placeholder


## MVP

placeholder xxxxxxxxxxxxxxxxxxx placeholder

### Existing Features

placeholder xxxxxxxxxxxxxxxxxxx placeholder

### Features Left to Implement

placeholder xxxxxxxxxxxxxxxxxxx placeholder

## Design

### Wireframe
placeholder xxxxxxxxxxxxxxxxxxx placeholder

### Color Scheme

placeholder xxxxxxxxxxxxxxxxxxx placeholder
![2Iaxbn.md.png](https://iili.io/2Iaxbn.md.png)<br>
placeholder xxxxxxxxxxxxxxxxxxx placeholder

### Typography

placeholder xxxxxxxxxxxxxxxxxxx placeholder


## Technologies Used

Throughout the project, the following technologies were used.

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3)
- [JavaScript](https://www.javascript.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Python](https://www.python.org/)
- [Flask](https://flask.palletsprojects.com/en/1.1.x/)
- [mongoDB](https://www.mongodb.com/)

## Testing

### Testing User Stories 

placeholder xxxxxxxxxxxxxxxxxxx placeholder


### Known Issues

placeholder xxxxxxxxxxxxxxxxxxx placeholder

## Deployment

The website is hosted and deployed by [Heroku](https://www.heroku.com/home).
Everything is deployed from the master branch and updates automatically whenever the branch is updated in GitHub.

1.  Log in Heroku (or create a new one if you don't have one.);
2.  Go to your dashboard.
3.  Click on the "New"  -> "Create new app" button located right under the navbar.
4.  Choose a unique name for your app.
5.  Choose a region (preferably close to where you are located).
6.  If everything works fine you should see the overview page of your app.
7.  Click on Settings tab.
8.  Reveal Config vars.
9.  Here we configure the IP, MONGO_DBNAME, MONGO_URI, PORT, SECRET_KEY values (thoose are  not public and are the same values on my env.py file(which is also private)).
10. Click on deploy tab.
11. In the case of this project I chose to conect my app to my repository in GitHub, so it auto updates my heroku app whenever the project is pushed. 
12. Click on the Deploy Branch button. 
13. DONE!

### Forking
If you want to fork the repository to your own GitHub account you can by clicking on the “fork” button under the navbar with your profile.

### Cloning

 1. If you want to clone the repository into a local file you can by:
 2. Clicking on the green button “Code” and copying the url showed.
 3. Open GitBash
 4. Change directory to the desired location where you want to clone the
    files to.
 5. Type “git clone” and paste the copied URL
 6. Press enter and you should have your local file cloned and ready.
 7. After opening the folder you should create a new file in the root directory, name it env.py
 8. In env.py you can set your environment variables.  
    ``` import os
      import os

      os.environ.setdefault("IP", "<your value>")
      os.environ.setdefault("PORT", "<your value>")
      os.environ.setdefault("SECRET_KEY", "<your value>")
      os.environ.setdefault("MONGO_URI", "<your value>")
      os.environ.setdefault("MONGO_DBNAME", "<your value>") 

## Credits

placeholder xxxxxxxxxxxxxxxxxxx placeholder

### Content

placeholder xxxxxxxxxxxxxxxxxxx placeholder

### Media

placeholder xxxxxxxxxxxxxxxxxxx placeholder



