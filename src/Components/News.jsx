import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (

      <div className='container my-3'>
        <h2>Top Headlines -</h2>

        <div className='row my-3'>
          <div className='col-md-4'>
            <NewsItem title="myTitle" description="myDesc" imgUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
          </div>
          <div className='col-md-4'>
            <NewsItem />
          </div>
          <div className='col-md-4'>
            <NewsItem />
          </div>
        </div>

      </div>
    )
  }
}
