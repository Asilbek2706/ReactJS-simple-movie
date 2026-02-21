import './SearchPanel.css';
import {Fragment, useState} from "react";

const SearchPanel = (props) => {
    const [term, setTerm] = useState("");

    const updateTermHandler = e => {
        const term = e.target.value.toLowerCase();
        setTerm(term);
        props.updateTermHandler(term);
    }

    return (
        <Fragment>
            <input
                type="text"
                className="form-control search-input"
                placeholder="Kinolarni qidirish..."
                onChange={updateTermHandler}
                value={term}
            />
        </Fragment>
    );
}

export default SearchPanel;
