
import { NavLink } from 'react-router-dom'

import Logo from '../../res/logo.png'

import fb from '../../res/Facebook.png'

import ins from '../../res/Instagram.png'

import pin from '../../res/Pinterest.png'

import shop from '../../res/icon_Shop.png'

import notification from '../../res/icon_Notification.png'

import user from '../../res/icon_User.png'

const NavBar = () => {
    return (
        // <div style={{position: "absolute", zIndex: 1000, width:"100%", backgroundColor:"rgb(0, 0, 0, 0.25)"}}>
        //     <div style={{borderBottom:"1px solid #F2D6CD"}}>
        //         <div className="row align-items-start pt-3 pb-3" style={{width:"95%", margin: "auto"}}>
        //             <div className="col">
        //                 <nav className="nav" style={{position:"relative", top:"50%", transform:"translateY(25%)"}}>
        //                     <a className="nav-link" href="#"><img src={fb}/></a>
        //                     <a className="nav-link" href="#"><img src={ins}/></a>
        //                     <a className="nav-link" href="#"><img src={pin}/></a>
        //                 </nav>
        //             </div>
        //             <div className="col">
        //                 <img src={Logo}/>
        //             </div>
        //             <div className="col">
        //                 <ul className="nav justify-content-end" style={{position:"relative", top:"50%", transform:"translateY(25%)"}}>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#"><img src={shop}/></a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#"><img src={notification}/></a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#"><img src={user}/></a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        //     <nav className="navbar navbar-expand-lg navbar-light shadow-5-strong w-100" style={{borderBottom:"1px solid #F2D6CD"}}>
        //         <div className="container-fluid">
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarNavDropdown">
        //                 <ul className="navbar-nav nav-fill" style={{width: "92%", margin: "auto"}}>
        //                     <li className="nav-item">
        //                         <NavLink activeClassName="active" className="nav-link" style={{color: "#F2D6CD"}} to='/'>HOME</NavLink>
        //                     </li>
        //                     <li className="nav-item dropdown">
        //                         <a activeClassName="active" className="btn" style={{color: "#F2D6CD", border:"0"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">ABOUT</a>
        //                         <ul className="dropdown-menu" style={{backgroundColor:"rgb(0, 0, 0, 0.3)"}}>
        //                             <li><NavLink className="dropdown-item" to='about' style={{color:"#F2D6CD"}}>About Magical Mystery</NavLink></li>
        //                             <li><NavLink className="dropdown-item" to='about' style={{color:"#F2D6CD"}}>About Us</NavLink></li>
        //                         </ul>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink activeClassName="active" className="nav-link" style={{color: "#F2D6CD"}} to='/packages'>BOOKINGS</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink activeClassName="active" className="nav-link" style={{color: "#F2D6CD"}} to='/gallery'>GALLERY</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink activeClassName="active" className="nav-link" style={{color: "#F2D6CD"}} to='business'>BUSINESS APPLICATION</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink activeClassName="active" className="nav-link" style={{color: "#F2D6CD"}} to='contact'>CONTACT</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        <div style={{ width:"100%", backgroundColor:"rgb(0, 0, 0, 0.25)", borderBottom: 'solid 1px #E4E4E7'}}>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid" style={{padding:'0.4% 7.5%'}}>
                    <a class="navbar-brand" href="#"><img style={{height: '2vw'}} src={Logo}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <NavLink activeClassName="active-nav nav-link" className="nav-link" style={{fontSize: '0.9rem', marginLeft: '0.5vw', fontWeight:'500'}} to='/' exact={true}>Home</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink activeClassName="active-nav nav-link" className="nav-link" style={{fontSize: '0.9rem', marginLeft: '1vw', fontWeight:'500'}} to='/experiences'>Experiences</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink activeClassName="active-nav nav-link" className="nav-link" style={{fontSize: '0.9rem', marginLeft: '1vw', fontWeight:'500'}} to='/about'>About</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink activeClassName="active-nav nav-link" className="nav-link" style={{fontSize: '0.9rem', marginLeft: '1vw', fontWeight:'500'}} to='/gallery'>Gallery</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink activeClassName="active-nav nav-link" className="nav-link" style={{fontSize: '0.9rem', marginLeft: '1vw', fontWeight:'500'}} to='/applications'>Business Applications</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink activeClassName="active-nav nav-link" className="nav-link" style={{fontSize: '0.9rem', marginLeft: '1vw', fontWeight:'500'}} to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                    </div>
                    <div className='d-flex'>
                        <button class="btn" style={{border: 'solid 1px gray'}} type="submit">Help</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar