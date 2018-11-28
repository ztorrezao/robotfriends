import React from 'react';


const SearchBox = ({searchChange}) => {
	return (
			<input 
				className="b--green bg-lightest-blue ba pa3" 
				type="search" 
				placeholder="Robot Search"
				onChange={searchChange}/>
		)
}

export default SearchBox;