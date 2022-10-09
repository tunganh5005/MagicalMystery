import { useEffect } from 'react'

import Video from '../../../res/preplannedRouteVideo.png'
import StartPlanningBtn from '../../utils/StartPlanningBtn'
import HowItWorks from './HowItWorks'


export default () =>  {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return (
        <>
        <div style={{textAlign: 'center', marginTop: '5vw', marginBottom: "5vw"}}>
            <div style={{marginBottom: '2vw'}}>
                <span style={{backgroundColor: '#F8E6D6', padding: '10px', borderRadius: '30px'}}>
                    <span style={{color: '#6E3211', fontWeight: 500, backgroundColor: '#FFFFFF', paddingTop: '4px', paddingBottom: '4px', paddingLeft: '15px', paddingRight: '15px', borderRadius: '30px'}}>Ready To Go?</span>
                    <span style={{color: '#6E3211', fontWeight: 500, paddingTop: '4px', paddingBottom: '4px', paddingLeft: '15px', paddingRight: '15px'}}>Book Now</span>
                </span>
            </div>
            <p style={{fontWeight: 600, color: "#AC623D", fontSize: '3rem'}}>Pre-Planned Experiences</p>
            <p style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}}>Magical Mystery has been developed in the heart of Victoria to supply the most sophisticated experiences for romantic couples, friends, family, and adventure seeking puzzle lovers.</p>
            <div><img src={Video} /></div>
            <StartPlanningBtn style={{fontSize: '1rem'}}>Start Planning</StartPlanningBtn>
        </div>
        <HowItWorks/>
        </>
    )
}