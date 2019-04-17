import React, { Component } from 'react'
import BestSellers from '../Components/BestSellers'



class Home extends React.Component{

    state = {
        bestSellers:[],
    };


    componentDidMount() {
        var nytimesKey = 'a0r7u0UN292BIqMgtJdpAtvWKF1A4xGA'
        fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + nytimesKey, {
            method: 'get',
        })
            .then(response => response.json())
            .then(bSellers => {
                const bestSellers = bSellers.results.map(item => ({
                    link: item.amazon_product_url,
                    weeksOnList: item.weeks_on_list || 'New this week!',
                    title: item.book_details[0].title,
                    description: item.book_details[0].description,
                    author: item.book_details[0].author,
                    rankLast: item.rank_last_week || 'n/a'
                })
                )
                this.setState({bestSellers})
            })
    }


    render() {

        const books = this.state.bestSellers.map(item => <BestSellers books={item}/>)

        return (
            <div id="masthead">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/nyt-logo.png" height="80" id="nyt-logo"/>
                {books}
            </div>
        )
    }
}

export default Home