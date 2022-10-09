
import im1 from '../../../res/im1.png'

import im2 from '../../../res/im7.png'

import im3 from '../../../res/im8.png'

import im4 from '../../../res/im12.png'

import classes from './Content.module.css'


const Content = () => {
    return (
        <div style={{paddingLeft:"10%", paddingRight:"10%", paddingBottom:"5%"}}>
            

            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className={"col " + classes.option}>
                    <div className="card h-100" style={{backgroundColor:"#333333"}}>
                        <img src={im1} class="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title" style={{color:"#AC623D"}}>Customized</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className={"col " + classes.option}>
                    <div className="card h-100" style={{backgroundColor:"#333333"}}>
                        <img src={im2} class="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title" style={{color:"#AC623D"}}>Pre-Planned</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className={"col " + classes.option}>
                    <div className="card h-100" style={{backgroundColor:"#333333"}}>
                        <img src={im3} class="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title" style={{color:"#AC623D"}}>Puzzled</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className={"col " + classes.option}>
                    <div className="card h-100" style={{backgroundColor:"#333333"}}>
                        <img src={im4} class="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title" style={{color:"#AC623D"}}>Tailor-Made</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Content;