TODO:
0. MAKE SURE YOU START SERVER IN ROOT!!! NOT CLIENT!!!
1. Inside DrinkCard and DrinkDetail - figure out how to dynamically import image
2. Figure out bug with routing
3. Create Route
4. Delete Route
5. Edit Route

On 05-10:
- Go to CreateDrink.jsx.  We just updated the ingredient list to be able to add/remove ingredients to a collection. (not saved to db but local state.) 
- Next step would be to clean up variable and function names.  They are confusing. 
- Handle Amounts next
- See if there are additional fields on form to collect from user
- Making the UI layout a little nicer if no more fields to add on form


NOTES:
1. How do we store and consume images?
   1. Will the user upload their own photos?  Will we need links to public urls?
   -- Get images of glasses- that is the default-- you can upload your own photos (locally bc we will each have our own)


Resources:
Start the server: PORT=3001 node bin/www
Start clint: npm start

Create React-App: https://reactjs.org/docs/create-a-new-react-app.html

https://daveceddia.com/create-react-app-express-backend/

https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/
