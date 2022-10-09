

export default (props) => {
    return (
        <div style={{padding: '5%', ...props.style}}>
            <p style={{color: '#AC623D', fontWeight: '500', fontSize: '1.1rem', marginBottom: '1vw'}}>{props.smallText}</p>
            <p style={{fontSize: '2.5rem', fontWeight: '600' , color: '#18181B'}}>{props.largeText}</p>
        </div>
    )
}