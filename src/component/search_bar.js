import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super();
        this.state = {
            inputValue: '',
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({
            inputValue: event.target.value,
        })
        this.props.onVideoSearch(this.state.inputValue);
    }
    render() {
        return (
            <div className = "search-bar" >
                <input value = {this.state.inputValue}
                onChange={this.onInputChange}/>
            </div>                
        );
            

    }
}

export default SearchBar;