import React from "react";
import SongDetail from "./SongList"; // If we don't specify the file name, webpack will automatically give index.js
import SongList from "./SongDetail";

const App = () => {
	return (
		//<div className="ui segment">
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongDetail />
				</div>
				<div className="column eight wide">
					<SongList />
				</div>
			</div>
		</div>
		//</div>
	);
};

export default App;
