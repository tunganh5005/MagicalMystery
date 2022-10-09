

import Modal from './Modal'
import StartPlanningBtn from './StartPlanningBtn'

export default (props) => {
    return (
        <Modal show={props.show} onClose={props.onClose} widthClass="modal-50w" onBack={props.onBack}>
            <div style={{textAlign:'center'}}>
            <div style={{textAlign: 'center'}}>
                <h1 style={{ paddingBottom:0, color: "#AC623D", fontSize:'1.3vw', fontWeight: '500', paddingBottom:'2vw'}}>Please confirm that you want to AVOID:</h1>
            </div>
            <div style={{display: 'flex', textAlign:'left'}}>
                <div style={{flex: 1}}>
                    <p style={{color: '#AC623D', fontWeight: '500', fontSize:'1.2rem'}}>Accommodation</p>
                    <ul>
                        {props.accommodation.map(item => {
                            return (
                                <li>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div style={{flex: 1}}>
                    <p style={{color: '#AC623D', fontWeight: '500', fontSize:'1.2rem'}}>Restaurants</p>
                    <ul>
                        {props.restaurant.map(item => {
                            return (
                                <li>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div style={{flex: 1}}>
                    <p style={{color: '#AC623D', fontWeight: '500', fontSize:'1.2rem'}}>Activities</p>
                    <ul>
                        {props.activity.map(item => {
                            return (
                                <li>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <StartPlanningBtn style={{fontWeight:'400', margin: '2vw auto', padding: '0.5vw 3vw'}} onClick={props.onNext}>CONFIRM</StartPlanningBtn>
            </div>
        </Modal>
    )
}