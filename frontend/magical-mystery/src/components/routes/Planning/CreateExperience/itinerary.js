import ItineraryItem from "./ItineraryItem"
import Total from "./Total"

const data = [1, 2, 3, 4, 5, 6]

function formatDate(date){
    let d = new Date(date)
    return d.toLocaleDateString("pt-PT")
}


export default (props) => {
    return (
        <div style={{margin: '4vw 0'}}>
            <p style={{fontSize: '1.4rem', color:'#AC623D', fontWeight: '500'}}>Day {props.dateNum}: {formatDate(props.itinerary.time)}</p>
            <p style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '2vw'}}>{props.itinerary.region}</p>
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
            {props.itinerary.activities.map(activity => {
                return (
                    <>
                        <hr style={{color: '#AC623D', height: '2px'}}/>
                        <ItineraryItem activity={activity} date={formatDate(props.itinerary.time)}/>
                    </>
                )
            })}
            <hr style={{color: '#AC623D'}}/>
            <Total startDate={props.date} endDate={props.date} selected={props.itinerary.totalActivities} totalPrice={props.itinerary.totalPrice} price='165'/>

            
        </div>

    )
}