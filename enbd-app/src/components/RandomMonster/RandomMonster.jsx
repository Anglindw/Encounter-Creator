import React, {Component} from "react";

export default class RandomMonster extends Component{
    constructor(){
        super();
        this.state = {
            random: 0
        };
        
    }
    handleClick = (event) => {
        const min = 0;
        const max = 313;
        const rand = min + Math.random() * (max - min);
        this.setState(() => {return {random: rand}});

    };

    render() {
        console.log(this.props.monsters)

        const {random} = this.state
        const {monsters} = this.props
        const {handleClick} = this  
    }

}