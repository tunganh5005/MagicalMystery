


function getTimeStr(time){
    let split_parts = String(time).split(".")
    let hour = parseInt(split_parts[0])
    let minute = parseFloat(time)-parseFloat(hour)
    minute = parseInt(60.0*minute)
    if (hour<12){
        return `${hour}:${minute.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          })}am`
    }else if (hour==12){
        return `${hour}:${minute.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          })}pm`
    }else{
        return `${hour-12}:${minute.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          })}pm`
    }
}


export default (props) => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{flex: 1, textAlign: 'left', paddingLeft: '2vw'}}>
                <p style={{marginBottom: '0.2vw'}}>{props.date}</p>
                <p style={{marginBottom: 0}}>{getTimeStr(props.activity.StartTime)} - {getTimeStr(props.activity.EndTime)}</p>
            </div>
            <div style={{flex: 1, textAlign:'center'}}>
                <p style={{marginBottom: 0}}>{props.activity.activityType}</p>
                <p style={{marginBottom: '0.2vw'}}>{props.activity.activityDescription}</p>
            </div>
            <div style={{flex: 1, textAlign:'right', paddingRight: '2vw'}}>
                <p style={{marginBottom: '0.2vw'}}>${props.activity.price} Per Head</p>
            </div>
        </div>
    )
}