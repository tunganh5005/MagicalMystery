import friendsBG from '../../../../res/friendsBG.png'

import Card from "../../../utils/Card"

import { useState } from 'react'
import WhiteButton from '../../../utils/WhiteButton'
import StartPlanningBtn from '../../../utils/StartPlanningBtn'
import NoneCard from '../../../utils/NoneCard'

const upgrades = ['Gift Packs & Build Ups', 'Bath & Massage', 'Candles & Essential Oils', 'Alcohol & Beverage Supply', 'Games & Memorabilia', "Men’s Aisle", 'Ladies Aisle', 'Foodies Treat']

export default (props) => {


    const [ selected , setSelected ] = useState([])


    function selectOption(id){
        setSelected(id)
    }
    function unSelect(){
        setSelected()
    }

    return (


        <div className="tab-content" id="pills-tabContent" style={{backgroundColor:'white', paddingLeft:'10%', paddingRight:'10%' , paddingBottom:'5%', paddingTop:'3%', borderRadius:'7px', position: 'relative', marginTop: '4vw', color: 'black'}}>
            <p style={{color: '#AC623D', fontSize: '1.2rem', fontWeight: '600'}}>Package Upgrades</p>
            <p style={{fontSize: '1rem', color: '#18181B', padding: '0 10%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget tempor ac lorem nibh id. Vulputate blandit ac eget placerat nunc leo magna. Diam molestie iaculis in vitae. Commodo sodales urna etiam vulputate odio. Accumsan eget pharetra sed vitae.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginTop: '2vw'}}>
                <div class="col">
                    <NoneCard noInfo={true} selectedMessage='Selected' onUnSelect={unSelect} onSelect={selectOption}/>
                </div>
                {upgrades.map(upgrade => {
                    return (
                        <div class="col">
                            <Card noInfo={true} selectedMessage='Selected' onUnSelect={unSelect} onSelect={selectOption} img={friendsBG} title={upgrade} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam molestie purus nisi, nisl laoreet. Aenean sollicitudin eget in a ac mollis. Egestas et non enim.'/>
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
        </div>
    )
}