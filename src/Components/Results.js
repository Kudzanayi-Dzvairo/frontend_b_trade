import React from 'react'
import { Card, Icon, Image, Dropdown} from 'semantic-ui-react'
import Button from './Button'

const Results = (props) => {
    const { book } = props;

    const options = [
        { key: 'Library', text: 'Library', value: 'library', onClick: (e) => props.handleClickAddTo('library', book.title, book.author, book.image, book.description, book.pageCount)},
        { key: 'Trades', text: 'Trades', value: 'trades', onClick: (e) => props.handleClickAddTo('trades', book.title, book.author, book.image, book.description, book.pageCount) },
        { key: 'Wishlist', text: 'Wishlist', value: 'wishlist', onClick: (e) => props.handleClickAddTo('wishlist', book.title, book.author, book.image, book.description, book.pageCount) },
    ];

    return (
        <div className="card">
             <Card.Group>
                <Card>
                    <Card.Content>
                       <Card.Header>{props.book.title}</Card.Header>
                        <Card.Meta>{props.book.author}</Card.Meta>
                        <Image src={props.book.image} />
                        {/* TODO Rename props.handleClick to props.handleClickMoreDetails */}
                        <Button size='mini' floated='right' onClick={(e) => props.handleClick(props.book)}>More Details</Button>
                        <Button.Group color='teal' floated='right'>
                            <Button>Add To</Button>
                            <Dropdown
                                as={Button}
                                className='icon'
                                floating
                                options={options}
                                trigger={<React.Fragment />}
                            />
                        </Button.Group>
                      </Card.Content>
                </Card>
             </Card.Group>
        </div>
    )
}

export default Results