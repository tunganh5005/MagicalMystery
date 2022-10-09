import Icn1 from '../../../res/Featured icon (12).png'
import Icn2 from '../../../res/Featured icon (13).png'
import Icn3 from '../../../res/Featured icon (14).png'
import Icn4 from '../../../res/Featured icon (15).png'
import Icn5 from '../../../res/Featured icon (16).png'
import Icn6 from '../../../res/Featured icon (17).png'


export default () => {
    return (
        <div style={{backgroundColor: '#ECDBC5', padding: '4vw 10vw'}}>
            <p style={{color: '#451C05', fontWeight: '600', fontSize: '1.2rem'}}>The Benefits</p>
            <p style={{color: 'black', fontWeight: '600', fontSize: '2.5rem'}}>Why Use Magical Mystery</p>
            <div style={{display: 'flex', paddingTop: '2vw'}}>
                <div style={{flex: 1, padding: '0 2vw'}}>
                    <div style={{marginBottom: '1vw'}}><img src={Icn1}/></div>
                    <p style={{fontWeight: 500, fontSize: '1.2rem', color: '#451C05'}}>Value Proposition #1</p>
                    <p style={{color: '#451C05'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id commodo imperdiet in nulla ornare interdum id elementum. Hac proin vel vestibulum sed.</p>
                </div>
                <div style={{flex: 1, padding: '0 2vw'}}>
                    <div style={{marginBottom: '1vw'}}><img src={Icn2}/></div>
                    <p style={{fontWeight: 500, fontSize: '1.2rem', color: '#451C05'}}>Value Proposition #2</p>
                    <p style={{color: '#451C05'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id commodo imperdiet in nulla ornare interdum id elementum. Hac proin vel vestibulum sed.</p>
                </div>
                <div style={{flex: 1, padding: '0 2vw'}}>
                    <div style={{marginBottom: '1vw'}}><img src={Icn3}/></div>
                    <p style={{fontWeight: 500, fontSize: '1.2rem', color: '#451C05'}}>Value Proposition #3</p>
                    <p style={{color: '#451C05'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id commodo imperdiet in nulla ornare interdum id elementum. Hac proin vel vestibulum sed.</p>
                </div>
            </div>
            <div style={{display: 'flex', paddingTop: '2vw'}}>
                <div style={{flex: 1, padding: '0 2vw'}}>
                    <div style={{marginBottom: '1vw'}}><img src={Icn4}/></div>
                    <p style={{fontWeight: 500, fontSize: '1.2rem', color: '#451C05'}}>Value Proposition #4</p>
                    <p style={{color: '#451C05'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id commodo imperdiet in nulla ornare interdum id elementum. Hac proin vel vestibulum sed.</p>
                </div>
                <div style={{flex: 1, padding: '0 2vw'}}>
                    <div style={{marginBottom: '1vw'}}><img src={Icn5}/></div>
                    <p style={{fontWeight: 500, fontSize: '1.2rem', color: '#451C05'}}>Value Proposition #5</p>
                    <p style={{color: '#451C05'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id commodo imperdiet in nulla ornare interdum id elementum. Hac proin vel vestibulum sed.</p>
                </div>
                <div style={{flex: 1, padding: '0 2vw'}}>
                    <div style={{marginBottom: '1vw'}}><img src={Icn6}/></div>
                    <p style={{fontWeight: 500, fontSize: '1.2rem', color: '#451C05'}}>Value Proposition #6</p>
                    <p style={{color: '#451C05'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id commodo imperdiet in nulla ornare interdum id elementum. Hac proin vel vestibulum sed.</p>
                </div>
            </div>
        </div>
    )
}