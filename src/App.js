import React, { Component } from 'react';
import './App.css'
import Card from './components/card.js'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      movies: [{
        name: 'Mission Impossible',
        img: 'https://is3-ssl.mzstatic.com/image/thumb/Video118/v4/ed/39/36/ed393672-bc1d-270b-9d34-54590ab29fea/pr_source.lsr/268x0w.png',
        review: 5
      },
      {
        name: 'Mission Glass',
        img: 'https://www.dvdsreleasedates.com/posters/800/G/Glass-2019-movie-poster.jpg',
        review: 3
      },
      {
        name: 'X-Men',
        img: 'https://www.sunrisemedical.eu/getattachment/cd0dc57a-cc2b-4434-a603-8a98ee7ee4af/x-men-the-last-stand-films-about-disability.jpg',
        review: 2
      },
      {
        name: 'Pikachu',
        img: 'https://www.cinemaspathegaumont.com/media/movie/9103335/poster/lg/81/film_924228.jpg',
        review: 1
      },
      {
        name: 'Spongebob',
        img: 'https://images-na.ssl-images-amazon.com/images/I/61IlFE6yZOL.jpg',
        review: 3
      },
      {
        name: 'Black Panther',
        img: 'http://fr.web.img2.acsta.net/pictures/17/10/16/15/40/0883250.jpg',
        review: 4
      }],
      name: '',
      img: '',
      review: '',
      class: 'none',
      search: '',
      star:5
    })
  }

  addName = (e) => {
    this.setState  ({
      name: e.target.value
    })
  }
  addImage = (e) => {
    this.setState ({
      img: e.target.value
    })
  }
  addReview = (e) => {
    this.setState  ({
      review: e.target.value
    })
  }
  search= (e) => {
    this.setState  ({
      search: e.target.value
    })
  }

  remove = () => {
    this.setState  ({
      class: 'none'
    })
  }

  add = () => {
    this.setState ({
      movies: [...this.state.movies, { name: this.state.name, img: this.state.img, review: this.state.review }]
    })
  }

addplus =()=>{
  this.setState ({
    class: 'addmovie'
  })
}
star1=()=>{
  this.setState({
    star:1
  })
}
star2=()=>{
  this.setState({
    star:2
  })
}
star3=()=>{
  this.setState({
    star:3
  })
}
star4=()=>{
  this.setState({
    star:4
  })
}
star5=()=>{
  this.setState({
    star:5
  })
}

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="searchBar">
            <input onChange={this.search} type="text" className="search" />
            <span className="search-btn">Search</span>
          </div>
          <p className="stars">
            <i onClick={this.star1} class="far fa-star"></i>
            <i onClick={this.star2} class="far fa-star"></i>
            <i onClick={this.star3} class="far fa-star"></i>
            <i onClick={this.star4} class="far fa-star"></i>
            <i onClick={this.star5} class="far fa-star"></i>
          </p>
        </header>
        <main>
          <Card searchStar={this.state.star} tabMovies={this.state.movies} searchValue={this.state.search} />
          <div onClick={this.addplus} className="card kk" style={{margin: "20px 0 0 73px"}}><span className='plus'>+</span></div>
          <div className={this.state.class}>
            <input type="text" placeholder="Name" onChange={this.addName} />
            <input type="text" placeholder="URL of image" onChange={this.addImage} />
            <input type="text" placeholder="Review" onChange={this.addReview} />
            <span className="annuler" onClick={this.remove}>X</span>
            <span className="add-m" onClick={this.add}>ADD MOVIE</span>
          </div>
        </main>
      </div>
    );
  }
}

export default App;