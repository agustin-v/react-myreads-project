import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from '../components/Shelf/Shelf'
import '../styles/App.css'

class LibraryContainer extends Component {
	
	componentDidlMount() {
		this.props.updateBooks('all')
	}

	changeShelf = (book, shelf) => {
		this.props.updateBook(book, shelf)
	}


	render() {
		const booksClassified = [
			{	
				key:'currentlyReading',
				label: 'Currently Reading',
				books: this.props.books.filter(book => book.shelf === 'currentlyReading')
			},
			{
				key:'wantToRead',
				label: 'Want to Read',
				books: this.props.books.filter(book => book.shelf === 'wantToRead')
			},
			{
				key:'read',
				label: 'Read',
				books: this.props.books.filter(book => book.shelf === 'read')
			}
		];
		return (
			<div>
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							{
								booksClassified.map((shelf) => {
									return <Shelf
										key={shelf.key}
										shelf={shelf.key}
										label={shelf.label} 
										books={shelf.books}
										changeShelf={this.changeShelf}/>
								})
							}
						</div>
					</div>
					<div className="open-search">
						<Link to='/search'>Add a book</Link>
					</div>
				</div>

			</div>
		)
	}
}

export default LibraryContainer