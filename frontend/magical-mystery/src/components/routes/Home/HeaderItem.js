


import classes from './HeaderItem.module.css'

import StartPlanningBtn from '../../utils/StartPlanningBtn'

const HeaderItem = (props) => {
    return (
        <div className={classes.card}>
            <img src={props.icon}></img>
            <h3 style={{fontSize:"1.2vw", fontWeight: '500', marginTop:"1vw"}}>{props.name}</h3>
            <p style={{fontSize:"0.8vw", fontWeight: '200'}}>{props.content}</p>
            <StartPlanningBtn style={{marginLeft:"auto", marginRight:"auto", marginTop:"3%"}} to={props.to}>Plan Now</StartPlanningBtn>
        </div>
    );
}

export default HeaderItem;