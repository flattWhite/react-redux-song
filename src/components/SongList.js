import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button
							className="ui button primary"
							onClick={() => {
								this.props.selectSong(song);
							}}
						>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}

	render() {
		// this.props === { songs: state.songs}
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

//  Called with all state inside the Redux store
// Rerun when state is changed
// Take all state from Redux store and copies the data to props so that component can use the props
const mapStateToProps = state => {
	return {
		songs: state.songs
	};
};

// Always import and call connect with 'mapStateToProps'
// 'mapStateToProps' will always get state as first arguments
// call function inside connect with argument of component (SongList)
export default connect(
	mapStateToProps,
	{ selectSong } // same as selectSong: selectSong
)(SongList);

//selectSong:selectSong => selectSong in es2015
