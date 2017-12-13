import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Book from '../Book/Book'
import './shelf.css'

class Shelf extends Component {
	
	static propTypes ={
		label: PropTypes.string,
		book: PropTypes.arrayOf(PropTypes.object),
		changeShelf: PropTypes.func,
		
	}

	render() {
		const { label, books } = this.props
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{label}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid-shelf">
						{
							books.map((book) => {
								return <Book 
									key={book.id}
									shelf={this.props.shelf}
									noneShelf={true} 
									book={book}
									changeShelf={this.props.changeShelf}/>
							})
						}
					</ol>
				</div>
		  </div>
		)
	}
}

export default Shelf