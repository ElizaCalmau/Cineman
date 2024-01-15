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
###The Cineman### emulates a web application for movies search. I used the TMDB API as a base of my application. 

The application consists of three pages: **Home**, **Movie Page** and **Favourite Movies**. I used a react-router-dom v5.3.4 to implement navigaion between pages. 
Each page has a header with tagline *'Cineman. Create your Cinema Universe'* and navigation items **Home** and **Favourite**;

**Home** page contains a **Categories** buttons, **Search** and ***Movies List**. By clicking each category button such as **Top Rated**, **Popular**, **Now Playing** and **Upcoming** invokes fetch request which result renders at Home page below the 'Search'; When page loads at first time it authomatically fetching a 'Top Rated' movies by using a useEffect React hook.
The *Search* represents a 3 inputs, select and a button to send a request, which contains a data from input/select as query parameters. 
There a few options to use a *Search*. You can search movie by **title**, by **years** range (the 'from' and 'to' are both required for this request) and by **genre** from select. You can activate search by clicking 'Search' with a cursor or just push 'Enter' key.
You can also combine search parameters.

Allowed search combinations: 
- 'Title' (will find movies by title)
- 'Title' + 'From' (will find movies closest to required date) 
- 'From' + 'To' (will find movies according to this time range)
- 'Genre' (will find movies by genre)
- 'From' + 'To' + 'Genre' (will find movies according to years range and required genre)

The *Movies List* represents the rendered response from API. Each movie has it own poster image, name, release date, description and button '❤' which allows add movie to *Favourite*. If poster image is absent there appears a default image which i took from 'Unsplash' resource. Also there's link *See details...* which is navigate us for **Movie Page**.

**Movie Page** contains a movie poster, more detail description of movie (such as director's name, cast and genre) and trailer. 
Trailer was embedded by using iframe HTML element and link to Youtube with specific trailer key from the API.
It also allowed to add movie to *Favourites* by clicking above-mentioned button.

**Favourite** movies page represents a list of movies. Each movie has a poster, title and button *Remove* to remove movie from favourites. 
I also prevented adding the same movies to list of favourite movies.

