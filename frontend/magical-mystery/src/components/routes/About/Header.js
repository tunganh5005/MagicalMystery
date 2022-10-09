import aboutBG from '../../../res/aboutBG.png'

import Video from '../../../res/aboutVideo.png'

const Header = () => {
    return (
        <div style={{backgroundImage:`url(${aboutBG})`, width:"100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", paddingBottom: '5%'}}>
            <div style={{paddingTop:"5%", width: "60%", color:"white", marginLeft:"auto", marginRight:"auto"}}>
                <h1 style={{fontSize:"334%", paddingBottom:"2%", color: '#AC623D'}}>About Us</h1>
                <p style={{fontSize:"1.2vw", color: '#18181B'}}>Magical Mystery has been developed in the heart of Victoria to supply the most sophisticated experiences for romantic couples, friends, family, and adventure seeking puzzle lovers.</p>
                <img style={{marginTop: '10%', width:'55vw'}} src={Video}/>
                <div style={{paddingTop: '5%'}}>
                    <p style={{color: '#AC623D', fontWeight: '500', fontSize: '1.1rem', marginBottom: '1vw'}}>Our Story</p>
                    <p style={{fontSize: '2.5rem', fontWeight: '600' , color: '#18181B'}}>Where It All Began</p>
                </div>
            </div>
            <div style={{margin: '0 10%'}}>
                <p style={{color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem vitae egestas ut. Lobortis integer eu placerat magna. Donec pellentesque vitae tristique suspendisse et fermentum volutpat et fringilla. Nulla et libero amet tincidunt velit nullam ut. Praesent in ipsum rutrum aliquam.</p>
                <p style={{color: 'black'}}>Ligula risus, lectus mattis ullamcorper sit cursus nunc nibh eros. Quam lacus massa proin hendrerit dolor. Elit diam orci id eleifend iaculis penatibus. Lacus amet, mattis volutpat cursus ultrices vitae morbi accumsan. Tortor, mi, tristique lacus et. Lorem malesuada eu ut quisque lobortis. Et diam cursus posuere feugiat dolor et pretium. Elit est molestie felis, ac at tortor pellentesque.</p>
                <p style={{color: 'black'}}>Sed imperdiet non mattis mi odio adipiscing habitant. Adipiscing adipiscing metus, netus id bibendum tellus. Est, dictumst vitae duis turpis sit magna. Sit tellus bibendum fermentum faucibus sed pharetra sapien. Pharetra, ornare pharetra eget bibendum pretium tincidunt justo. Tortor, dapibus neque, nunc lacus purus consequat eu. Ut nisl, nunc ultrices lectus. Egestas bibendum sit arcu ullamcorper sed auctor vitae. Vitae ullamcorper est lectus tortor egestas lacinia iaculis risus massa.</p>
            </div>
        </div>
    )
}

export default Header;