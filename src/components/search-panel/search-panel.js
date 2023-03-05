import "./search-panel.css"
import React from "react";

class SearchPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: "",
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({
            term: term
        })
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input
                type={"text"}
                className={"form-control search-input"}
                placeholder={"Найти сотрудников"}
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }

}

export default SearchPanel