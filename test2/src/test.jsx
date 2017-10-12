import React from 'react';
import {ButtonToolbar,Button} from 'react-bootstrap';


const Hello = React.createClass({
    defaultClick() {
        alert("this is default click")
    },
    render() {
        const buttonsInstance = (
            <ButtonToolbar>
                <Button bsSize="large" onClick={this.defaultClick}>Default</Button>
                <Button bsStyle="primary">Primary</Button>
            </ButtonToolbar>
        );
        return (
            <div>
                {buttonsInstance}
            </div>
        );
    }
});

module.exports = Hello;