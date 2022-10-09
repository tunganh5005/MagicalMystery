

import Modal from 'react-bootstrap/Modal';

export default (props) => {
    return (
        <Modal dialogClassName={props.widthClass} show={props.show} onHide={props.onClose} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body>
                <button type="button" class="btn-close" onClick={props.onClose} style={{marginTop:'2%', marginRight:'2%', fill:'#AC623D', float:'right'}}></button>
                <div style={{marginLeft:'10%', marginRight:'10%', marginTop: '3vw', ...props.style}}>{props.children}</div>
            </Modal.Body>
      </Modal>
    )
}