### Description ###

Simple Node JS Express server handling `POST`, `GET`, `PUT`, `DELETE` requests on 'user' objects.

#### User Schema ####
```
var UserSchema   = new Schema({
	firstName: String,
	lastName: String,
	location: String,
	email: String,
	facebookId: String,
});

```

### How to use###
1. `mongod`, verify that mongod is running.
2. `npm i`, install the node_modules needed for the server to run.
3. `node server.js`, deploy the server (port 8008 is default, in case env is missing).
4. Check the `Demo_User_Api.postman_collection` (probably import it in Postman) to send requests to the server.

