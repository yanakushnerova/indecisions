import React from 'react';

import { AddOption } from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length !== prevState.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    removeOptions = () => {
        this.setState(() => ({options: []}))
    }

    removeSingleOption = (optionToRemove) => {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option)}))
    }

    pickOption = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({ selectedOption: option }))
    }

    addOption = (option) => {
        if (!option) {
            return 'add valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'such option already exists!'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    closeResult = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    
    render() {
        const subtitle = 'Let your computer decide instead of you'

        return (
            <div>
                <Header subtitle={subtitle} />

                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        pickOption={this.pickOption} 
                    />

                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            removeOptions={this.removeOptions}
                            removeSingleOption={this.removeSingleOption}
                        />
                        
                         <AddOption 
                            addOption={this.addOption}
                        />
                    </div>
                </div>
                
                <OptionModal selectedOption={this.state.selectedOption} closeResult={this.closeResult}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp
