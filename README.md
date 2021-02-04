# Project Explanation

So, for this project I used two API's (spotify and weather api).

Although it's not finished and there's a lot to work on, the goal is to suggest playlists in spotify
according to the city's forecast.

I used a library for the spotify's api called spotify-web-api-js which already has a lot of built-in functions to get the necessary values from the spotify api.

For styling I used Styled Components.

First, run 'npm install' to get all the dependencies installed properly.

Before starting the project, make sure you go to the services/spotify.js and assign your client id
in the client_id variable line 5 for authorization purposes.
Then, in order to add a playlist to your spotify account, you must change the first argument of the function 'addPlayList' in components/Dashboard/index.js line 145, it must be your account's user_id.
Also, you need to enter your API_KEY in the weather api file, go to services/weather.js, on line 4 you will find the variable to assign your own api key value.
Once you do that, you can type 'yarn start' in the console to start the project.
You will click on the login button to log in your account in the spotify's api.
Then you will have to type the city you are currently in to get the forecast in celsius.
With the result you will receive a suggestion on the bottom left.

With your spotify information once logged in, you will be able to see your playlists, create new ones, see the songs in the selected playlists, add and remove songs within the playlist and play the songs (although it didn't work in my computer because I wasn't in a proper device)

P.S: This project has no responsive styling yet. So if you decrease the screen size you are most likely to encounter some layout bugs.
