import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleAnimated = (props) => {

   return (
       <div>
        <Button animated onClick={() => console.log("clicked")}>
            <Button.Content visible>More Details</Button.Content>
            <Button.Content hidden>
                <Icon name='arrow right' />
            </Button.Content>
        </Button>
    </div>
  )
}

export default Button

