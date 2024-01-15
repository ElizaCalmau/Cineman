# The Cineman
My module project on React JS

## Description
The Cineman - is application which allows you to find some movies description and general information about it.


### Link for stage
[Cineman](https://cineman-six.vercel.app/)

## Tech Stack
- HTML
- CSS
- JS
- REST API
- React
- Redux
- react-router-dom 
- Redux-Toolkit
- Redux-Thunk

## Architecture
**The Cineman** emulates a web application for movies search. I used the TMDB API as a base of my application. 

### Structure
The application consists of three pages: **Home**, **Movie Page** and **Favourite Movies**. I used a react-router-dom v5.3.4 to implement navigaion between pages. 
Each page has a header with tagline *'Cineman. Create your Cinema Universe'* and navigation items **Home** and **Favourite**;

### Home page
**Home** page contains a **Categories** buttons, **Search** and **Movies List**. 
By clicking each category button such as **Top Rated**, **Popular**, **Now Playing** and **Upcoming** invokes fetch request which result renders at Home page below the **Search**; When page is loading at the first time it is automatically fetching **Top Rated** movies by using useEffect React hook.

### Search section
The **Search** represents a 3 inputs, select and send a request button which contains a data from input/select as query parameters. 

There are several options to use a **Search**. You can search movie by **title**, by **years** range (the 'from' and 'to' are both required for this request) and by **genre** from select. You can activate search by clicking 'Search' button with a cursor or just push 'Enter' key.
You can also combine search parameters.

**Allowed search combinations**: 
- 'Title' (will find movies by title)
- 'Title' + 'From' (will find movies closest to required date) 
- 'From' + 'To' (will find movies according to this time range)
- 'Genre' (will find movies by genre)
- 'From' + 'To' + 'Genre' (will find movies according to years range and required genre)

### Movies Section
The **Movies List** represents the rendered response from API.
Dependent on the API response, it renders different movies categories.

Each movie has it's own poster image, name, release date, description and button '❤' which allows to add movie to **Favourite**. 
In case if the poster image is absent, there is a default image which replaces poster image. Also there's link *See details...* which navigates us to **Movie Page**.


### Movie Page
**Movie Page** contains a movie poster, more detailed description of movie (such as director's name, cast and genre) and trailer. 
Trailer was embedded by using iframe HTML element and link to Youtube with specific trailer key from the API.
It also allowed to add movie to ***Favourites** by clicking above-mentioned button '❤'.


### Favourite Movies Page
**Favourite** movies page represents a list of movies. Each movie has a poster, title and button *Remove* to remove a movie from favourites. 
Adding duplicated movies to favourites list is prevented as well.

