import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <div>
            <h1 className="heading">Clothes That Get YOU Noticed</h1>
            <p className="para">
              Fashion is part of the daily air and it does not quite help .that
              it changes all the time.clothes have always been a marker. of the
              era and we are in a evolution.Your fashion makes you been seen and
              heard that way you are.so, celebrate the fashion new and enjoy the
              seasons set.
            </p>
            <button type="button" className="shopnwbtn">
              Shop Now
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
