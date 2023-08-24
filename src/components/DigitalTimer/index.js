// Write your code here
import {Component} from 'react'

import './index.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Bundle & save</h1>
        <div className="container1">
          <input type="radio" />

          <h1 className="head1">
            1 Pair <br />
            DKK 195.00
          </h1>
          <h1 className="head2">50% OFF</h1>
        </div>
        <br />
        <div className="container1">
          <input type="radio" />

          <h1 className="head1">
            2 Pairs <br />
            DKK 345.00
          </h1>

          <h1 className="head1">
            <strike>DKK 195.00</strike>
          </h1>
          <h1 className="head2">
            Most Popular <br />
            50% OFF
          </h1>
        </div>
        <div className="container3">
          <h1 className="head4 pr-5">Size</h1>

          <h1 className="head5 pl-5">Colour</h1>
          <div className="column">
            <div className="row">
              <select>
                <option>S</option>
              </select>
              <select>
                <option>Colour</option>
              </select>

              <br />
              <select>
                <option>S</option>
              </select>
              <select>
                <option>Colour</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <div className="container1">
          <input type="radio" />

          <h1 className="head1">
            3 Pairs
            <br />
            DKK 528.00
          </h1>
          <h1 className="head2">60% OFF</h1>
        </div>
        <br />
        <div className="cont">
          <h1 className="heal">Free 2 Day Shipping</h1>
          <p className="des">
            Total : <span className="des1">DKK 360.00</span>
          </p>
        </div>

        <button className="button1" type="button">
          + Add to Cart
        </button>
      </div>
    )
  }
}
export default App
