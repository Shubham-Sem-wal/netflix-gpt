# netflix-gpt project

- using create-react-app
- configured tailwindCSS
- Header
- routing setup using react router dom
- login form
- sign-up form


-  form validations
        - using regex

- useRef hook
- firebase setup
- deploying the project

- create sign up user account
- implement sign in user api
- created our redux store with userSlice
- implemented sign out

- used various firebase api's for authentication (createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile )


# building browse page 
    - browse page contain two component <mainContainer/> <secondaryContainer/>
    - (1)
    - using TMDB api
    - got token key by registring to TMDB
    - make an api call for now playing movies
    - get data from TMDB now playing movie list API

    - (2)
    - created custom hook for now_playing_movies
    - created movieslice
    - update store for movies data

    -(3)
    - mainContainer contains two components <videoTitle/> <videoBackground/>
    - fetched trailer video for particular movie using movie Id
    - created custom hook for the above and update the store
    - embeded the youtube youtube and make it autoplay and mute


