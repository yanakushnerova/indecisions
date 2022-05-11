import React from "react";
import Option from './Option'

export default (props) => (
    <div>
        <div className="widget-header">
            <p className="widget-header__title">your options</p>
            <button className="button button--link" onClick={props.removeOptions}>remove all options</button>
        </div>
        
        {props.options.length === 0 && <p className="widget__message">provide your options to start!</p>}
        {props.options.map((option, index) => <Option 
            key={option}
            count={index + 1}
            optionText={option} 
            removeSingleOption={props.removeSingleOption} 
        />)}
    </div>
)
