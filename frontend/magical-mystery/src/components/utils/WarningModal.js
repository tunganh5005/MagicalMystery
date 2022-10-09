


import Btn from './StartPlanningBtn'

import Modal from './Modal'

import letterIcn from '../../res/letterIcn.png'
import StartPlanningBtn from './StartPlanningBtn'
import WhiteButton from './WhiteButton'



export default (props) => {
    
    return (
        <Modal show={props.show} onClose={props.onClose} widthClass="modal-30w" style={{padding: '1vw', margin: '0'}}>
            <p>You must select a package to continue!</p>
        </Modal>
    )
}