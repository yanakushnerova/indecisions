import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal 
        className="modal"
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        onRequestClose={props.closeResult}
    >
        <h3 className='modal__title'>selected option is...</h3>
        {props.selectedOption && <p className='modal__result'>{props.selectedOption}</p>}
        <button className='big-button' onClick={props.closeResult}>ok</button>
    </Modal>
)

export default OptionModal
