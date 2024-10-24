Question Scheduler API

This is a simple Express.js API that manages questions for different countries, updating the question status weekly using a cron job.

Features:
* Serves questions for different countries
* Automatically updates questions on a weekly basis using node-cron
* Fetch currently showing questions based on the country.


Technologies Used:
* Node.js: JavaScript runtime for server-side programming.
* Express: Web framework for Node.js.
* Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
* Node-cron: Cron job scheduler for Node.js.


My strategy

I use a Event-Driven approach

* I first created a cron job that select a question from the questions-bank for each supported countries

* then when ever a user makes a request, they get the current question of the week base on their country assuming their location is coming from the frontend

* Keeping track on the isShown and status

* when all questions have been shown it reset and start over

* My code can be further optimized by implementing redis to cache data, and also using express-rate-limit to handle the number of times a user an send a request 

Running the API

* Make sure you have Node.js and MongoDB installed on your machine
* Clone the repository and navigate to the project directory
* Install dependencies using npm install
* Start the API using npm start
The API will start listening on port 3000

Testing the API
* Use GET http://localhost:3000/:country to retrieve a question for a country
* Use POST http://localhost:3000/ to create a new question

COMMENTS WHERE GENERATED BY AI IN THE CODE
