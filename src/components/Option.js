import React from "react";

export default (props) => (
    <div className="widget__message">
        <p className="widget__message__option">{props.count}. {props.optionText}</p>
        <button className="button button--link" onClick={() => {
            props.removeSingleOption(props.optionText)
        }}>remove</button>
    </div>
)
