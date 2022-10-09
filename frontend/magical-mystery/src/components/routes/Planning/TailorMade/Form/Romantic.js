
import { useEffect , useState } from 'react'
import Label from '../../../../utils/Label'

// import classes from './Plan.module.css'
import Step1 from './Step1'
import Step2 from './Step2'
// import Step3 from '../../Step3'
// import Step4 from '../../Step6'


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
        <div style={{paddingTop: '3vw', paddingRight: '10%', paddingLeft: '10%', paddingBottom:'3vw'}}>
            <Label smallText='Magical Mystery Planning' largeText='Tailor-Made Experience' style={{paddingBottom: '1vw'}}/>
            <p style={{width: '60%', margin: "0 auto", fontWeight: '600', color: '#70707B'}}>This type of planning will require a $100 deposit for our team to create your experience.</p>
            <p style={{color: '#70707B', width: '40%', margin: '1vw auto'}}>To get started on planning a tailor-made date, please fill out some information on the form below and our team will tailor your date to your loved ones interests.</p>
            
            {currentStep==1 && <Step1 goBack={goBack} selectedRegions={regionSelected} onAddRegion={addRegionHandler} onDeleteRegion={deleteRegionHandler} onNext={nextStep}/>}
           
            {currentStep==2 && <Step2 goBack={goBack} onNext={nextStep}/>}


        </div>
    )
}