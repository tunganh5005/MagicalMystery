

function formatDate(date){
    let d = new Date(date)
    return d.toLocaleDateString("pt-PT")
}

export default (props) => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{flex: 1, textAlign: 'left', paddingLeft: '2vw'}}>
                <p style={{marginBottom: '0.2vw'}}>Day {props.dateNum}: {formatDate(props.itinerary.time)}</p>
            </div>
            <div style={{flex: 1, textAlign:'center'}}>
                <p style={{marginBottom: 0}}>Region:</p>
                <p style={{marginBottom: '0.2vw'}}>{props.itinerary.region}</p>
            </div>
            <div style={{flex: 1, textAlign:'right', paddingRight: '2vw'}}>
                <p style={{marginBottom: '0.2vw'}}>${props.itinerary.totalPrice} Per Head</p>
            </div>
        </div>
    )
}