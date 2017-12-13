import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './searchBar.css'

const SearchBar = ({ updateBooks, change }) => {
	return (
		<div className="search-books-bar">
			<Link onClick={() => updateBooks('books')} className="close-search" to='/'>Close</Link>
			<div className="search-books-input-wrapper"> 
				<input
					type="text" 
					placeholder="Search by title or author"
					onChange={(event) => {change(event.target.value)}}
				/>
			</div>
		</div>
	)
}

SearchBar.propTypes ={
	updateBooks: PropTypes.func,
	change: PropTypes.func,
	
}

export default SearchBar