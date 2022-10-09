
import { useEffect , useState } from 'react'
import Label from '../../../../../utils/Label'

import classes from './Plan.module.css'
import Step1 from '../../Step1'
import Step2 from '../../Step2'
import Step3 from '../../Step3'
import Step4 from '../../Step4'
import Step5 from '../../Step5'
import Step6 from '../../Step6'

const steps = ['Details', 'Destination', 'Select Your Date', 'Packages', 'Upgrades', 'Checkout']

export default () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const [ regionSelected, setRegionSelected ] = useState([])

    const [ currentStep, setCurrentStep ] = useState(1)

    function addRegionHandler(region){
        setRegionSelected(prevState => ([...prevState, region]))
    }

    function deleteRegionHandler(region){
        setRegionSelected(prevState => prevState.filter(r => r!==region))
    }


    function nextStep(event){
        event.preventDefault()
        setCurrentStep(prevState => (prevState+1))
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function goBack(){
        setCurrentStep(prevState => (prevState-1))
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    return (
        <div style={{paddingTop: '3vw', paddingRight: '10%', paddingLeft: '10%'}}>
            
            <Label smallText='Magical Mystery Planning' largeText='Pre-Planned Known Experience' style={{paddingBottom: '2%'}}/>

            <div style={{color: '#AC623D', fontSize: '1.5vw', marginTop: '2%', marginBottom:'6%'}}>
            
            
            <div style={{position:'relative'}}>
                <hr style={{position: 'absolute', width: '70%', zIndex: -10, marginTop:'2vw', borderTop: 'solid 3px #D5BB9F', marginLeft: '15%'}}/>
                <div class="row align-items-start" style={{paddingLeft: '10%', paddingRight: '10%'}}>
                    {steps.map((step, index) => (
                        <div className="col" style={{padding: 0}}>
                            <span className={`${classes.step} ${ currentStep == index+1 ? classes.selected : ''}`}>{index+1}</span>
                            <p style={{fontSize: '1.1vw', marginTop: '4%', color: 'black'}}>{step}</p>
                        </div>
                    ))}
                </div>
            </div>


            {currentStep==1 && <Step1 onSubmit={nextStep} />}

            {currentStep==2 && <Step2 goBack={goBack} selectedRegions={regionSelected} onAddRegion={addRegionHandler} onDeleteRegion={deleteRegionHandler} onNext={nextStep}/>}
        
            {currentStep==3 && <Step3 goBack={goBack} onNext={nextStep}/>}

            {currentStep==4 && <Step4 goBack={goBack} onNext={nextStep}/>}

            {currentStep==5 && <Step5 goBack={goBack} onNext={nextStep}/>}

            {currentStep==6 && <Step6 goBack={goBack} onNext={nextStep}/>}
        </div>
    </div>
    )
}