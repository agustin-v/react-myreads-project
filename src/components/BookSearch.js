import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class BookSearch extends Component {

	constructor() {
		super();
		this.state = {
			query: '',
			books:[],
			}
	}
	
	change = (query) => {
		if(query.trim().length > 0){
			this.props.searchBook(query.trim())
		}
		this.props.updateBooks()
	}

	changeShelf = (book, shelf) => {
		this.props.updateBook(book, shelf)
	}

	render(){

		const { booksResults } = this.props
		return(
			<div>
				<div className="search-books">
		            <div className="search-books-bar">
		              <Link onClick={() => this.props.updateBooks('books')} className="close-search" to='/'>Close</Link>
		              <div className="search-books-input-wrapper"> 
		                <input 
		                	type="text" 
		                	placeholder="Search by title or author"
		                	onChange={(event) => {this.change(event.target.value)}}
		                	/>
		              </div>
		            </div>
		            <div className="search-books-results">
		              <ol className="books-grid">
		              	{booksResults.length > 0?
		              		booksResults.map((book, index) => {
		              			return <li key={index}>
			                        <div className="book">
			                          <div className="book-top">
			                            <img src={book.imageLinks.thumbnail} className="book-cover" alt="cover"/>
			                            <div className="book-shelf-changer">
			                              <select value=""onChange={(event) => {this.changeShelf(book, event.target.value)}}>
			                                <option value="none" disabled>Move to...</option>
			                                <option value="currentlyReading">Currently Reading</option>
			                                <option value="wantToRead">Want to Read</option>
			                                <option value="read">Read</option>
			                              </select>
			                            </div>
			                          </div>
			                          <div className="book-title">{book.title}</div>
			                          <div className="book-authors">{book.authors}</div>
			                        </div>
			                    </li>
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
export default BookSearch
