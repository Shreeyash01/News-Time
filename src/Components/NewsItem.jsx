import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" className="card-img-top" alt="newsImg" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}
