import Total from "./Total"
import TotalItineraryItem from "./TotalItineraryItem"

const data = [{dateNum: 1, date: '10/9/2022', destination: 'Melbourne CBD & Yarra Valley', price: 109}, {dateNum: 2, date: '11/9/2022', destination: 'Melbourne CBD & Yarra Valley', price: 109}, {dateNum: 3, date: '12/9/2022', destination: 'Melbourne CBD & Yarra Valley', price: 109}]

function formatDate(date){
    let d = new Date(date)
    return d.toLocaleDateString("pt-PT")
}

export default (props) => {
    return (
        <div>
            <p style={{paddingBottom: '4vw', fontSize: '1.8rem', color:'#AC623D', fontWeight: '500'}}>Total Itinerary</p>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1, textAlign: 'left', paddingLeft: '2vw', color:'#AC623D', fontWeight: '500'}}>
                    <p style={{ marginBottom: '0.2vw'}}>Day</p>
                </div>
                <div style={{flex: 1}}>
                    <p style={{marginLeft: 'auto', marginRight: 'auto', color:'#AC623D', fontWeight: '500', marginBottom: '0.2vw'}}>Planned Region</p>
                </div>
                <div style={{flex: 1, textAlign:'right', paddingRight: '2vw', color:'#AC623D', fontWeight: '500'}}>
                    <p style={{ marginBottom: '0.2vw'}}>Total Price Per Head</p>
                </div>
            </div>
            {props.package.journey.map((itinerary, index) => {
                return (
                    <>
                        <hr/>
                        <TotalItineraryItem dateNum={index+1} itinerary={itinerary}/>
                    </>
                )
            })}
            <hr/>
            <Total startDate={formatDate(props.package.journey[0].time)} endDate={formatDate(props.package.journey[props.package.journey.length-1].time)} selected={`${props.package.region}x Regions Selected`} totalPrice={props.package.price} price={props.package.price}/>

            
        </div>

    )
}