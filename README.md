# Dublin Commissioner for Startups Project

![TRAVIS CI](https://travis-ci.org/databasedsc/database-dsc.svg?branch=master)

![Dublin Commisioner for Startups](https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-9/11140284_1509683702666953_7257968044063040992_n.png?oh=1594bb0d91ce03acc8e176d142bfa3d3&oe=5727B41F&__gda__=1462375611_184907b159884c9bd789788e72c4b8e2)

##Frontend

AngularJS 1.5

- dependencies
	- Node v5.0
	- Gulp
	- Bower
	
Installation Tips:

* Use [nvm for managing node versions](https://github.com/creationix/nvm) and ensure that there's no conflict between them.

		********* if using brew **********
		- brew install nvm
		**********************************

		- cd {into/project/root/dir}
		- nvm install 5.0
		- nvm alias default 5.0
		- npm install
		- npm install -g yo gulp bower
		- bower install
		
		********* starts the app *********
		- gulp serve 
		**********************************

### Gulp Commands
	- gulp serve : starts the application with BrowserSync on a free port (default:3000)
	- gulp build : builds /src into /dist
	- gulp test  : runs front-end app unit tests
	- gulp e2e   : run application end to end tests
	
Note that the e2e runs agaisn't the real backend application, so make sure that an instance of the backend is running on localhost (default port 4000 can be modified on ngConstants.js).

There's a environment(integration) in the backend app designed for this purpose.

`rails s -p 4000 -e integration`
	
##Backend
Ruby On Rails 5.0-beta3 --api-only

- dependecies
  - Ruby v2.2.3
	 
Installation Tips
* Use [rbenv to manage ruby versions](https://github.com/rbenv/rbenv) and ensure that there's no conflict between them. 

		********* if using brew **********
		- brew install rbenv
		**********************************

		- cd {into/project/root/dir}
		- cd server/dsc-db-be
		- rbenv install 2.2.3
		- rbenv rehash
		- bundle install
		- rbenv rehash
		- rake db:create db:migrate db:seed
		
		********* starts the app *********
		- rails s -p 4000
		**********************************
		
### Rails commands

  - rspec : runs unit and integration test
  - rake db:seed : Seed the database with initial data
  - rails s -p 4000 : starts a new instance of the backend in the port 4000

## Database

Posgresql > 9.4

This project uses Postgres Full Text Search functionalities so ensure that the version you will be using have that capability.
 
## Continous Delivery

This project use Travis CI. Refer to the .travis.yml. After the test script tasks passes successfully it will start the deployment to CF.

There are 2 deploy tasks, one for each App.

NOTE: The backend is not being automatically deployed at the moment.
 
##Powered by:

<img src="./PivotalLabs-Logo-OnLight.png" width="400" height="85" /><img src="./PivotalCloudFoundry-Logo-Horizontal-OnLight.png" width="400" height="85" />
