
import emailIcn from '../../../res/Featured icon (18).png'
import phoneIcn from '../../../res/Featured icon (19).png'


export default () => {
    return (
        <div style={{backgroundColor: '#ECDBC5', paddingTop: '5vw'}}>
            <p style={{fontWeight: 600, fontSize: '2.5rem'}}>Get In Touch With Our Team</p>
            <p style={{padding: '1vw 28vw', color: '#914822', fontSize: '1.2rem'}}>Looking for some assistance? Please contact our friendly staff by either calling us or sending us an email with your enquiry.</p>
            <div style={{display: 'flex', padding: '5vw 8vw'}}>
                <div style={{flex: 1}}>
                    <div style={{marginBottom: '1vw'}}><img src={emailIcn}/></div>
                    <p style={{fontWeight: 500, fontSize: '1.2rem'}}>Email</p>
                    <p style={{color: '#6E3211'}}>We’ll aim to reply within 24-48 business hours.</p>
                    <p style={{color: '#AC623D', fontWeight: '500'}}>hello@magicalmysterys.com.au</p>
                </div>

                <div style={{flex: 1}}>
                    <div style={{marginBottom: '1vw'}}><img src={phoneIcn}/></div>
                    <p style={{fontWeight: 500, fontSize: '1.2rem'}}>Phone</p>
                    <p style={{color: '#6E3211'}}>Mon to Fri, 9am to 5pm</p>
                    <p style={{color: '#AC623D', fontWeight: '500'}}>+61 456 296 961</p>
                </div>
            </div>
        </div>
    )
}