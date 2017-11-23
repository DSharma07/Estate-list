## McMakler Coding Challenge - Frontend

Details:-

1. This is a Real Estate Advertisement Application designed in MERN Stack (API, React.js, Express.js, Node.js) using ES6. 
2. Webpacks, lint tools are used.
3. I am using styled-components which is the latest form. Styled-components are pure visual primitives that act as a wrapping component; they can be mapped to actual html tags and what they do is wrap the children components with the styled-component. CSS Evolution: From CSS, SASS, BEM, CSS Modules to Styled Components.
4. Data displayed on the Website is retrieved from "https://api.mcmakler.de/v1/advertisements". As this API contains 735 records, thus on load, it takes bit of time to load the data. 

To get started:-

1. npm install // This will install server side dependencies
2. To run the server: npm start  // Server will run at http://localhost:4000
3. cd client // Move to client directory. React code lies here
4. npm install // This will install client side dependenices
5. To run the client: npm start  // Server will run at http://localhost:3000


Features:-

1. Open application at http://localhost:3000
2. Landing page will be displayed with top 10 records of API data. (As per requirement, only 10 records are displayed).
3. Each advertisement displays below 8 items: 
    -Thumbnail Image, 
    - Title, 
    - Postal Code/ City, 
    - No. of rooms | area of property in sq. mt
    - Label on image as type of property(rent/sell), 
    - Based on label , amount is displayed
4. On Click of a advertisement, a modal window opens up.
5. This modal displays title, complete address and slides of iamges.
6. X will close the modal.
