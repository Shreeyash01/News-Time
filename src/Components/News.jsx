import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount() {
    // let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1cafd73f5d41498a9f60881d064fa7cd";
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.React_App_ApiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })
  }

  render() {
    return (

      <div className='container my-3'>
        <h2>Top Headlines -</h2>

        <div className='row my-3'>
          {this.state.articles?.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>

      </div>
    )
  }
}
