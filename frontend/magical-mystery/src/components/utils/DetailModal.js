


import Btn from './StartPlanningBtn'

import Modal from './Modal'



export default (props) => {
    function selectAndClose(){
        props.onSelect(props.package)
        props.onClose()
    }
    return (
        <Modal show={props.show} onClose={props.onClose} widthClass="modal-50w">
            <div style={{textAlign:'center', padding:'1vw'}}>
            <h1 style={{ paddingBottom:'1.5vw', color: "#AC623D", fontSize:'1.5vw', fontWeight: '600'}}>{props.package.PackageName} - ${props.package.price}</h1>
            <p style={{paddingBottom: '1vw', fontSize: '0.9rem'}}>{props.package.description}</p>
            <img src={props.images[0]}  style={{width: '16vw', height: '12vw', marginBottom:'1vw', marginLeft:'auto', marginRight:'auto', border: 'solid 2px #AC623D'}}/>
            <div class="row row-cols-1 row-cols-md-5" style={{ marginBottom:'1vw'}}>
                {props.images.map(im => (
                    <div class="col" style={{padding:'1.5%'}}>
                        <img src={im} style={{width: '100%', height: '5vw', objectFit: 'cover', border: 'solid 1px #AC623D'}}/>
                    </div>
                ))}
            </div>
            <Btn style={{border:0, fontSize: "0.8rem", paddingTop: "2%", paddingBottom: "2%", paddingLeft:'5%', paddingRight:'5%', borderRadius: '5px'}} type="button" className="btn btn-primary" onClick={selectAndClose}>SELECT THIS PACKAGE</Btn>
            </div>
        </Modal>
    )
}