//Action creator: to change status, must create an action creator and use dispatch to call reducer

// named export
export const selectSong = song => {
	//Return an action
	return {
		type: "SONG_SELECTED",
		payload: song
	};
};
