import { combineReducers } from "redux";

/*
	Reducers managing two "status":
	 - a list of songs (static)
	 - a currently selected song
*/

const songsReducer = () => {
	return [
		{ title: "Beauty And The Beast", duration: "4:03" },
		{ title: "Circle of Life", duration: "4:05" },
		{ title: "Married Life", duration: "4:13" },
		{ title: "You've Got a Friend in Me", duration: "2:05" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
