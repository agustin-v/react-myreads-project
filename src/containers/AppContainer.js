import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from '../api/BooksAPI'
import LibraryContainer from './LibraryContainer'
import SearchContainer from './SearchContainer'
import NotFound from './NotFoundContainer'
import '../styles/App.css'


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
        if(query.length > 0) {
            BooksAPI.search (query, 10).then((books) => {
                this.setState({books: books})
            });
        }  
    }

    updateBooks = (prop) => {
        if(prop === 'books'){
            this.setState({
            books: []
         })
        }
        else if(prop === 'all'){
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
    console.log('state', this.state.books)
    return (
      <div className="app">
      <Switch>
            <Route  exact path='/'      render={() =>(
                <LibraryContainer books={this.state.all} updateBooks={this.updateBooks} updateBook={this.updateBook}/>
            )} />

            <Route  exact path='/search'     render={() =>(
                <SearchContainer searchBook={this.searchBook} booksResults={this.state.books} updateBooks={this.updateBooks} updateBook={this.updateBook}/>
            )}/>
        
            <Route  exact path='/*'    render={() => (
                <NotFound/>
            )} />
       </Switch>
      </div>
    )
  }
}

export default BooksApp
