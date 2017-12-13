import React, { Component } from 'react'
import Book from '../Book/Book'
import './shelf.css'

class Shelf extends Component {
	
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