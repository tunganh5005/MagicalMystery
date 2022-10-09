
import Video from '../../../res/createExperienceVideo.png'

import Icon from '../../../res/createExperienceIcn.png'

import StartPlanningBtn from '../../utils/StartPlanningBtn'
import WhiteButton from '../../utils/WhiteButton'

const Couple = () => {
    return (
        <div className="row align-items-start" style={{display: 'flex', flexDirection: 'row', width: "100%", marginLeft: 0, paddingLeft:"10%", paddingRight: "10%", marginBottom:"7%", alignItems:'center', justifyContent: 'center'}}>
            <div style={{flex:1, marginRight: '5%'}}>
                <div style={{padding: '8%', backgroundColor: '#F8E6D6', borderRadius: '30px'}}>
                    <img src={Video} style={{width:"100%"}}/>
                </div>
            </div>
            <div style={{flex:1}}>
                <div style={{}}>
                    <img src={Icon} style={{display:"block", float:"left", width:"7%", clear: "left"}}/>
                    <br/>
                    <h3 style={{display:"block", fontSize:"2rem", clear:"left", float:"left", marginTop:"3%", color:"black"}}>Create Your Experience</h3>
                    <br/>
                    <p style={{float:"left", clear:"left", textAlign:"left", width:"100%", fontSize:"1.1rem", marginTop:"2%", color:'#914822'}}>Volutpat semper bibendum vulputate turpis. Condimentum egestas velit non eu quisque ac. Consequat felis mi pharetra, potenti ullamcorper. Nec ultrices augue quis netus non integer.</p>
                    <br/>
                    <StartPlanningBtn style={{float:"left", clear:"left", marginTop:"3%", marginRight: '2%'}} to='/createexperience'>Start Planning</StartPlanningBtn>
                    <WhiteButton style={{float:"left", marginTop:"3%",}} to='/experiences/create'>See More</WhiteButton>
                </div>
            </div>
        </div>
    )
}

export default Couple;