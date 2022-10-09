import BG from '../../../res/HeaderHomeBG.png'
import React from 'react'

import HeaderItem from './HeaderItem'

import prePlannedIcn from '../../../res/prePlannedHeaderIcn.png'

import puzzledIcn from '../../../res/puzzledHeaderIcn.png'

import tailerMadeIcn from '../../../res/tailerMadeHeaderIcn.png'

import createExperienceIcn from '../../../res/createExperienceHeaderIcn.png'

import StartPlanningBtn from '../../utils/StartPlanningBtn'

const Header = () => {
    return (
        <React.Fragment>
            <div style={{backgroundImage:"url("+BG+")", width:"100%", backgroundSize: "cover", backgroundPosition: 'center'}}>
                <div style={{paddingTop:"8vw", paddingBottom:"6vw"}}>
                    <h2 style={{fontSize:"3vw", color:"white", fontWeight: '700'}}>Magical Mystery</h2>
                    <div className="container text-center">
                        <div className="row" style={{paddingTop:"1%"}}>
                            <div className="col">
                                <HeaderItem icon={prePlannedIcn} name='Pre-Planned Experience' to='/preplanned' content='Cursus a, blandit at metus, proin vel metus eget lacus. Porttitor commodo sed risus vulputate aliquam tempus.'/>
                            </div>
                            <div className="col">
                                <HeaderItem icon={createExperienceIcn} name='Create Your Experience' to='/createexperience' content='Cursus a, blandit at metus, proin vel metus eget lacus. Porttitor commodo sed risus vulputate aliquam tempus.'/>
                            </div>
                            <div className="col">
                                <HeaderItem icon={puzzledIcn} name='Puzzled Experience' content='Cursus a, blandit at metus, proin vel metus eget lacus. Porttitor commodo sed risus vulputate aliquam tempus.'/>
                            </div>
                            <div className="col">
                                <HeaderItem icon={tailerMadeIcn} name='Tailor-Made Experience' to='/tailormade' content='Cursus a, blandit at metus, proin vel metus eget lacus. Porttitor commodo sed risus vulputate aliquam tempus.'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: '#AC623D', padding: '6vw 0'}}>
                <h2 style={{margin: "1%", color:"white", fontWeight: '700'}}>Time To Plan Your Next Magical Experience</h2>
                <p style={{width:"45%", color:"white", marginLeft:"auto", marginRight:"auto", fontWeight: '400', fontSize: '0.9rem', lineHeight: '1.7vw'}}>Whether you are planning a special occasion with your partner or seeking an experience with your friends, our Magical Mystery experiences will be the ones you’ll never forget.</p>
                <StartPlanningBtn style={{marginLeft:"auto", marginRight:"auto", backgroundColor: 'black'}}>Start Planning</StartPlanningBtn>
            </div>
        </React.Fragment>
    )
}

export default Header;