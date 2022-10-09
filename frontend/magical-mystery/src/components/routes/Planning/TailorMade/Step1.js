

import StartPlanningBtn from '../../../utils/StartPlanningBtn'
import WhiteButton from '../../../utils/WhiteButton'

export default (props) => {
    return (
        <div className="tab-content" id="pills-tabContent" style={{backgroundColor:'white', paddingLeft:'5%', paddingRight:'5%' , paddingBottom:'7%', paddingTop:'3%', borderRadius:'7px', position: 'relative', marginTop: '4vw', color: 'black', textAlign: 'left'}}>
                <h1 style={{paddingTop:"0", paddingBottom:"1%", color: "black", fontSize:'1.1vw', fontWeight: '600', fontFamily: 'Ubuntu'}}>Let’s Plan Your Next Experience!</h1>
                <p style={{paddingBottom: '1vw', fontSize: '0.9rem', color: '#70707B'}}>To get started on planning a pre-planned experience, please fill out some information on the form below. Pre-PLanned Experience is an already planned experience that can be selected and purchased by you via our website. If you’re seeking a surprise, we also do unknown packages that are an exciting adventure for your next experience. </p>
                <hr style={{color:'rgb(156, 162, 168)'}}/>
                <div style={{display: 'flex'}}>
                    <div style={{flex:1}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Your Name</p>
                    </div>
                    <div style={{flex:2, display: 'flex'}}>
                        <input className='form-control' type='text' placeholder='First Name' style={{marginRight: '1vw'}}/>
                        <input className='form-control' type='text' placeholder='Last Name'/>
                    </div>
                </div>
                <hr style={{color:'rgb(156, 162, 168)'}}/>
                <div style={{display: 'flex'}}>
                    <div style={{flex:1}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Email Address</p>
                    </div>
                    <div style={{flex:2, display: 'flex'}}>
                        <input className='form-control' type='email' placeholder='email@company.com'/>
                    </div>
                </div>
                <hr style={{color:'rgb(156, 162, 168)'}}/>
                <div style={{display: 'flex'}}>
                    <div style={{flex:1}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Phone Number</p>
                    </div>
                    <div style={{flex:2, display: 'flex'}}>
                        <input className='form-control' type='number' placeholder='0412 345 678'/>
                    </div>
                </div>
                <hr style={{color:'rgb(156, 162, 168)'}}/>
                <div style={{display: 'flex'}}>
                    <div style={{flex:1}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Guest Names</p>
                    </div>
                    <div style={{flex:2, display: 'flex'}}>
                        <input className='form-control' type='text' placeholder='Enter full name of each guest'/>
                    </div>
                </div>
                <hr style={{color:'rgb(156, 162, 168)'}}/>
                <div style={{display: 'flex'}}>
                    <div style={{flex:1}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>When Do You Want To Go?</p>
                    </div>
                    <div style={{flex:2, display: 'flex'}}>
                        <input className='form-control' type='text' placeholder='Start Date' style={{marginRight: '1vw'}}/>
                        <p style={{paddingTop: '0.8vw', fontSize: '1rem', lineHeight: '100%'}}>to</p>
                        <input className='form-control' type='text' placeholder='End Date' style={{marginLeft: '1vw'}}/>
                    </div>
                </div>
                <hr style={{color:'rgb(156, 162, 168)'}}/>
                <div style={{display: 'flex'}}>
                    <div style={{flex:1}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Time of Day</p>
                    </div>
                    <div style={{flex:2, display: 'flex'}}>
                        <input className='form-control' type='text' placeholder='Morning of Start Date' style={{marginRight: '1vw'}}/>
                        <input className='form-control' type='text' placeholder='Lunch of End Date'/>
                    </div>
                </div>
                <hr style={{color:'rgb(156, 162, 168)'}}/>
                <div style={{display: 'flex'}}>
                    <div style={{flex:1}}>
                        <p style={{fontSize: '1rem', fontWeight: '500', paddingRight: '1vw'}}>Do you want to know about your pre-planned experience, or would you like it to be a surprose?</p>
                    </div>
                    <div style={{flex:2,fontSize: '1rem'}}>
                        <div class="form-check" style={{width: '100%', paddingBottom: '0.6vw'}}>
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                        <label class="form-check-label" for="exampleRadios1">
                        Known Pre-Planned Experience
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                        <label class="form-check-label" for="exampleRadios2">
                        Unknown Pre-Planned Experience - Surprise Us!
                        </label>
                        </div>
                    </div>
                </div>
                <hr style={{color:'rgb(156, 162, 168)'}}/>
                <div style={{float: 'right'}}>
                    <WhiteButton style={{marginRight: '0.8vw'}}>Cancel</WhiteButton>
                    <StartPlanningBtn onClick={props.onSubmit}>Next</StartPlanningBtn>
                </div>
            </div>
    )
}