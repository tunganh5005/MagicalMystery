import StartPlanningBtn from "./StartPlanningBtn"
import WhiteButton from "./WhiteButton"


export default (props) => {
    return (
        <div style={{backgroundColor: "white", margin:'0 0.8vw', padding: '1.8vw', borderRadius: '15px', boxShadow: '0 0 10px #DDD'}}>
            <div style={{height: '8vw'}}>
                <p style={{color:'#51525C', fontWeight: '600', fontSize: '1.1rem'}}>{props.title}</p>
                <p style={{color: '#70707B'}}>{props.content}</p>
            </div>
            <img src={props.img} style={{width: '100%'}}/>
            <StartPlanningBtn style={{width: '100%', marginTop: '1vw'}} to={props.to}>Start Planning</StartPlanningBtn>
            <WhiteButton style={{width: '100%', marginTop: '1vw'}} to={props.to}>Find Out More</WhiteButton>
        </div>
    )
}