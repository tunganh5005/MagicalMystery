import { Link } from 'react-router-dom'

export default (props) => {
    return(
        <Link onClick={props.onClick} type="button" to={props.to} className="btn btn-sm btn-dark" style={{border:'solid 1px #D1D1D6', color: '#3F3F46', backgroundColor:"white", padding:"12px 22px", fontSize:"1rem", fontWeight: '700', borderRadius: '8px', ...props.style}}>{props.children}</Link>
    )
}