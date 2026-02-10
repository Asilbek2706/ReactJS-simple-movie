import './SearchPanel.css';
import {Component} from "react";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }
    }

    updateTermHandler = e=> {
        const term = e.target.value.toLowerCase();
        this.setState({ term })
        this.props.updateTermHandler(term);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Kinolarni qidirish..."
                    onChange={this.updateTermHandler}
                    value={this.state.term}
                />
            </div>
        );
    }
}

export default SearchPanel;
