import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props
    return (
      <div>
        <div className="card my-3">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info" style={{ left: '90%', zIndex: '1' }}>
            {source}
          </span>
          <img src={!imgUrl ? "https://img.etimg.com/thumb/msid-96567765,width-1070,height-580,imgsize-54828,overlay-economictimes/photo.jpg" : imgUrl} className="card-img-top" alt="newsImg" />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} On {new Date(date).toDateString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-outline-info">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}