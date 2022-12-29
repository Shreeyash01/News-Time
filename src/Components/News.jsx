import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.React_App_ApiKey}&page=1&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.React_App_ApiKey}&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.React_App_ApiKey}&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  render() {
    return (

      <div className='container my-3'>
        <h2>Top Headlines -</h2>

        <div className='row my-3'>
          {this.state.articles?.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-outline-info" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-outline-info" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}
