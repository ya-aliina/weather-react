import "../css/SearchPannel.css";

function SearchPannel() {
	return (
		<div className="SearchPannel">
			<form className="search-city-wrapper active" id="search-city-form">
				<div className="input-search-icon">
					<i className="bx bx-search search-icon"></i>
				</div>
				<input
					type="text"
					name="search-city-value"
					id="search-city-input"
					placeholder="Search for places..."
				/>
			</form>
			<button id="current-location-button">
				<i className="bx bx-current-location sub-title current-location-icon"></i>
			</button>
		</div>
	);
}

export default SearchPannel;
