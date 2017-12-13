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
                this.setState({books: books.map( (bookItem) => {
                    let combinedItem = this.state.all.find(( allItem )=>{
                        if(bookItem.id === allItem.id){
                            return {...bookItem, shelf: allItem.shelf}
                        }
                    })
                    if (combinedItem === undefined){
                        return bookItem
                    }else{
                        return combinedItem
                    }
                })})
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
        BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf
            this.setState(state => ({
              all: this.state.all.filter(b=> b.id !== book.id).concat([book])
            }))
        })
    }

  render() {
    console.log('state', this.state)
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
