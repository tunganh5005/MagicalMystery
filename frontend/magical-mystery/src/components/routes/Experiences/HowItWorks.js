
import firstImg from '../../../res/Image.png'

import firstIcn from '../../../res/firstIcn.png'

import secondImg from '../../../res/Image (1).png'

import secondIcn from '../../../res/secondIcn.png'

import thirdImg from '../../../res/Image (2).png'

import thirdIcn from '../../../res/thirdIcn.png'

import checkIcn from '../../../res/Check icon.png'

import Review from './Review'
import Preview from './Preview'


export default () => {
    return (
        <div style={{backgroundColor: 'white', paddingTop: '5vw', paddingBottom: '5vw'}}>
            <p style={{fontSize: '2rem', fontWeight: '600'}}>How It Works</p>
            <p style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel diam, senectus amet vitae. Aliquam sit lectus donec magna. Vitae lacus et aliquam nullam non ultricies sagittis at. </p>
            <div style={{display: 'flex', marginTop: '5vw', marginBottom: '5vw'}}>
                <div style={{flex: 1, textAlign: 'left'}}>
                    <div style={{paddingLeft: '7vw', paddingRight: '7vw', width: '100%', paddingTop: '5vw'}}>
                        <img src={firstIcn} style={{marginBottom: '1.5vw'}} />
                        <p style={{fontWeight: '600', fontSize: '1.8rem'}}>Plan Your Trip Online</p>
                        <p style={{color: '#667085'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vitae purus in fermentum amet facilisis eleifend sem. Vestibulum nibh.</p>
                        <div style={{marginTop: '1vw', marginBottom: '1vw'}}><img src={checkIcn}/><p style={{lineHeight: '100%', display: 'inline', paddingLeft: '1vw'}}>Egestas aliquam, mauris amet nibh interdum.</p></div>
                        <div style={{marginTop: '1vw', marginBottom: '1vw'}}><img src={checkIcn}/><p style={{lineHeight: '100%', display: 'inline', paddingLeft: '1vw'}}>Odio maecenas erat sodales tristique nibh cras cursus.</p></div>
                        <div style={{marginTop: '1vw', marginBottom: '1vw'}}><img src={checkIcn}/><p style={{lineHeight: '100%', display: 'inline', paddingLeft: '1vw'}}>Proin vitae rhoncus arcu, justo turpis dui arcu.</p></div>
                    </div>
                </div>
                <div style={{flex: 1}}>
                    <img style={{width: '100%'}} src={firstImg}/>
                </div>
            </div>
            <div style={{display: 'flex', marginTop: '5vw', marginBottom: '5vw'}}>
                <div style={{flex: 1}}>
                <img style={{width: '100%'}} src={secondImg}/>
                </div>
                <div style={{flex: 1, textAlign: 'left'}}>
                    <div style={{paddingLeft: '7vw', paddingRight: '7vw', width: '100%', paddingTop: '5vw'}}>
                        <img src={secondIcn} style={{marginBottom: '1.5vw'}} />
                        <p style={{fontWeight: '600', fontSize: '1.8rem'}}>We Put All The Plans In Motion</p>
                        <p style={{color: '#667085'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vitae purus in fermentum amet facilisis eleifend sem. Vestibulum nibh.</p>
                        <div style={{marginTop: '1vw', marginBottom: '1vw'}}><img src={checkIcn}/><p style={{lineHeight: '100%', display: 'inline', paddingLeft: '1vw'}}>Egestas aliquam, mauris amet nibh interdum.</p></div>
                        <div style={{marginTop: '1vw', marginBottom: '1vw'}}><img src={checkIcn}/><p style={{lineHeight: '100%', display: 'inline', paddingLeft: '1vw'}}>Odio maecenas erat sodales tristique nibh cras cursus.</p></div>
                        <div style={{marginTop: '1vw', marginBottom: '1vw'}}><img src={checkIcn}/><p style={{lineHeight: '100%', display: 'inline', paddingLeft: '1vw'}}>Proin vitae rhoncus arcu, justo turpis dui arcu.</p></div>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', marginTop: '5vw', marginBottom: '5vw'}}>
                <div style={{flex: 1, textAlign: 'left'}}>
                    <div style={{paddingLeft: '7vw', paddingRight: '7vw', width: '100%', paddingTop: '5vw'}}>
                        <img src={thirdIcn} style={{marginBottom: '1.5vw'}} />
                        <p style={{fontWeight: '600', fontSize: '1.8rem'}}>You Enjoy Your Magical Mystery Experience with Friends & Family</p>
                        <p style={{color: '#667085'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vitae purus in fermentum amet facilisis eleifend sem. Vestibulum nibh.</p>
                        <div style={{marginTop: '1vw', marginBottom: '1vw'}}><img src={checkIcn}/><p style={{lineHeight: '100%', display: 'inline', paddingLeft: '1vw'}}>Egestas aliquam, mauris amet nibh interdum.</p></div>
                        <div style={{marginTop: '1vw', marginBottom: '1vw'}}><img src={checkIcn}/><p style={{lineHeight: '100%', display: 'inline', paddingLeft: '1vw'}}>Odio maecenas erat sodales tristique nibh cras cursus.</p></div>
                        <div style={{marginTop: '1vw', marginBottom: '1vw'}}><img src={checkIcn}/><p style={{lineHeight: '100%', display: 'inline', paddingLeft: '1vw'}}>Proin vitae rhoncus arcu, justo turpis dui arcu.</p></div>
                    </div>

                </div>
                <div style={{flex: 1}}>
                    <img style={{width: '100%'}} src={thirdImg}/>
                </div>
            </div>
            <Review/>
            <Preview/>
        </div>
    )
}