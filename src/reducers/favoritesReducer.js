import { TOGGLE_FAVORITES, REMOVE_FAVORITE, ADD_FAVORITE } from "../actions/favoritesActions";

const initialFavorites = [
    {
        id: 0,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        metascore: 100,
        genre: "Drama",
        description: "War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy."
    },
    { 
        id: 1,
        title: "Star Wars",
        director: "George Lucas",
        metascore: 92,
        genre: "Scifi",
        description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
    }
]

const initialState = {
    favorites: initialFavorites,
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer;