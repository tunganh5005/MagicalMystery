import React from 'react'

import logo from '../../res/logo.png'
import StartPlanningBtn from '../utils/StartPlanningBtn'
import WhiteButton from '../utils/WhiteButton'

import classes from './Footer.module.css'

import facebook from '../../res/facebookIcn.png'

import instagram from '../../res/insIcon.png'

import twitter from '../../res/twitterIcn.png'

import linkedin from '../../res/linkedinIcn.png'

import tiktok from '../../res/tiktokIcn.png'

import pinterest from '../../res/pinterestIcn.png'

const Footer = () => {
    return (
        <React.Fragment>
            <div className={classes.footer} style={{paddingLeft:"5vw", paddingRight:"5vw", textAlign:"left", fontSize:"0.8rem"}}>
                <div style={{padding: '3vw 5vw', display:'flex'}}>
                    <div style={{flex: 1}}>
                    <p style={{fontSize:'1.6rem', fontWeight: '600', color:'black'}}>Ready To Plan Your Next Adventure?</p>
                    <p style={{color: '#70707B', margin: '0 auto', fontSize: '1.1rem'}}>Get started with a Magical Mystery experience today!</p>
                    </div>
                    <div style={{textAlign: 'right', flex: 1}}>
                        <WhiteButton style={{fontSize: '1.1rem', marginRight: '2%'}}>See More</WhiteButton>
                        <StartPlanningBtn style={{fontSize: '1.1rem'}}>Start Planning</StartPlanningBtn>
                    </div>
                </div>
                <hr style={{margin: '0 5vw'}}/>
                <div style={{display: 'flex', fontSize: '1rem', marginTop: '3%', lineHeight: '2vw', marginBottom: '3%'}}>
                    <div style={{flex: 2, marginRight: '5vw'}}>
                        <div style={{textAlign: 'center', marginLeft: '5vw'}}>
                            <img src={logo} style={{width: '10vw'}}/>
                            <p style={{fontSize: '0.8rem', color: '#AC623D', marginTop: '3%', fontWeight: '600'}}>Magical Mystery</p>
                            <p style={{color: '#70707B', margin: '0 auto'}}>Creating memorable and exciting experiences for friends, family and couples throughout Victoria, Australia.</p>
                        </div>
                    </div>
                    <div style={{flex: 1, marginRight: '2vw'}}>
                        <h7 className={classes.title}>Experiences</h7>
                        <br/>
                        <div style={{}}>
                            <a className={classes.link} href="#">Explore All</a>
                            <br/>
                            <a className={classes.link} href="#">Pre-Planned Experience</a>
                            <br/>
                            <a className={classes.link} href="#">Create Your Experience</a>
                            <br/>
                            <a className={classes.link} href="#">Puzzled Experience</a>
                            <br/>
                            <a className={classes.link} href="#">Tailor-Made Experience</a>
                        </div>
                    </div>
                    <div style={{flex: 1, marginRight: '2vw'}}>
                        <h7 className={classes.title}>About</h7>
                        <br/>
                        <div style={{}}>
                            <a className={classes.link} href="#">Home</a>
                            <br/>
                            <a className={classes.link} href="#">About Us</a>
                            <br/>
                            <a className={classes.link} href="#">Information</a>
                            <br/>
                            <a className={classes.link} href="#">Gallery</a>
                            <br/>
                            <a className={classes.link} href="#">News</a>
                            <br/>
                            <a className={classes.link} href="#">Contact</a>
                        </div>
                    </div>
                    <div style={{flex: 1, marginRight: '2vw'}}>
                        <h7 className={classes.title}>Connect</h7>
                        <br/>
                        <div style={{}}>
                            <a className={classes.link} href="#">Facebook</a>
                            <br/>
                            <a className={classes.link} href="#">Twitter</a>
                            <br/>
                            <a className={classes.link} href="#">Instagram</a>
                            <br/>
                            <a className={classes.link} href="#">LinkedIn</a>
                            <br/>
                            <a className={classes.link} href="#">TikTok</a>
                            <br/>
                            <a className={classes.link} href="#">Pinterest</a>
                        </div>
                    </div>
                    <div style={{flex: 1, marginRight: '2vw'}}>
                        <h7 className={classes.title}>Legal</h7>
                        <br/>
                        <div style={{}}>
                            <a className={classes.link} href="#">Terms</a>
                            <br/>
                            <a className={classes.link} href="#">Policy</a>
                            <br/>
                            <a className={classes.link} href="#">Cookies</a>
                            <br/>
                            <a className={classes.link} href="#">Settings</a>
                            <br/>
                        </div>
                    </div>
                    
                </div>
                <hr style={{margin: '0 5vw'}}/>
                <div style={{padding: '2vw 5vw', display: 'flex'}}>
                    <div style={{flex: 1}}>
                        <p style={{color: '#A0A0AB', margin: 0}}>Copyright © 2022 Magical Mystery. All rights reserved.</p>
                        <p style={{color: '#A0A0AB', margin: 0}}>Website by Spacey Studios.</p>
                    </div>
                    <div style={{flex: 1, textAlign: 'right'}}>
                        <div style={{ display: 'inline-block'}}>
                            <img src={facebook} style={{ height: '1.5vw', width:'1.5vw', marginLeft: '1vw'}}/>
                            <img src={instagram} style={{ height: '1.5vw', width:'1.5vw', marginLeft: '1vw'}}/>
                            <img src={twitter} style={{ height: '1.5vw', width:'1.5vw', marginLeft: '1vw'}}/>
                            <img src={linkedin} style={{ height: '1.5vw', width:'1.5vw', marginLeft: '1vw'}}/>
                            <img src={tiktok} style={{ height: '1.5vw', width:'1.5vw', marginLeft: '1vw'}}/>
                            <img src={pinterest} style={{ height: '1.5vw', width:'1.5vw', marginLeft: '1vw'}}/>
                        
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Footer;