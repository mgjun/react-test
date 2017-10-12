import React from 'react';
import {Button,FormControl,FormGroup,HelpBlock,ControlLabel} from 'react-bootstrap';


const LoginPage = React.createClass({
    login() {
        alert("login");
    },
    getInitialState() {
        return {
            value:''
        }
    },
    getValidationState() {
        const lenth = this.state.value.length;
        if(length > 10) return 'success';
        else if(length > 5) return 'warning';
        else if(length > 0) return 'error';
    },
    handleChange(e) {
        this.setState({value:e.target.value})
    },
    render() {
        return (
            <form>
                <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                    <ControlLabel>this is ControlLabel text</ControlLabel>
                    <FormControl 
                        type="text" 
                        value={this.state.value} 
                        placeholder='enter Text'
                        onChange={this.handleChange}>

                    </FormControl>
                    <Button bsType="primary" onClick={this.login()}>Login</Button>
                    <FormControl.Feedback />
                    <HelpBlock>this is HelpBlock text</HelpBlock>    
                </FormGroup>
            </form>
        )
    }
});

export default LoginPage;