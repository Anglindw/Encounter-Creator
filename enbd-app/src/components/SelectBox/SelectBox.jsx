import React, {Component} from "react";

export default class SelectBox extends Component {
    constructor(props){
        super(props);
        this.state ={
            value: 'fighter'
        };

        this.handleChange =
        this.handleChange.bind(this);
        this.handleSubmit =
        this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('You have chosen:' + this.state.value);
        event.prevenDefault();

    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <label>Pick your class:</label><br></br>
            <select className="selector" value={this.state.value} onChange=
            {this.handleChange}>
                <option value='figher'>Fighter</option>
                <option value='bard'>Bard</option>
                <option value='paladin'>Paladin</option>
                <option value='wizard'>Wizard</option>
            </select>
            <input className="select_btn" type='submit' value='Submit' />

            </form>
        );
    }
}