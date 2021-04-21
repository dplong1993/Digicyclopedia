# Digicyclopedia
This is a solo project where information about different digimon and digimon media can be viewed. Live site can be viewed [here](https://digicyclopedia.herokuapp.com/)

# MVP List
### User log-in (11/4/20)
* Users with accounts in the database are able to log-in to the site.
* Users will be able to select their favorite digimon or digimon media and add that to a favorites list that will appear on their profile page.

### New user account creation (11/4/20)
* Users can create a new account.
* After creating a new account, users can use that account to log-in to the site.

### Demo user account log-in (11/4/20)
* A user account that anyone can use to explore the functionality of the site.

### NavBar (11/5/20)
* A navbar will be present on all pages besides the login and signup page.
* It will contain different buttons to help the user navigate through the pages of the site.

### Digimon page (11/5/20)
* This will be the page that users are redirected to after login or signup.
* This page will have a list of different digimon images.
* There will be tabs to view different groups of digimon by their levels.
* Clicking on those digimon images will take the user to a digimon information page.

### Digimon Info Page (11/6/20)
* This page will contain information about one specific digimon.
* The information will contain stats like level and digivolution sources along with a breif description about the digimon.

### Digimon Media page (11/7/20)
* This page will have a list of different digimon media(movies, tv shows, video games, etc.) images.
* There will be tabs to view different groups of media based on their types.
* Clicking on a digimon media image will take the user to a digimon media information page.

### Digimon Media Info page (11/7/20)
* This page will contain information about one specific digimon media.
* The information will contain different stats about the media like release date and end date along with a breif description about the media.

### Profile Page (11/8/20)
* This page will contain information about the current user's account.
* There will be a section that contains account information like username or email address and there will be options to update that information.
* There will be a section that contains a list of the user's favorite digimon and digimon media.
* The favorite section will have two tabs to differentiate between digimon and digimon media.

### Bonus: Chat room/ Messaging system for Users
* This will be an area where different users can send each other messages.
* The current user will be able to message multiple other users.
* The list of messages sent in a conversation will persist.

### Bonus: User Forum
* This will be a forum area where users can talk about different ideas or topics.
* Users will be able to post new topics that other users can respond to.
* Users will be able to respond to topics created by other users.

## Schema

### Users

| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| email | string | not null, unique |
| username | string | not null, unique |
| password_digest | bytea | not null |
| photo_url | string | not null |

* has_many Digimon
* has_many Media

### Digimon

| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| name | string | not null |
| level | string | not null |
| previous_form | array | |
| next_form | array | |
| bio | text | not null |
| photo_url | string | not null |

* belongs_to User

### Media

| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| name | string | not null |
| type | string | not null |
| bio | text | not null |
| photo_url | string | not null |

* belongs_to User

## Backend Routes

### **_API Endpoints_**

* _POST /login_
  * Checks the supplied username and password to authenticate the user.
* _POST /logout_
  * Logs the user's profile out of the account.

#### users

* _GET api/users/_
  * Returns all users of the application.
* _POST api/users/_
  * Creates a new user.
* _GET api/users/:id_
  * Returns a single user with the id that is provided as a parameter.
* _POST api/users/:id_
  * Updates the email or username of the user with the id that is provided as a parameter.
* *GET api/users/:id/fav_digimon*
  * Returns all the favorited digimon of the user with the id that is provided as a parameter.
* *POST api/users/:id/fav_digimon*
  * Adds a new digimon to the list of favorite digimon of the user with the id that is provided as a parameter.
* *DELETE api/users/:id/fav_digimon*
  * Removes a digimon from the list of favorite digimon of the user with the id that is provided as a parameter.
* *GET api/users/:id/fav_media*
  * Returns all the favorited media of the user with the id that is provided as a parameter.
* *POST api/users/:id/fav_media*
  * Adds a new media to the list of favorite media of the user with the id that is provided as a parameter.
* *DELETE api/users/:id/fav_media*
  * Removes a media from the list of favorite media of the user with the id that is provided as a parameter.

#### digimon

* _GET api/digimon/_
  * Returns all digimon of the application.
* _GET api/digimon/baby_
  * Returns all digimon of the application with a level of baby.
* _GET api/digimon/in-training_
  * Returns all digimon of the application with a level of in-training.
* _GET api/digimon/rookie_
  * Returns all digimon of the application with a level of rookie.
* _GET api/digimon/champion_
  * Returns all digimon of the application with a level of champion.
* _GET api/digimon/ultimate_
  * Returns all digimon of the application with a level of ultimate.
* _GET api/digimon/mega_
  * Returns all digimon of the application with a level of mega.
* _GET api/digimon/:name_
  * Returns the digimon with the name that is provided as a parameter.

#### media

* _GET api/media_
  * Returns all media of the application.
* _GET api/media/tv-show_
  * Returns all media of the application with the type tv-show.
* _GET api/media/movie_
  * Returns all media of the application with the type movie.
* _GET api/media/game_
  * Returns all media of the application with the type game.
* _GET api/media/ccg_
  * Returns all media of the application with the type ccg.
* _GET api/media/:name_
  * Returns the media with the name that is provided as a parameter.


## Frontend Routes

The components will be organized as such:

* Root
  * Provider
    * App
          * NavBar
          - Main
          - Footer

The following routes will render in our App between the NavBar and Footer.

* /
  * This homepage will be accessible to anyone that visits the site.
  * Shows the Digimon Logo
  * Has a blurb about the site
  * Has a two buttons that will take you to a login page and signup page respectively.

* /
  * This homepage that will be accessible to anyone that has signed into the site.
  * This page has a list of the different things you can do on the site and instructions for how to accomplish each task.

* /login
  * This page contains a form allowing the user to enter their username and password to be authenticated.
  * There are buttons to login, login as a demo user, and to signup. The signup button will take the user to the signup page.

* /signup
  * This page will allow a user to create a new account with the application.
  * This page contains a form that allows users to enter email, username, and password for their accounts.
  * This page contains a signup button and a login button that will take the user to the login page.

* /digimon
  * This page contains a gallery view of different digimon with a heart that gives users the ability to add that digimon to their favorite list.
  * Each digimon picture is clickable and will take users to a digimon info page.
  * The gallery is set up with several filter methods allowing users to view digimon that belong to certain groups.
  * The gallery also contains a search bar that will allow users to search for a particular digimon.

* /digimon/DigimonName
  * This page will contain information about the specific digimon with the name that is in the url.
  * This page also contains links for the next and previous forms of digimon that have a next or previous form.

* /media
  * This page will render a gallery view of different media with a heart that gives users the ability to add each media to their favorite list.
  * This page has similar filter and search feature as the digimon page.

* /media/MediaName
  * This page will contain information about the specific media with the name that is in the url.

* /profile
  * This page will render the user profile for the currently logged-in user.
  * There is a user photo that appears which corresponds to a default user image that is stored in the database.
  * There is a section that shows the user's username and email and allows the user to update this information for accounts other than the demo user account.
  * There is a gallery view of the user's favorited digimon and media with filter options to show only digimon or only media.
  * There is a search feature built into the gallery view allowing users to search for a particular digimon or media.
