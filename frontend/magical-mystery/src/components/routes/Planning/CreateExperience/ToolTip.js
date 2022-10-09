
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const areas = ['Mount Buller', 'Bright', 'Beechworth', 'Ovens', 'Wangaratta']

export default (props) => {
    return (
        <OverlayTrigger
          placement='right'
          overlay={
            <Tooltip id={`tooltip-right`}>
              <div style={{textAlign: 'left', padding:'1vw'}}>
                <p>Destination in {props.region}</p>
                <ul>
                    {areas.map(area => (
                        <li>{area}</li>
                    ))}
                </ul>
              </div>
            </Tooltip>
          }
        >
            {props.children}
        </OverlayTrigger>
    )
}