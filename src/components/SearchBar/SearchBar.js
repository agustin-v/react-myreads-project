import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './searchBar.css'

class SearchBar extends Component {
	
	render() {
		return (
			<div className="search-books-bar">
				<Link onClick={() => this.props.updateBooks('books')} className="close-search" to='/'>Close</Link>
				<div className="search-books-input-wrapper"> 
					<input
						type="text" 
						placeholder="Search by title or author"
						onChange={(event) => {this.props.change(event.target.value)}}
					/>
				</div>
		  	</div>
		)
	}
}

export default SearchBar