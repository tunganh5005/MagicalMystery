import StartPlanningBtn from "./StartPlanningBtn"

import DetailModal from "./DetailModal"
import { NavItem } from "react-bootstrap"


export default (props) => {

    return (
        <div className="card h-100" style={{borderRadius: '6px', borderColor: '#AC623D', overflow: 'hidden'}}>
        <img src={props.img} className="card-img-top" style={{width:'100%', height:'55%', borderBottom:'solid 1px #AC623D'}}/>
        <div class="card-body" style={{textAlign: 'center'}}>
            <h5>{props.title}</h5>
            <p style={{fontSize: '1rem', padding:'0 1.3vw'}}>{props.content}</p>
            { !props.noInfo && <p onClick={props.onMoreInfo.bind(this, props.item)} style={{fontSize: '1rem', padding:'0 1.8vw', textDecoration: 'underline', cursor: 'pointer'}}>More Info</p>}
        </div>
        {!props.isSelected && <StartPlanningBtn onClick={props.onSelect.bind(this, props.item)} className="btn btn-dark" style={{width: '100%', borderRadius: 0, padding: '0.8vw', backgroundColor: 'black', color:'white', fontWeight:'400'}}>Select Options</StartPlanningBtn>}
        {props.isSelected && <StartPlanningBtn onClick={props.onUnSelect} className="btn btn-dark" style={{width: '100%', borderRadius: 0, padding: '0.8vw'}}>{props.selectedMessage}</StartPlanningBtn>}
        </div>
    )
}