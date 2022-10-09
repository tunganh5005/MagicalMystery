import Card from "../../../../utils/Card"

import Video from '../../../../../res/packageVideo.png'

import im1 from '../../../../../res/packageImg1.png'

import im2 from '../../../../../res/packageImg2.png'

import friendsBG from '../../../../../res/friendsBG.png'


import WhiteButton from "../../../../utils/WhiteButton"
import StartPlanningBtn from "../../../../utils/StartPlanningBtn"

import { useState } from 'react'

const images = [im1, im2, im1, im2, im1, im2, im1, im2, im1, im2]

const accommodation_types = ['Apartment', 'BnB', 'Cabin', 'Caravan Park', 'Conferences', 'Cottage', 'Estate', 'Family Orientated (kids under 18)', 'Glamping', 'Hotel', 'Hut', 'House', 'Lodge', 'Motel', 'Resort', 'Retreat', 'Studio', 'Tiny House', 'Townhouse', 'Winery', 'Other (Please Specify)']

const  dinning_types = ['Bakery', 'Bar', 'Bistro', 'Bottomless Brunch', 'Brewery', 'Buffet', 'Cafe', 'Casual Dine', 'Cultural Cuisine', 'Degustation', 'Distillery', 'Fast Food', 'Fine Dine', 'Food Truck/Street Food', 'High Tea', 'Personal Chef', 'Picnic', 'Pub', 'Set Menu', 'Snacks', 'Tapas', 'Vegetarian/Vegan', 'Wine Tasting', 'Winery', 'Other (Please Specify)']

const activity_types = ['Adrenaline Seeking', 'Animals', 'Arts, Culture & History', 'Attractions', 'Conferences', 'Cruises', 'Dog Friendly', 'Drives', 'Educational Experience', 'Entertainment', 'Farngate - Fruit Picking', 'Gardens & Nurseries', 'Home Experiences', "Local Council What’s On", 'Markets & Boutiques', 'Nature & Adventure', 'Snacks', 'Sports', 'Theatre, Musicals, Comedy & Shows', 'Tipples & Alcohol', 'Tours & Rides - Bus Tour, Helicopter, Plane', 'Walks, Hikes & Bike Trails', 'Wellbeing & Spa', 'Wineries', 'Other (Please Specify)']





export default (props) => {

    const [confirmModalShow, setConfirmModalShow] = useState(false)

    const [ accommodationFilter, setAccommodationFilter ] = useState([])
    const [ dinningFilter, setDinningFilter ] = useState([])
    const [ activityFilter, setActivityFilter ] = useState([])



    function openConfirmModalHandler(){
        setConfirmModalShow(true)
    }


    function selectAvoidAccommodation(e){
        let value = e.target.value
        if(accommodationFilter.includes(value)){
            setAccommodationFilter(prev => prev.filter(item => item != value))
        }else{
            setAccommodationFilter(prev => [...prev, value])
        }
    }

    function selectAvoidRestaurants(e){
        let value = e.target.value
        if(dinningFilter.includes(value)){
            setDinningFilter(prev => prev.filter(item => item != value))
        }else{
            setDinningFilter(prev => [...prev, value])
        }
    }

    function selectAvoidActivities(e){
        let value = e.target.value
        if(activityFilter.includes(value)){
            setActivityFilter(prev => prev.filter(item => item != value))
        }else{
            setActivityFilter(prev => [...prev, value])
        }
    }
    


    return (

        <>
            <div>
                <div className="tab-content" id="pills-tabContent" style={{backgroundColor:'white', paddingLeft:'10%', paddingRight:'10%' , paddingBottom:'0%', paddingTop:'3%', borderRadius:'7px', position: 'relative', marginTop: '4vw', color: 'black'}}>
                    <div style={{padding: '1vw 5vw', fontSize:'0.9vw', textAlign:'left'}}>
                        <p style={{fontSize: '1.2vw'}}>Specify Accommodation To Avoid (select all accommodation types you would like to exclude)</p>
                        <div class="row" style={{padding: '0 0.7vw'}}>
                            {accommodation_types.map(item => {
                                return (
                                    <div className='col-4' style={{padding: '0.5vw 0'}}>
                                        <input class="form-check-input" type="checkbox" value={item} onChange={selectAvoidAccommodation} id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault" style={{padding: '0 0.4vw'}}>
                                            {item}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                        <div class="form-floating" style={{marginBottom: '2vw', marginTop: '2vw'}}>
                            <textarea class="form-control" placeholder="If Other, Please Specify..."></textarea>
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent" style={{backgroundColor:'white', paddingLeft:'10%', paddingRight:'10%' , paddingBottom:'0%', paddingTop:'3%', borderRadius:'7px', position: 'relative', marginTop: '4vw', color: 'black'}}>
                    <div style={{padding: '1vw 5vw', fontSize:'0.9vw', textAlign:'left'}}>
                        <p style={{fontSize: '1.2vw'}}>Specify Restaurants To Avoid (select all restaurant types you would like to exclude)</p>
                        <div class="row" style={{padding: '0 0.7vw'}}>
                            {dinning_types.map(item => {
                                return (
                                    <div className='col-4' style={{padding: '0.5vw 0'}}>
                                        <input class="form-check-input" type="checkbox" value={item} onChange={selectAvoidRestaurants} id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault" style={{padding: '0 0.4vw'}}>
                                            {item}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                        <div class="form-floating" style={{marginBottom: '2vw', marginTop: '2vw'}}>
                            <textarea class="form-control" placeholder="If Other, Please Specify..."></textarea>
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent" style={{backgroundColor:'white', paddingLeft:'10%', paddingRight:'10%' , paddingBottom:'5%', paddingTop:'3%', borderRadius:'7px', position: 'relative', marginTop: '4vw', color: 'black'}}>
                    <div style={{padding: '1vw 5vw', fontSize:'0.9vw', textAlign:'left'}}>
                        <p style={{fontSize: '1.2vw'}} >Specify Activities To Avoid (select all activities you would like to exclude)</p>
                        <div class="row" style={{padding: '0 0.7vw'}}>
                            {activity_types.map(item => {
                                return (
                                    <div className='col-4' style={{padding: '0.5vw 0'}}>
                                        <input class="form-check-input" type="checkbox" value={item} onChange={selectAvoidActivities} id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault" style={{padding: '0 0.4vw'}}>
                                            {item}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                        <div class="form-floating" style={{marginBottom: '2vw', marginTop: '2vw'}}>
                            <textarea class="form-control" placeholder="If Other, Please Specify..."></textarea>
                        </div>
                        <div style={{float: 'right', paddingBottom: '2vw'}}>
                            <WhiteButton style={{marginRight: '0.8vw'}} onClick={props.goBack}>Back</WhiteButton>
                            <StartPlanningBtn onClick={openConfirmModalHandler}>Next</StartPlanningBtn>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}