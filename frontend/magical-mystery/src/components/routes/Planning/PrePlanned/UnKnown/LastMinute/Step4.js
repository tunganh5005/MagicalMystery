

import StartPlanningBtn from '../../../../../utils/StartPlanningBtn'

import { useState } from 'react'

export default (props) => {

    const [isConfirmed, setIsConfirmed] = useState(false)


    function submitHandler(){
        setIsConfirmed(true)
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }

    return (
        <div className="tab-content" id="pills-tabContent" style={{backgroundColor:'white', paddingLeft:'10%', paddingRight:'10%' , paddingBottom:'7%', paddingTop:'3%', borderRadius:'7px', position: 'relative', marginTop: '4vw', color: 'black', textAlign: 'center', fontSize: '1.1rem'}}>
            { !isConfirmed && <div style={{padding: '0 5%'}}>
                <h1 style={{paddingTop:"0", paddingBottom:"1%", color: "black", fontSize:'1.1vw', fontWeight: '600', fontFamily: 'Ubuntu'}}>Checkout</h1>
                <p style={{paddingBottom: '0', fontSize: '0.9rem', color: '#70707B'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget tempor ac lorem nibh id. Vulputate blandit ac eget placerat nunc leo magna. Diam molestie iaculis in vitae. Commodo sodales urna etiam vulputate odio. Accumsan eget pharetra sed vitae.</p>
                <h1 style={{ padding:'3vw 0', color: "#AC623D", fontSize:'1.1vw', fontWeight: '500'}}><span style={{color: 'black'}}>Your total for today:</span> $1,152.85</h1>
                <div style={{textAlign: 'left'}}>
                <hr style={{color: '#AC623D', borderTop: 'solid 2px'}}/>
                <div className='align-left' style={{display: 'flex'}}>
                    <div style={{flex:1}}>Card Details</div>
                    <div style={{flex:2}}>
                        <div style={{display: 'flex', paddingBottom: '3%'}}>
                            <div style={{flex:3, marginRight: '2%'}}>
                                <label for="exampleInputEmail1" class="form-label">Name on card</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: '#AC623D'}}/>
                            </div>
                            <div style={{flex:1}}>
                                <label for="exampleInputEmail1" class="form-label">Expiry</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: '#AC623D'}}/>
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div style={{flex:3, marginRight: '2%'}}>
                                <label for="exampleInputEmail1" class="form-label">Card number</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: '#AC623D'}}/>
                            </div>
                            <div style={{flex:1}}>
                                <label for="exampleInputEmail1" class="form-label">CVV</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: '#AC623D'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{color: '#AC623D', borderTop: 'solid 2px'}}/>
                <div className='align-left' style={{display: 'flex', paddingBottom: '3%'}}>
                    <div style={{flex:1}}>Card Details</div>
                    <div style={{flex:2}}>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: '#AC623D'}}/>
                    </div>
                </div>
                <div className='align-left' style={{display: 'flex'}}>
                    <div style={{flex:1}}>Phone number</div>
                    <div style={{flex:2}}>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: '#AC623D'}}/>
                    </div>
                </div>
                <hr style={{color: '#AC623D', borderTop: 'solid 2px'}}/>
                <div className='align-left' style={{display: 'flex', paddingBottom: '3%'}}>
                    <div style={{flex:1}}>Your Name</div>
                    <div style={{flex:2}}>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: '#AC623D'}}/>
                    </div>
                </div>
                <div className='align-left' style={{display: 'flex', paddingBottom: '3%'}}>
                    <div style={{flex:1}}>Street Address</div>
                    <div style={{flex:2}}>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: '#AC623D'}}/>
                    </div>
                </div>
                <div className='align-left' style={{display: 'flex', paddingBottom: '3%'}}>
                    <div style={{flex:1}}>City</div>
                    <div style={{flex:2}}>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: '#AC623D'}}/>
                    </div>
                </div>
                <div className='align-left' style={{display: 'flex', paddingBottom: '3%'}}>
                    <div style={{flex:1}}>State/Province</div>
                    <div style={{flex:2, display:'flex'}}>
                        <input style={{flex:1, marginRight: '2%', borderColor: '#AC623D'}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <input style={{flex:1, borderColor: '#AC623D'}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                </div>
                <div className='align-left' style={{display: 'flex'}}>
                    <div style={{flex:1}}>Country</div>
                    <div style={{flex:2}}>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: '#AC623D'}}/>
                    </div>
                </div>
                <hr style={{color: '#AC623D', borderTop: 'solid 2px'}}/>
                <div className='align-left' style={{display: 'flex', paddingBottom: '3%'}}>
                    <div style={{flex:1}}>Your Partner's Name</div>
                    <div style={{flex:2}}>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: '#AC623D'}}/>
                    </div>
                </div>
                <hr style={{color: '#AC623D', borderTop: 'solid 2px'}}/>
                <div className='align-left' style={{display: 'flex', paddingBottom: '3%'}}>
                    <div style={{flex:1}}>Terms & Conditions</div>
                    <div style={{flex:2}}>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{borderColor: '#AC623D'}}/>
                        <label class="form-check-label" style={{paddingLeft: '1%'}} for="exampleCheck1">Terms & Conditions</label>
                        <p style={{paddingLeft: '1.3rem', margin: 0, fontSize: '0.9rem', color: 'rgb(80, 80, 80)'}}>Click here to read our Terms & Conditions.</p>
                        <br/>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{borderColor: '#AC623D'}}/>
                        <label class="form-check-label" style={{paddingLeft: '1%'}} for="exampleCheck1">Privacy Policy</label>
                        <p style={{paddingLeft: '1.3rem', margin: 0, fontSize: '0.9rem', color: 'rgb(80, 80, 80)'}}>Click here to read our Privacy Policy.</p>
                        <br/>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{borderColor: '#AC623D'}}/>
                        <label class="form-check-label" style={{paddingLeft: '1%'}} for="exampleCheck1">Subscribe To Our Newsletter</label>
                        <p style={{paddingLeft: '1.3rem', margin: 0, fontSize: '0.9rem', color: 'rgb(80, 80, 80)', paddingRight: '5vw'}}>Join our list to be kept up-to-date with all of the latest specials, announcements, tips, tricks, gossip and anything else that we may shoot through to your inbox from time-to-time.</p>
                    </div>
                </div>
                </div>
                <StartPlanningBtn style={{width: '100%', fontSize:'1rem', marginTop: '2%', borderRadius: '5px'}} onClick={submitHandler}>Submit</StartPlanningBtn>
                </div>}
                { isConfirmed && <div>
                    <h1 style={{paddingTop:"0", paddingBottom:"1%", color: "black", fontSize:'1.1vw', fontWeight: '600', fontFamily: 'Ubuntu'}}>Confirmation</h1>
                    <p style={{paddingBottom: '0', fontSize: '0.9rem', color: '#70707B'}}>Thank you for booking your next Magical Mystery experience! Our team is getting everything ready for you behind the scenes and will be in touch soon with the booking confirmation and selected packages. If you have any questions about your booking, please contact us today.</p>
                    <div style={{border: 'solid 1px #AC623D', marginTop: '3vw', paddingBottom: '3vw'}}>
                        <h1 style={{ padding:'3vw 0', color: "#AC623D", fontSize:'1.1vw', fontWeight: '500'}}><span style={{color: 'black'}}>Your Booking Reference: </span>#312-433123</h1>
                        <h1 style={{ padding:'0 0', marginBottom: '1vw', color: "#AC623D", fontSize:'1.1vw', fontWeight: '500'}}><span style={{color: 'black'}}>Total Price For Your Experience</span></h1>
                        <div style={{padding: '0 7.5vw', margin: '2vw 0'}}>
                            <div style={{display: 'flex'}}>
                                <div style={{flex: 1, textAlign: 'left', paddingLeft: '2vw', color:'#AC623D', fontWeight: '500'}}>
                                    <p style={{ marginBottom: '0.2vw'}}>Experience Category</p>
                                </div>
                                
                                <div style={{flex: 1, textAlign:'right', paddingRight: '2vw', color:'#AC623D', fontWeight: '500'}}>
                                    <p style={{ marginBottom: '0.2vw'}}>Total Price</p>
                                </div>
                            </div>
                            <hr style={{color: '#AC623D', height: '2px'}}/>
                            <div style={{display: 'flex'}}>
                                <div style={{flex: 1, textAlign: 'left', paddingLeft: '2vw', color:'black', fontWeight: '400'}}>
                                    <p style={{ marginBottom: '0.2vw'}}>Accommodation</p>
                                </div>
                                
                                <div style={{flex: 1, textAlign:'right', paddingRight: '2vw', color:'black', fontWeight: '400'}}>
                                    <p style={{ marginBottom: '0.2vw'}}>$325.50</p>
                                </div>
                            </div>
                            <hr style={{color: '#AC623D', height: '2px'}}/>
                            <div style={{display: 'flex'}}>
                                <div style={{flex: 1, textAlign: 'left', paddingLeft: '2vw', color:'black', fontWeight: '400'}}>
                                    <p style={{ marginBottom: '0.2vw'}}>Meals</p>
                                </div>
                                
                                <div style={{flex: 1, textAlign:'right', paddingRight: '2vw', color:'black', fontWeight: '400'}}>
                                    <p style={{ marginBottom: '0.2vw'}}>$425.00</p>
                                </div>
                            </div>
                            <hr style={{color: '#AC623D', height: '2px'}}/>
                            <div style={{display: 'flex'}}>
                                <div style={{flex: 1, textAlign: 'left', paddingLeft: '2vw', color:'black', fontWeight: '400'}}>
                                    <p style={{ marginBottom: '0.2vw'}}>Activities</p>
                                </div>
                                
                                <div style={{flex: 1, textAlign:'right', paddingRight: '2vw', color:'black', fontWeight: '400'}}>
                                    <p style={{ marginBottom: '0.2vw'}}>$643.50</p>
                                </div>
                            </div>
                            <hr style={{color: '#AC623D', height: '2px'}}/>
                            <div style={{display: 'flex'}}>
                                <div style={{flex: 1, textAlign: 'left', paddingLeft: '2vw', color:'black', fontWeight: '400'}}>
                                    <p style={{ marginBottom: '0.2vw'}}>Packages & Upgrades</p>
                                </div>
                                
                                <div style={{flex: 1, textAlign:'right', paddingRight: '2vw', color:'black', fontWeight: '400'}}>
                                    <p style={{ marginBottom: '0.2vw'}}>$118.85</p>
                                </div>
                            </div>
                            <hr style={{color: '#AC623D', height: '2px'}}/>
                            <div style={{display: 'flex'}}>
                                <div style={{flex: 1, textAlign: 'left', paddingLeft: '2vw', color:'#AC623D', fontWeight: '500'}}>
                                    <p style={{ marginBottom: '0.2vw'}}>Total Experience</p>
                                </div>
                                
                                <div style={{flex: 1, textAlign:'right', paddingRight: '2vw', color:'#AC623D', fontWeight: '500'}}>
                                    <p style={{ marginBottom: '0.2vw'}}>$1,512.85</p>
                                </div>
                            </div>
                        </div>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>We will email you a copy of your itinerary.</p>
                    </div>
                </div>}
            </div>
    )
}