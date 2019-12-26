import React, {Component} from 'react';
/*
class MyName extends Component{
    static defaultProps = {
        name: "Tests"
    }
    render(){
        return (
            <div>
                Hello! my name is {this.props.name}!
            </div>
        );
    }
}*/
const MyName = ({name}) =>{
    
    return (
        <div>
            Hello my name is {name}!
        </div>
    )
}
MyName.defaultProps = {
    name: "MyName"
}
export default MyName;