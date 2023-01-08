import React, { useState } from "react";
import "../css/SearchPannel.css";


function SearchPannel(props) {
	const [inputValue, setInputValue] = useState('');

	function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(inputValue);
    }

	return (
		<div className="SearchPannel">
			<form className="search-city-wrapper active" id="search-city-form" onSubmit = {handleSubmit}>
				<div className="input-search-icon">
					<i className="bx bx-search search-icon"></i>
				</div>
				<input
					type="text"
					name="search-city-value"
					id="search-city-input"
					placeholder="Search for places..."
					value = {inputValue}
					onChange = {handleChange}
				/>
			</form>
			<button id="current-location-button">
				<i className="bx bx-current-location sub-title current-location-icon"></i>
			</button>
		</div>
	);
}

export default SearchPannel;