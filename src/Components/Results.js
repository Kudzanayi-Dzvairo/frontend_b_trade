import React from 'react'
import { Card, Icon, Image} from 'semantic-ui-react'
import Button from './Button'

const Results = (props) => {
    console.log(props)
    return(

                <div className="card">
                     <Card.Group>
                        <Card>
                            <Card.Content>
                               <Card.Header>{props.book.title}</Card.Header>
                                <Card.Meta>{props.book.author}</Card.Meta>
                                <Image src={props.book.image} />
                                <Button size='mini' floated='right' onClick={(e) => props.handleClick(props.book)}>More Details</Button>
                              </Card.Content>
                        </Card>
                     </Card.Group>
                </div>
    )
}

export default Results