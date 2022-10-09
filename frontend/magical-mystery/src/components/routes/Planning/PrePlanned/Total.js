

function formatDate(date){
    let d = new Date(date)
    return d.toLocaleDateString("pt-PT")
}

export default (props) => {
    return (
        <div style={{display: 'flex', color: '#AC623D', fontWeight: '500'}}>
            <div style={{flex: 1, textAlign: 'left', paddingLeft: '2vw'}}>
                <p style={{marginBottom: 0}}>{props.startDate}</p>
                <p>to {props.endDate}</p>
            </div>
            <div style={{flex: 1, textAlign:'center'}}>
                <p style={{}}>{props.selected}</p>
            </div>
            <div style={{flex: 1, textAlign:'right', paddingRight: '2vw'}}>
                <p style={{marginBottom: 0}}>Total Price: ${props.totalPrice}</p>
                <p style={{fontWeight: '300'}}>Price Per Head: ${props.price}</p>
            </div>
        </div>
    )
}