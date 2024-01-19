import React from "react";
import './List.css';
import satellitesData from "../../satellites/satellites";

function List(props) {
    const filteredData = satellitesData.data.filter((el) => {
        if (props.input === '') {
            return true;
        } else {
            return el.name.toLowerCase().includes(props.input.toLowerCase());
        }
    });
    return (
        <div className="List">
            {filteredData.map((item) => (
                <div className="ListItem">
                    <div className="Content">
                        <div className="Name">{item.name}</div>
                        <div className="Lat"><span>Latitude:</span> {item.lat}</div>
                        <div className="Long"><span>Longitude:</span> {item.long}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default List;
