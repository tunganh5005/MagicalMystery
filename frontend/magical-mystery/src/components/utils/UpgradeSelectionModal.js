


import Btn from './StartPlanningBtn'

import Modal from './Modal'

import letterIcn from '../../res/letterIcn.png'
import StartPlanningBtn from './StartPlanningBtn'
import WhiteButton from './WhiteButton'



export default (props) => {
    function selectAndClose(){
        props.onSelect(props.id)
        props.onClose()
    }
    return (
        <Modal show={props.show} onClose={props.onClose} widthClass="modal-30w" style={{padding: '1vw', margin: '0'}}>
            <div style={{textAlign:'left', padding:'0'}}>
                <img src={letterIcn} style={{width: '15%', paddingBottom: '1vw'}}/>
                <h1 style={{ paddingBottom:'1.5vw', color: "black", fontSize:'1.2vw', fontWeight: '500', padding: 0}}>Letter Writing</h1>
                <p style={{color: '#70707B', fontWeight: '400'}}>Would you like our team at Magical Mystery to write a letter for you, or would you like to write your own?</p>
                <StartPlanningBtn style={{width: '100%'}} onClick={props.onWriteLetter} >Write My Own (Free)</StartPlanningBtn>
                <WhiteButton style={{marginTop: '0.8vw', width: '100%'}} >Magical Mystery Writes the Letter ($10)</WhiteButton>
            </div>
        </Modal>
    )
}