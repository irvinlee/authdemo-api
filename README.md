# authdemo-api
This is a demonstration of how to implement JWT authentication in a REST API.

## Development
To run the development server, do the following:

1. Clone the repo

2. Run `npm install` or `yarn`

3. Run `npm run dev` or `yarn dev`

4. After a few seconds, the server will be accesible at http://localhost:5000

## Sample Users
The sample users are hard-coded and can be found inside the `/fixtures/Users.js` file.

## Public Endpoints
- `/public` just returns some dummy datea from `/fixtures/PublicInfo.js`

## Private Endpoints
- `/users` returns all the user emails that are hard-coded in `/fixtures/Users.js`. 
