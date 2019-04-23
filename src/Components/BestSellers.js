import React from 'react'

const BestSellers = (props) => {

   const { title, description, author, weeksOnList, rankLast, link, rank } = props.books

    console.log(props.books)

    return (
        <div>
        <div id="best-seller-titles">
        <div className="entry" nyt-rank={rank}>
            <img src="https://www.iconsdb.com/icons/preview/orange/book-xxl.png" className="book-cover"/>
            <h2><a href={link} target="_blank"><em>{title}</em></a></h2>
            <h4><em>By {author} </em></h4>
            <p>{description}</p>
            <div className="stats">
                    <p>Last Week: {rankLast}</p>
                    <p>Weeks on list: {weeksOnList} </p>
                     </div>
            </div>
        </div>
        </div>

    )
}


export default BestSellers

// '<div id="' + book.rank + '" class="entry">' +
// '<p>' +
// '<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png" class="book-cover" id="cover-' + book.rank + '">' +
// '</p>' +
// '<h2><a href="' + book.amazon_product_url + '" target="_blank">' + bookInfo.title + '</a></h2>' +
// '<h4>By ' + bookInfo.author + '</h4>' +
// '<h4 class="publisher">' + bookInfo.publisher + '</h4>' +
// '<p>' + bookInfo.description + '</p>' +
// '<div class="stats">' +
// '<hr>' +
// '<p>Last Week: ' + lastWeekRank + '</p>' +
// '<p>Weeks on list: ' + weeksOnList + '</p>' +
// '</div>' +
// '</div>';

// $('#best-seller-titles').append(listing);
// $('#' + book.rank).attr('nyt-rank', book.rank);