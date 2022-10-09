import Im from '../../../res/ContactImg.png'
import StartPlanningBtn from '../../utils/StartPlanningBtn';

const Content = () => {
    return (
        <div style={{paddingLeft:"10%", paddingRight:"10%", textAlign: 'left', paddingTop: '5%', paddingBottom: '5%'}}>

            <div style={{display: 'flex'}}>
                <div style={{flex: 1, paddingRight: '5%'}}>
                    <div style={{width: '100%', paddingRight: '5%' }}>
                        <h1 style={{paddingTop:"4%", paddingBottom:"2%", fontSize: '3rem'}}>Contact Us</h1>
                        <p style={{color:'#70707B'}}>Let us know how we can assist with the form below and a member of our friendly team will get back to you as soon as possible.</p>
                        <div style={{display: 'flex', marginBottom: '4%'}}>
                            <div style={{flex: 1, marginRight: '5%'}}>
                                <p style={{marginBottom: '1%'}}>First Name</p>
                                <input className='form-control' style={{width: '100%'}} type='text'/>
                            </div>
                            <div style={{flex: 1}}>
                                <p style={{marginBottom: '1%'}}>Last Name</p>
                                <input className='form-control' style={{width: '100%'}} type='text'/>
                            </div>
                        </div>
                        <div style={{display: 'flex', marginBottom: '4%'}}>
                            <div style={{flex: 1}}>
                                <p style={{marginBottom: '1%'}}>Email</p>
                                <input className='form-control' style={{width: '100%'}} type='text'/>
                            </div>
                        </div>
                        <div style={{display: 'flex', marginBottom: '4%'}}>
                            <div style={{flex: 1}}>
                                <p style={{marginBottom: '1%'}}>Phone Number</p>
                                <input className='form-control' style={{width: '100%'}} type='text'/>
                            </div>
                        </div>
                        <div style={{display: 'flex', marginBottom: '4%'}}>
                            <div style={{flex: 1}}>
                                <p style={{marginBottom: '1%'}}>Message</p>
                                <textarea placeholder='Tell us how we can assist...' className='form-control' style={{width: '100%', height: '150px'}} type='text'/>
                            </div>
                        </div>
                        <div style={{marginBottom: '4%'}}>
                            <input className="form-check-input" type="checkbox" style={{marginRight: '2%'}}/>
                            <label className="form-check-label" for="flexCheckDefault">
                             You agree to our privacy policy.
                            </label>
                        </div>
                        <StartPlanningBtn style={{width: '100%'}}>Send Message</StartPlanningBtn>
                    </div>
                </div>
                    
                <div style={{flex: 1, paddingRight: '5%'}}>
                    <img src={Im} style={{width: '100%'}}/>
                </div>

            </div>

        </div>
    );
}

export default Content;