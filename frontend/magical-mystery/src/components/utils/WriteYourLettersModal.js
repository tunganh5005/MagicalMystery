


import Btn from './StartPlanningBtn'

import Modal from './Modal'



export default (props) => {
    function selectAndClose(){
        props.onSelect(props.id)
        props.onClose()
    }
    return (
        <Modal show={props.show} onClose={props.onClose} widthClass="modal-50w">
            <div style={{textAlign:'center', padding:'1vw'}}>
            <h1 style={{ paddingBottom:'1.2vw', color: "#AC623D", fontSize:'1.2vw', fontWeight: '600'}}>Write Your Magical Mystery Letters</h1>
            <p>Included FREE</p> 
            <p style={{paddingBottom: '1vw', fontSize: '0.9rem', fontWeight: '400'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium libero pellentesque enim, velit amet eu et. Scelerisque lacus, amet, at quis. Non et curabitur in turpis sapien. A risus et rutrum dolor in. Amet, sapien ullamcorper vel velit.</p>
            
            <div style={{ margin: '1vw 0'}}>
                <h1 style={{ paddingBottom:'1vw', color: "#AC623D", fontSize:'1.3vw', fontWeight: '500'}}>Letter #1</h1>
                <textarea className="form-control" placeholder="Write something..." id="letter1" style={{height: '5vw'}}></textarea>
            </div>
            <div style={{ margin: '1vw 0'}}>
                
                <h1 style={{ paddingBottom:'1vw', color: "#AC623D", fontSize:'1.3vw', fontWeight: '500'}}>Letter #2</h1>
                <textarea className="form-control" placeholder="Write something..." id="letter2" style={{height: '5vw'}}></textarea>
            </div>
            <div style={{ margin: '1vw 0'}}>
                
                <h1 style={{ paddingBottom:'1vw', color: "#AC623D", fontSize:'1.3vw', fontWeight: '500'}}>Letter #3</h1>
                <textarea className="form-control" placeholder="Write something..." id="letter3" style={{height: '5vw'}}></textarea>
            </div>
            
            

            <Btn style={{border:0, fontSize: "0.8rem", paddingTop: "2%", paddingBottom: "2%", paddingLeft:'5%', paddingRight:'5%', borderRadius: '5px'}} type="button" className="btn btn-primary" onClick={selectAndClose}>SAVE</Btn>
            </div>
        </Modal>
    )
}