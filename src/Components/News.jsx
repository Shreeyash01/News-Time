import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updatePage = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.React_App_ApiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    updatePage();
    document.title = `${capitalizeFirst(props.category)} - News Time`;
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.React_App_ApiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

  }

  return (
    // <div className='container my-3'>
    <>
      <h2 className='text-center' style={{ margin: '90px 0px 40px' }}>{capitalizeFirst(props.category)} Headlines -</h2>

      {loading && <Loader />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loader />}
      >
        <div className='container my-3'>
          <div className='row my-3'>
            {articles.map((element, index) => {
              return <div className='col-md-4' key={index}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>

      </InfiniteScroll>


      {/* <div className="container d-flex justify-content-between">
                    <button type="button" className="btn btn-outline-info" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-outline-info" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}

      {/* </div> */}
    </>
  )

}

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News