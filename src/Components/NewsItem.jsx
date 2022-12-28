import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={!imgUrl?"https://img.etimg.com/thumb/msid-96567765,width-1070,height-580,imgsize-54828,overlay-economictimes/photo.jpg":imgUrl} className="card-img-top" alt="newsImg" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer"  className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
