# Toys

Angular front-end written in Typescript used to track a list of Lego toys. The server-side APIs are exposed AWS lambda functions.

## Pre-requisites
* Install NodeJS 14.x
* Install latest Angular (10+) and Angular CLI
  * `npm install -g @angular/core@10 @angular/cli@10`
  * or `npm update -g @angular/core@10 @angular/cli@10`

## Running application

### Locally
To launch the application locally:

* When it's the first time, you must first run `npm install`
* From a console run `ng serve`
* Open a browser and navigate to http://localhost:4200

### Tests
* From a console run `ng test` to run unit tests

## Production
To prepare for production, execute the following:

* From a console run `ng build --prod`
* From the AWS S3 console, upload all the files to the bucket from the `dist` folder

_make sure CORS is configured in the API Gateway and the API is re-deployed_

## References
* https://levelup.gitconnected.com/learn-how-to-create-and-deploy-the-angular-application-to-aws-serverless-s3-81f8a838b563
* https://www.c-sharpcorner.com/article/add-bootstrap-5-in-angular-11/
* https://docs.aws.amazon.com/lambda/latest/dg/python-handler.html
* https://stackoverflow.com/questions/42531643/amazon-s3-static-web-hosting-caching
