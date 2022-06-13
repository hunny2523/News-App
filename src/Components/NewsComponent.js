import React, { Component } from 'react';
import Spinner from './Spinner';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {


    static defaultProps = {
        country: "in",
        pageSize: 5,
        category: 'general'
    };
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string

    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            totalResults: 0,
            page: 1
        }
        // document.title= `News App - ${this.props.category}`

    }
// capitalize latter for heading like "NewsApp- Category"
    CapitalizeFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



// below functions used when infinite scroll bar was not there. previos was being disabled when no pages left before content and same for "next" button


    // handleNextClick = async () => {
    //     this.setState({
    //         page: this.state.page + 1
    //     })
    //     this.updateNews();
    // }

    // handlePrevClick = async () => {
    //     this.setState({
    //         page: this.state.page - 1
    //     })
    //     this.updateNews();
    // }





    // when content is mounted updatenews is being rendered and it fetch the data from news api and made changes are---"loading spinner, uper progress bar (red),total results is for total news"
    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);

    };

    async componentDidMount() {
        this.updateNews();
    };



    // fetch more data for infinite scroll ...it will increase page number by 1 and render news with defined page size 
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
    };

    render() {

        return (
            <div className='my-3' >
                <h1 className='text-center'>Let's get Updated - {this.CapitalizeFirst(this.props.category)} </h1>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row">

                            
                            {this.state.articles.map((element) => {
                                return (
                                    <div key={element.url} className="col-md-4 col-sm-6">
                                        <NewsItem title={element.title ? element.title.slice(0, 45) + "..." : ""} description={element.description ? element.description.slice(0, 85) + "..." : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={Math.ceil(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}> &rarr; Next</button> 
                </div> */}
                    {/* above buttons is used before infinite scroll option */}

                </InfiniteScroll>
            </div>
        );
    }
}
