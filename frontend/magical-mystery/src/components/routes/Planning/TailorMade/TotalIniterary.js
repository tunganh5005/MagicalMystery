import Total from "./Total"
import TotalItineraryItem from "./TotalItineraryItem"

const data = [{dateNum: 1, date: '10/9/2022', destination: 'Melbourne CBD & Yarra Valley', price: 109}, {dateNum: 2, date: '11/9/2022', destination: 'Melbourne CBD & Yarra Valley', price: 109}, {dateNum: 3, date: '12/9/2022', destination: 'Melbourne CBD & Yarra Valley', price: 109}]

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
            {data.map(item => {
                return (
                    <>
                        <hr/>
                        <TotalItineraryItem dateNum={item.dateNum} date={item.date} name={item.destination} price={item.price}/>
                    </>
                )
            })}
            <hr/>
            <Total startDate={data[0].date} endDate={data[data.length-1].date} selected='3x Regions Selected' totalPrice='380' price='165'/>

            
        </div>

    )
}