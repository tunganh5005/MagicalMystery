

export default (props) => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{flex: 1, textAlign: 'left', paddingLeft: '2vw'}}>
                <p style={{marginBottom: '0.2vw'}}>{props.date}</p>
                <p style={{marginBottom: 0}}>{props.time}</p>
            </div>
            <div style={{flex: 1, textAlign:'center'}}>
                <p style={{marginBottom: 0}}>{props.itemType}</p>
                <p style={{marginBottom: '0.2vw'}}>{props.name}</p>
            </div>
            <div style={{flex: 1, textAlign:'right', paddingRight: '2vw'}}>
                <p style={{marginBottom: '0.2vw'}}>${props.price} Per Head</p>
            </div>
        </div>
    )
}