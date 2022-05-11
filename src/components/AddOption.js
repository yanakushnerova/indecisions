import React from 'react';

export class AddOption extends React.Component {
    state = {
        error: undefined
    }

    addOption = (e) => {
        e.preventDefault()
        
        const option = e.target.elements.option.value.trim()
        const error = this.props.addOption(option)
        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.option.value = ''
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className='widget__message__error'>{this.state.error}</p>}
                <form className='widget__form' onSubmit={this.addOption}>
                    <input className='widget__form__input' name="option" type="text" autoComplete="off" placeholder='enter your option' required />
                    <button className='button'>add option</button>
                </form>
            </div>
        )
    }
}
