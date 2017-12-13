import React, { Component } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import Book from '../components/Book/Book'
import '../styles/App.css'

class SearchContainer extends Component {

	changeShelf = (book, shelf) => {
		this.props.updateBook(book, shelf)
	}

	handleChange = (query) => {
		if(query.trim().length === 0){
			this.props.updateBooks('books')
			this.props.searchBook(query.trim())
		}else {
			this.props.searchBook(query.trim())
		}
	}

	render() {
		const { booksResults } = this.props
		return (
			<div>
				<div className="search-books">
					<SearchBar searchBook={this.props.searchBook} updateBooks={this.props.updateBooks} change={this.handleChange}/>
					<div className="search-books-results">
						<ol className="books-grid">
							{booksResults.length > 0?
								booksResults.map((book, index) => {
									return <Book
												key={book.id}
												book={book}
												changeShelf={this.changeShelf}	
											/>
								})
								:
								null
							}
						</ol>
					</div>
				</div>
			</div>
		)
	}
}

export default SearchContainer