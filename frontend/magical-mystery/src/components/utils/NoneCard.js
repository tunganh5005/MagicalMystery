import StartPlanningBtn from "./StartPlanningBtn"



export default (props) => {
    
    return (
        <div className="card h-100" style={{borderRadius: '0', borderColor: '#AC623D'}}>
        <svg width="100%" height="100%" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg"  style={{height:'55%', padding:'20%'}}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M82.5283 33.2646C82.9188 32.8741 82.9188 32.2409 82.5283 31.8504L78.1506 27.4727C77.7601 27.0822 77.127 27.0822 76.7364 27.4727L54.4815 49.7277L32.2265 27.4727C31.836 27.0822 31.2028 27.0822 30.8123 27.4727L26.4346 31.8504C26.0441 32.2409 26.0441 32.8741 26.4346 33.2646L48.6896 55.5196L26.4346 77.7745C26.0441 78.165 26.0441 78.7982 26.4346 79.1887L30.8123 83.5664C31.2028 83.9569 31.836 83.9569 32.2265 83.5664L54.4815 61.3114L76.7364 83.5664C77.127 83.9569 77.7601 83.9569 78.1506 83.5664L82.5283 79.1887C82.9188 78.7982 82.9188 78.165 82.5283 77.7745L60.2733 55.5196L82.5283 33.2646Z" fill="#914822"/>
        <mask id="mask0_343_209085" maskUnits="userSpaceOnUse" x="26" y="27" width="57" height="57">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M82.5283 33.2646C82.9188 32.8741 82.9188 32.2409 82.5283 31.8504L78.1506 27.4727C77.7601 27.0822 77.127 27.0822 76.7364 27.4727L54.4815 49.7277L32.2265 27.4727C31.836 27.0822 31.2028 27.0822 30.8123 27.4727L26.4346 31.8504C26.0441 32.2409 26.0441 32.8741 26.4346 33.2646L48.6896 55.5196L26.4346 77.7745C26.0441 78.165 26.0441 78.7982 26.4346 79.1887L30.8123 83.5664C31.2028 83.9569 31.836 83.9569 32.2265 83.5664L54.4815 61.3114L76.7364 83.5664C77.127 83.9569 77.7601 83.9569 78.1506 83.5664L82.5283 79.1887C82.9188 78.7982 82.9188 78.165 82.5283 77.7745L60.2733 55.5196L82.5283 33.2646Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_343_209085)">
        <rect x="5.18896" y="6.22656" width="98.5849" height="98.5849" fill="#914822"/>
        </g>
        <circle cx="55" cy="55" r="53" stroke="#914822" stroke-width="4"/>
        </svg>

        <div class="card-body" style={{textAlign: 'center'}}>
            <h5>No Upgrades</h5>
        </div>
        {!props.isSelected && <button onClick={props.onSelect.bind(this, props.id)} className="btn btn-dark" style={{width: '100%', borderRadius: 0, padding: '0.8vw'}}>Select Options</button>}
        {props.isSelected && <StartPlanningBtn onClick={props.onUnSelect} className="btn btn-dark" style={{width: '100%', borderRadius: 0, padding: '0.8vw'}}>{props.selectedMessage}</StartPlanningBtn>}
        </div>
    )
}