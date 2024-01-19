import React, { useState } from "react";
import './Searchbar.css';
import List from './List';
import satelliteData from '../../satellites/satellites'

const Searchbar = () => {
    const [onSearch, setOnSearch] = useState('')
    const [displayList, setDisplayList] = useState(false);
    const [error, setError] = useState('');

    const onSearchHandler = (event) => {
        setOnSearch(event.target.value)

        if (error && event.target.value.trim() !== '') {
            setError('');
        }
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const isValueValid = satelliteData.data.some(item => item.name.trim().toLowerCase() === onSearch.trim().toLowerCase());

        if (isValueValid) {
            setDisplayList(true);
            setError('');
        } else {
            setError('Satellite not found');
            setDisplayList(false);
        }
    }

    return (
        <div className="Search">
            <h2>Search satellites</h2>
            <div className="Searchbar">
                <input
                    className="SearchbarInput"
                    type="text"
                    placeholder="ex. TS222, SM900"
                    onChange={onSearchHandler}
                />
                <button
                    className="Button ButtonSearch"
                    onClick={onSubmitHandler}
                >
                </button>
            </div>
            {displayList
                ? <List input={onSearch} />
                : <div className="error-message">{error}</div>
            }
        </div>
    );
}

export default Searchbar;
