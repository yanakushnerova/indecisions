import React from "react";

export default (props) => (
    <div>
        <button className="big-button" onClick={props.pickOption} disabled={!props.hasOptions}>what should i do?</button>
    </div>
)
