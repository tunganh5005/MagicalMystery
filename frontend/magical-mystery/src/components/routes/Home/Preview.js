

import Train from '../../../res/Train.png'

import Wheels from '../../../res/wheels.png'

import StartPlanningBtn from '../../utils/StartPlanningBtn'
import WhiteButton from '../../utils/WhiteButton'

const images = ['https://content.api.news/v3/images/bin/fb38dc9a831352b123ba90ecb4e052f9', 
'https://img.delicious.com.au/n6d0eFUI/w759-h506-cfill/del/2020/02/vue-de-monde-126574-1.jpg', 
'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=', 
'https://cmstravelmedia.webjet.com.au/wp-uploads/2019/03/Family-Friendly-Activities-Melbourne-2-770x433.jpg', 'https://www.hellosydneykids.com.au/wp-content/uploads/2019/05/Melbourne-Kids-Activities.jpg', 'https://www.bookmestatic.net.nz/images/activities/4874_image1_12063344_10156201813085122_7073983963122212280_n.jpg', 'https://cdn.concreteplayground.com/content/uploads/2017/04/Holey-Moley-Melbourne-Lucas-Dawson-07.jpeg', 'https://tothotornot.com/wp-content/uploads/2018/04/Melbourne-Aquarium-7-15-1024x683.jpg', 'https://img.delicious.com.au/DQF-SzC1/w759-h506-cfill/del/2020/06/the-langham-gold-coast-announces-a-2021-opening-133880-2.jpg', 'https://media-cdn.tripadvisor.com/media/photo-s/15/24/0c/d4/the-great-southern-hotel.jpg', 'https://image-tc.galaxy.tf/wijpeg-b456elcmkcvgemd2go1ect3c1/file.jpg?width=1920', 'https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg', 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg']

export default () => {
    return (
        <div style={{}}>
            <div style={{paddingTop:'4vw', paddingBottom:'2vw'}}>
            <p style={{color: '#AC623D', fontWeight: '500', fontSize: '1.1rem'}}>See Our Gallery</p>
            <p style={{fontSize: '2.5rem', fontWeight: '600' , color: '#18181B'}}>The Magical Adventure Awaits</p>
            <p style={{color: '#AC623D', fontWeight: '400', fontSize: '1.2rem', marginLeft: '20%', marginRight: '20%'}}>Plan your next Magical Mystery Adventure today. We love bring people together and celebrating, whilst creating memorable experiences. Check out our best highlights below.</p>
            <div className='scroller'>
                <div className='inner' style={{display: 'flex', flexDirection: 'horizontal', marginTop: '4vw', paddingBottom: '4vw', overflow: 'scroll'}}>
                    <span style={{marginLeft: '10vw', marginTop: 'auto', marginBottom: '0.6vw', marginRight: '1.2vw'}}><img src={Train}/></span>
                    {images.map(im => (
                        <span>
                            <img src={im} style={{height: '15vw', width: '22vw', margin: '0 0.6vw'}}/>
                            <img src={Wheels} style={{width: '22vw', margin: '0.6vw 0.6vw'}}/>
                        </span>
                    ))}
                </div>
                <div style={{margin: '4vw 32vw'}}>
                    <StartPlanningBtn style={{fontSize: '1.1rem', marginRight: '2%'}}>Start Planning</StartPlanningBtn>
                    <WhiteButton style={{fontSize: '1.1rem'}}>See More</WhiteButton>
                </div>
            </div>
        </div>
        </div>
    )
}