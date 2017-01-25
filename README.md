# sequelizedBurger
Same as the burger repo except this time I'll be using sequelize.

Fullstack project utilizing node, mysql, sequelize, handlebars, express, and the mvc pattern. Users of the site will be able to enter the name of any burger they'd like and have it appear on the left side of the page. The user can then choose to press the devour button that will move the devoured burger to the right side of the screen. Users can enter as many burgers as they like.

## Getting Started
* First clone the github repo onto your local machine
* Run npm install to install the dependencies
* Go to the connection.js and change the user, password to your own info

```javascript
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'yourUsername',
	password: 'YourPassword',
	database: 'burgers_db'
});


connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

```

* Insert initial data using the schema.sql and seeds.sql
* Once data has been entered run the node server in your terminal
* Open your browser and use localhost:3000 to use the application
* From there enter what ever burgers you like

## Technologies Used 
* Express
* Node.js
* express-handlebars
* Mysql
* body-parser
* sequelize
* sequelize-cli
## Authors
* **Lonnie** 
