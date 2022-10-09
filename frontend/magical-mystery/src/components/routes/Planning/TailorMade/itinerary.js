import ItineraryItem from "./ItineraryItem"
import Total from "./Total"

const data = [1, 2, 3, 4, 5, 6]

export default (props) => {
    return (
        <div style={{margin: '4vw 0'}}>
            <p style={{fontSize: '1.4rem', color:'#AC623D', fontWeight: '500'}}>Day {props.dateNum}: {props.date}</p>
            <p style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '2vw'}}>{props.destination}</p>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1, textAlign: 'left', paddingLeft: '2vw', color:'#AC623D', fontWeight: '500'}}>
                    <p style={{ marginBottom: '0.2vw'}}>Date / Time</p>
                </div>
                <div style={{flex: 1}}>
                    <p style={{marginLeft: 'auto', marginRight: 'auto', color:'#AC623D', fontWeight: '500', marginBottom: '0.2vw'}}>Planned Item</p>
                </div>
                <div style={{flex: 1, textAlign:'right', paddingRight: '2vw', color:'#AC623D', fontWeight: '500'}}>
                    <p style={{ marginBottom: '0.2vw'}}>Price Per Head</p>
                </div>
            </div>
            {data.map(item => {
                return (
                    <>
                        <hr style={{color: '#AC623D', height: '2px'}}/>
                        <ItineraryItem date={props.date} time='9:00am - 10:00am' itemType='Activity' name='Activity Name' price='56.8'/>
                    </>
                )
            })}
            <hr style={{color: '#AC623D'}}/>
            <Total startDate={props.date} endDate={props.date} selected='3x Activity Selected' totalPrice='380' price='165'/>

            
        </div>

    )
}