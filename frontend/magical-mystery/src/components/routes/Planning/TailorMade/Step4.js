

import Card from "../../../utils/Card"

import { useState } from 'react'
import WhiteButton from '../../../utils/WhiteButton'
import StartPlanningBtn from '../../../utils/StartPlanningBtn'
import letter from '../../../../res/letter.png'
import beverage from '../../../../res/beverage.png'
import electronic from '../../../../res/electronic.png'
import criteria from '../../../../res/criteria.png'
import flower from '../../../../res/flower.png'
import chocolate from '../../../../res/chocolate.png'
import { faP } from '@fortawesome/free-solid-svg-icons'
import WritingOptionModal from "../../../utils/WritingOptionModal"
import WriteYourLettersModal from "../../../utils/WriteYourLettersModal"

const packages = [{id: 1, title:'3x Magical Mystery Letters', img: letter}, {title: '1x Chocolate', img: chocolate}, {id: 2, title: '1x Beverage Selection', img: beverage}, {id: 3, title: '1x Electronic Schedule', img: electronic}, {id: 4, title: '1x Criteria', img: criteria}, {id: 5, title:'1x Bunch of Flowers', img: flower}]

export default (props) => {

    const [ letterOptionModalShow, setLetterOptionModalShow ] = useState(false)

    const [ writeLetterModalShow, setWriteLetterModalShow ] = useState(false)



    const [ selected , setSelected ] = useState([])


    function openLetterOptionModal(){
        setLetterOptionModalShow(true)
    }

    function closeLetterOptionModal(){
        setLetterOptionModalShow(false)
    }

    function openWriteLetterModal(){
        setLetterOptionModalShow(false)
        setWriteLetterModalShow(true)
    }

    function closeWriteLetterModal(){
        setWriteLetterModalShow(false)
    }

    function selectOption(id){
        setSelected(id)
    }
    function unSelect(){
        setSelected()
    }

    return (


        <div className="tab-content" id="pills-tabContent" style={{backgroundColor:'white', paddingLeft:'10%', paddingRight:'10%' , paddingBottom:'5%', paddingTop:'3%', borderRadius:'7px', position: 'relative', marginTop: '4vw', color: 'black'}}>
            <p style={{color: '#AC623D', fontSize: '1.2rem', fontWeight: '600'}}>Packages Included With This Date</p>
            <p style={{fontSize: '1rem', color: '#18181B', padding: '0 10%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget tempor ac lorem nibh id. Vulputate blandit ac eget placerat nunc leo magna. Diam molestie iaculis in vitae. Commodo sodales urna etiam vulputate odio. Accumsan eget pharetra sed vitae.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginTop: '2vw'}}>
                {packages.map(p => {
                    return (
                        <div class="col">
                            {p.title=='3x Magical Mystery Letters' && <Card noInfo={true} id={p.id} selectedMessage='Selected' onUnSelect={unSelect} onSelect={openLetterOptionModal} img={p.img} title={p.title} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam molestie purus nisi, nisl laoreet. Aenean sollicitudin eget in a ac mollis. Egestas et non enim.'/>}
                            {p.title!='3x Magical Mystery Letters' && <Card noInfo={true} id={p.id} selectedMessage='Selected' onUnSelect={unSelect} onSelect={selectOption} img={p.img} title={p.title} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam molestie purus nisi, nisl laoreet. Aenean sollicitudin eget in a ac mollis. Egestas et non enim.'/>}
                        </div>
                    )
                })}
            </div>
            <div style={{marginBottom: '5vw', marginTop: '2vw'}}>
                <div style={{float: 'right'}}>
                    <WhiteButton style={{marginRight: '0.8vw'}} onClick={props.goBack}>Back</WhiteButton>
                    <StartPlanningBtn onClick={props.onNext}>Next</StartPlanningBtn>
                </div>
            </div>
            <WritingOptionModal show={letterOptionModalShow} onClose={closeLetterOptionModal} onWriteLetter={openWriteLetterModal} onSelect={selectOption}/>
            <WriteYourLettersModal show={writeLetterModalShow} onClose={closeWriteLetterModal} onSelect={selectOption}/>
        </div>

    )
}