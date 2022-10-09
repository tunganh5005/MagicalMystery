

import { Link } from 'react-router-dom'

export default () => {
    return (
        <div style={{backgroundColor:'#ECDBC5', paddingBottom: '2%'}}>
            <div style={{paddingTop:'4vw', paddingBottom:'2vw'}}>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <div style={{ padding:'2% 15%', marginBottom: '3%'}}>
                    <p style={{fontSize:'1.8rem', fontWeight: '600'}}>{"The perfect tool for planning a weekend away with my partner. The tailor-made experience contained everything that matched our interests. We can’t wait for the next Magical Mystery experience!"}</p>
                    <img src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg' style={{width: '8%', height: '8%', borderRadius: '100px', marginTop: '2%', marginBottom:'2%'}}></img>
                    <p style={{marginBottom: '1%', color: "#AC623D"}}>Emily Smith</p>   
                    <p>Mornington Peninsula, VIC</p>
                </div>
                </div>
                <div class="carousel-item">
                <div style={{ padding:'2% 15%', marginBottom: '3%'}}>
                    <p style={{fontSize:'1.8rem', fontWeight: '600'}}>T{"The perfect tool for planning a weekend away with my partner. The tailor-made experience contained everything that matched our interests. We can’t wait for the next Magical Mystery experience!"}</p>
                    <img src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg' style={{width: '8%', height: '8%', borderRadius: '100px', marginTop: '2%', marginBottom:'2%'}}></img>
                    <p style={{marginBottom: '1%', color: "#AC623D"}}>Emily Smith</p>   
                    <p>Mornington Peninsula, VIC</p>    
                </div>
                </div>
                <div class="carousel-item">
                <div style={{ padding:'2% 15%', marginBottom: '3%'}}>
                    <p style={{fontSize:'1.8rem', fontWeight: '600'}}>{"The perfect tool for planning a weekend away with my partner. The tailor-made experience contained everything that matched our interests. We can’t wait for the next Magical Mystery experience!"}</p>
                    <img src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg' style={{width: '8%', height: '8%', borderRadius: '100px', marginTop: '2%', marginBottom:'2%'}}></img>
                    <p style={{marginBottom: '1%', color: "#AC623D"}}>Emily Smith</p>   
                    <p>Mornington Peninsula, VIC</p>    
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        </div>
    )
}