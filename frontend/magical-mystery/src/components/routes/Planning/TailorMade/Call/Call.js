
import React from 'react'

import { Route } from 'react-router-dom'
import ExperienceCard from '../../../../utils/ExperienceCard'
import Label from '../../../../utils/Label'

import {useEffect} from 'react'

import UnknownVideo from '../../../../../res/PrePlannedUnknownVideo.png'

import KnownVideo from '../../../../../res/PrePlannedKnownVideo.png'
import StartPlanningBtn from '../../../../utils/StartPlanningBtn'


import im7 from '../../../../../res/im7.png'

import im8 from '../../../../../res/im8.png'

import im12 from '../../../../../res/im12.png'
import WhiteButton from '../../../../utils/WhiteButton'

export default () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <Label smallText='Magical Mystery Planning' largeText='Tailor-Made Experience' style={{paddingBottom: '1vw'}}/>
            <p style={{width: '45%', margin: "0 auto", fontWeight: '600', color: '#70707B'}}>This type of planning will require a $100 deposit after speaking with our team so that we can create a Tailor-Made Experience perfect for you.</p>
            <p style={{marginTop: '4vw', fontWeight: '600', fontSize: '2.2rem', color: '#AC623D'}}>Call or Email Us to Plan Your Experience</p>
            <div style={{display: 'flex', textAlign: 'left', marginTop: '5vw'}}>
                <div style={{flex:3, margin: '0 9vw'}}>
                    <p style={{fontWeight: '600', color: '#AC623D'}}>Ready to plan your next adventure?</p>
                    <p>Welcome to call or email us to plan, where you can phone or email us to plan your next experience.</p>
                    <p>Please contact our friendly staff by either clicking the call button, dialling the number below or emailing us directly.</p>
                </div>
                <div style={{flex:5, marginRight: '5vw'}}>
                    <div style={{backgroundColor: 'white', width: '100%', borderRadius: '10px', padding: '2vw '}}>
                        <p style={{fontWeight: '500', fontSize: '1.2rem'}}>Not ready to call yet? No problem!</p>
                        <p style={{color: '#70707B', paddingBottom: '0.5vw'}}>Simply add your details below and let us know of a convenient time to call you back. We will get back to you within the time that you specify. </p>
                        <hr/>
                        <div style={{display: 'flex'}}>
                            <div style={{flex: 1}}>
                                <p style={{fontWeight: '500'}}>Your Name</p>
                            </div>
                            <div style={{flex: 1, display: 'flex'}}>
                                <input className='form-control' type="text" placeholder='First Name' style={{flex: 1, marginRight: '1vw'}}/>
                                <input className='form-control' type="text" placeholder='Last Name' style={{flex: 1}}/>
                            </div>
                        </div>
                        <hr/>
                        <div style={{display: 'flex'}}>
                            <div style={{flex: 1}}>
                                <p style={{fontWeight: '500'}}>Email Address</p>
                            </div>
                            <div style={{flex: 1, display: 'flex'}}>
                                <input className='form-control' type="text" placeholder='email@company.com' style={{flex: 1}}/>
                            </div>
                        </div>
                        <hr/>
                        <div style={{display: 'flex'}}>
                            <div style={{flex: 1}}>
                                <p style={{fontWeight: '500'}}>Phone Number</p>
                            </div>
                            <div style={{flex: 1, display: 'flex'}}>
                                <input className='form-control' type="text" placeholder='0412 345 678' style={{flex: 1}}/>
                            </div>
                        </div>
                        <hr/>
                        <div style={{display: 'flex'}}>
                            <div style={{flex: 1}}>
                                <p style={{fontWeight: '500'}}>Select Date for Callback</p>
                            </div>
                            <div style={{flex: 1, display: 'flex'}}>
                                <input className='form-control' type="text" placeholder='Date' style={{flex: 1}}/>
                            </div>
                        </div>
                        <hr/>
                        <div style={{display: 'flex'}}>
                            <div style={{flex: 1}}>
                                <p style={{fontWeight: '500'}}>Select Timeframe for Callback</p>
                            </div>
                            <div style={{flex: 1, display: 'flex'}}>
                                <input className='form-control' type="text" placeholder='TimeFrame' style={{flex: 1}}/>
                            </div>
                        </div>
                        <hr/>
                        <StartPlanningBtn style={{width: '100%'}}>Submit</StartPlanningBtn>
                        
                    </div>
                </div>
            </div>

            <p style={{fontWeight: '600', fontSize: '2.2rem', paddingTop: '4vw'}}>See Our Other Magical Mystery Experiences</p>
            <p style={{color: '#70707B'}}>See our other Magical Mystery Experiences for you to plan your new adventure today.</p>
            <div style={{display: 'flex', margin: '0 20vw'}}>
                <div style={{flex: 1, backgroundColor: 'white', borderRadius: '10px', margin: '4vw 1vw', padding: '2vw'}}>
                    <p style={{fontWeight: '600', fontSize: '1.2rem'}}>Create The Experience</p>
                    <p style={{color: '#70707B'}}>Create your own experience by selecting your own options. </p>
                    <img src={im7} style={{paddingBottom: '1.5vw'}}/>
                    <WhiteButton style={{width: '100%'}}>Find Out More</WhiteButton>
                </div>
                <div style={{flex: 1, backgroundColor: 'white', borderRadius: '10px', margin: '4vw 1vw', padding: '2vw'}}>
                    <p style={{fontWeight: '600', fontSize: '1.2rem'}}>Pre-Planned Experience</p>
                    <p>Select one of our readily available pre-planned dates.</p>
                    <img src={im8} style={{paddingBottom: '1.5vw'}}/>
                    <WhiteButton style={{width: '100%'}}>Find Out More</WhiteButton>
                </div>
                <div style={{flex: 1, backgroundColor: 'white', borderRadius: '10px', margin: '4vw 1vw', padding: '2vw'}}>
                    <p style={{fontWeight: '600', fontSize: '1.2rem'}}>Puzzled Experience</p>
                    <p>Fill out our tailor-made form to tailor the experience to suit your interests.</p>
                    <img src={im12} style={{paddingBottom: '1.5vw'}}/>
                    <WhiteButton style={{width: '100%'}}>Find Out More</WhiteButton>
                </div>

            </div>

        </div>
    )
}