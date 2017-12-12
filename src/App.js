import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './components/Shelf'
import BookSearch from './components/BookSearch'
import './App.css'


class BooksApp extends React.Component {
    state = {
        books:[],
        all:[]
    }

    componentDidMount(){
        BooksAPI.getAll().then((books) => {
            this.setState({all: books})
        })
    }

    searchBook = (query) => {
        BooksAPI.search (query, 10).then((books) => {
            this.setState({books: books})
        });
    }

    updateBooks = (prop) => {
        if(prop === 'books'){
            this.setState({
            books: []
         })
        }

        if(prop === 'all'){
            BooksAPI.getAll().then((books) => {
                this.setState({all: books})
            })
        } 
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then((book) => {
            this.setState({all: this.state.all.concat(book)})
        })
        BooksAPI.getAll().then((books) => {
            this.setState({all: books})
        })
    }

  render() {

    return (
      <div className="app">
        <Route  exact path='/'      render={() =>(
            <Shelf books={this.state.all} updateBooks={this.updateBooks} updateBook={this.updateBook}/>
        )} />

        <Route  exact path='/search'     render={() =>(
            <BookSearch searchBook={this.searchBook} booksResults={this.state.books} updateBooks={this.updateBooks} updateBook={this.updateBook}/>
        )}/>
       
      </div>
    )
  }
}

export default BooksApp
