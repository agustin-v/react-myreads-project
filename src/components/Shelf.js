import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class Shelf extends Component {

	componentDidlMount() {
		this.props.updateBooks('all')
	}

	changeShelf = (book, shelf) => {
		this.props.updateBook(book, shelf)
	}

	render() {
		const currentlyReading = this.props.books.filter(book => book.shelf === 'currentlyReading');
		const wantToRead = this.props.books.filter(book => book.shelf === 'wantToRead');
		const read = this.props.books.filter(book => book.shelf === 'read');

		return (
			<div>
				<div className="list-books">
		            <div className="list-books-title">
		              <h1>MyReads</h1>
		            </div>
		            <div className="list-books-content">
		              <div>
		                <div className="bookshelf">
		                  <h2 className="bookshelf-title">Currently Reading</h2>
		                  <div className="bookshelf-books">
		                    <ol className="books-grid">
		                    	{
		                    		currentlyReading.map((book, index) => {
		                    			return <li key={index}>
					                        <div className="book">
					                          <div className="book-top">
					                            <img src={book.imageLinks.thumbnail} className="book-cover" alt="cover"/>
					                            <div className="book-shelf-changer">
					                              <select value="currentlyReading" onChange={(event) => {this.changeShelf(book, event.target.value)}}>
					                                <option value="none" disabled>Move to...</option>
					                                <option value="currentlyReading">Currently Reading</option>
					                                <option value="wantToRead">Want to Read</option>
					                                <option value="read">Read</option>
					                                <option value="none">None</option>
					                              </select>
					                            </div>
					                          </div>
					                          <div className="book-title">{book.title}</div>
					                          <div className="book-authors">{book.authors}</div>
					                        </div>
					                    </li>
		                    		})
		                    	}
		                    </ol>
		                  </div>
		                </div>
		                <div className="bookshelf">
		                  <h2 className="bookshelf-title">Want to Read</h2>
		                  <div className="bookshelf-books">
		                    <ol className="books-grid">
		                		{
		                    		wantToRead.map((book, index) => {
		                    			return <li key={index}>
					                        <div className="book">
					                          <div className="book-top">
					                            <img src={book.imageLinks.thumbnail} className="book-cover" alt="cover"/>
					                            <div className="book-shelf-changer">
					                              <select value="wantToRead" onChange={(event) => {this.changeShelf(book, event.target.value)}}>
					                                <option value="none" disabled>Move to...</option>
					                                <option value="currentlyReading">Currently Reading</option>
					                                <option value="wantToRead">Want to Read</option>
					                                <option value="read">Read</option>
					                                <option value="none">None</option>
					                              </select>
					                            </div>
					                          </div>
					                          <div className="book-title">{book.title}</div>
					                          <div className="book-authors">{book.authors}</div>
					                        </div>
					                    </li>
		                    		})
		                    	}
		                    </ol>
		                  </div>
		                </div>
		                <div className="bookshelf">
		                  <h2 className="bookshelf-title">Read</h2>
		                  <div className="bookshelf-books">
		                    <ol className="books-grid">
		                		{
		                    		read.map((book, index) => {
		                    			return <li key={index}>
					                        <div className="book">
					                          <div className="book-top">
					                            <img src={book.imageLinks.thumbnail} className="book-cover" alt="cover"/>
					                            <div className="book-shelf-changer">
					                              <select value="read" onChange={(event) => {this.changeShelf(book, event.target.value)}}>
					                                <option value="none" disabled>Move to...</option>
					                                <option value="currentlyReading">Currently Reading</option>
					                                <option value="wantToRead">Want to Read</option>
					                                <option value="read">Read</option>
					                                <option value="none">None</option>
					                              </select>
					                            </div>
					                          </div>
					                          <div className="book-title">{book.title}</div>
					                          <div className="book-authors">{book.authors}</div>
					                        </div>
					                    </li>
		                    		})
		                    	}
		                    </ol>
		                  </div>
		                </div>
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

export default Shelf