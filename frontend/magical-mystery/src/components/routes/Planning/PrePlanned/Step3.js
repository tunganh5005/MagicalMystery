import Card from "../../../utils/Card"

import Video from '../../../../res/packageVideo.png'

import im1 from '../../../../res/packageImg1.png'

import im2 from '../../../../res/packageImg2.png'

import friendsBG from '../../../../res/friendsBG.png'


import WhiteButton from "../../../utils/WhiteButton"
import StartPlanningBtn from "../../../utils/StartPlanningBtn"

import { useState } from 'react'
import Itinerary from "./itinerary"
import TotalIniterary from "./TotalIniterary"
import ConfirmationAvoidModal from "../../../utils/ConfirmationAvoidModal"
import DetailModal from "../../../utils/DetailModal"
import WarningModal from "../../../utils/WarningModal"

const images = [im1, im2, im1, im2, im1, im2, im1, im2, im1, im2]

const accommodation_types = ['Apartment', 'BnB', 'Cabin', 'Caravan Park', 'Conferences', 'Cottage', 'Estate', 'Family Orientated (kids under 18)', 'Glamping', 'Hotel', 'Hut', 'House', 'Lodge', 'Motel', 'Resort', 'Retreat', 'Studio', 'Tiny House', 'Townhouse', 'Winery', 'Other (Please Specify)']

const  dinning_types = ['Bakery', 'Bar', 'Bistro', 'Bottomless Brunch', 'Brewery', 'Buffet', 'Cafe', 'Casual Dine', 'Cultural Cuisine', 'Degustation', 'Distillery', 'Fast Food', 'Fine Dine', 'Food Truck/Street Food', 'High Tea', 'Personal Chef', 'Picnic', 'Pub', 'Set Menu', 'Snacks', 'Tapas', 'Vegetarian/Vegan', 'Wine Tasting', 'Winery', 'Other (Please Specify)']

const activity_types = ['Adrenaline Seeking', 'Animals', 'Arts, Culture & History', 'Attractions', 'Conferences', 'Cruises', 'Dog Friendly', 'Drives', 'Educational Experience', 'Entertainment', 'Farngate - Fruit Picking', 'Gardens & Nurseries', 'Home Experiences', "Local Council What’s On", 'Markets & Boutiques', 'Nature & Adventure', 'Snacks', 'Sports', 'Theatre, Musicals, Comedy & Shows', 'Tipples & Alcohol', 'Tours & Rides - Bus Tour, Helicopter, Plane', 'Walks, Hikes & Bike Trails', 'Wellbeing & Spa', 'Wineries', 'Other (Please Specify)']

const preferences = ["ANY", "DAY", "OVERNIGHT", "WEEKEND & MIDWEEK"]

const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12}]



export default (props) => {

    const [ selectedID , setSelectedID ] = useState()

    const [ selectedPackage, setSelectedPackage ] = useState()

    const [ substep, setSubstep ] = useState(0)

    const [ warningModalShow, setWarrningModalShow] = useState(false)

    const [ selectedPreference, setSelectedPreference ] = useState('ANY')

    const [ accommodationFilter, setAccommodationFilter ] = useState([])
    const [ dinningFilter, setDinningFilter ] = useState([])
    const [ activityFilter, setActivityFilter ] = useState([])

    const [ detailModalShow, setDetailModalShow ] = useState(false)

    const [confirmModalShow, setConfirmModalShow] = useState(false)

    const [moreInfoPackage, setMoreInfoPackage] = useState({PackageName: '', price: 0, description: ''})

    const [ packages, setPackages ] = useState({packages: []})

    // console.log(packages.packages)


    function closeWarningModalHandler(){
        setWarrningModalShow(false)
    }

    function openWarningModalHandler(){
        setWarrningModalShow(true)
    }

    function selectOption(item){
        setSelectedID(item._id)
        setSelectedPackage(item)
    }
    function unSelect(){
        setSelectedID()
        setSelectedPackage()
    }

    function closeDetailModalHandler(){
        setDetailModalShow(false)
    }

    function openDetailModalHandler(item){
        setMoreInfoPackage(item)
        setDetailModalShow(true)
    }

    function nextSubstep(){
        if (substep == 1 && !selectedPackage){
            openWarningModalHandler()
            return
        }
        setSubstep(prevStep => prevStep + 1)
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setConfirmModalShow(false)
    }

    function prevSubstep(){
        setSubstep(prevStep => prevStep - 1)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function selectPreferenceFilterHandler(type){
        setSelectedPreference(type)
    }
    function openConfirmModalHandler(){
        setConfirmModalShow(true)
    }

    function closeConfirmModalHandler(){
        setConfirmModalShow(false)
    }

    function getPackages(){
        fetch('http://localhost:4000/api/packages/')
        .then(response => response.json())
        .then(data => setPackages(data));
    }

    function confirmAvoidOptionsHandler(){
        nextSubstep()
        getPackages()
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
            
            { substep == 0 && 
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
            </div>}
            
            { substep == 1 && <div className="tab-content" id="pills-tabContent" style={{backgroundColor:'white', paddingLeft:'10%', paddingRight:'10%' , paddingBottom:'5%', paddingTop:'3%', borderRadius:'7px', position: 'relative', marginTop: '4vw', color: 'black'}}>
                <p style={{color: '#AC623D', fontSize: '1.2rem', fontWeight: '600'}}>Pick Your Ideal Date</p>
                <p style={{fontSize: '1rem', color: '#18181B', padding: '0 10%'}}>We’ve created a range of packages that you can choose from. Whether it’s a weekend of outdoors exploration, or a relaxing seaside retreat at the resort, we’ve got something made for everybody.</p>
                <p style={{fontSize: '1.2rem', color: '#18181B', fontWeight: '600', margin: '2vw'}}>Select Your Preference</p>
                <div style={{display: 'flex', backgroundColor: 'white', border: 'solid 1px #ECDBC5', paddingRight: '0.3vw', borderRadius: '7px', fontSize: '0.8vw'}}>
                    {preferences.map(item => {
                        return (
                            <>
                            { selectedPreference == item.toUpperCase() && <button style={{flex: 1, marginLeft: '0.3vw', marginTop: '0.3vw', marginBottom: '0.3vw', backgroundColor:'#AC623D', borderRadius: '5px', border: 0, padding: '0.8vw 0', color: 'white'}}>{item.toUpperCase()}</button>}
                            { selectedPreference != item.toUpperCase() && <button style={{flex: 1, marginLeft: '0.3vw', marginTop: '0.3vw', marginBottom: '0.3vw', backgroundColor:'#ECDBC5', borderRadius: '5px', border: 0, padding: '0.8vw 0'}} onClick={selectPreferenceFilterHandler.bind(this, item.toUpperCase())}>{item.toUpperCase()}</button>}
                            </>
                        )
                    })}
                </div>
                <p style={{fontSize: '1rem', margin: '4vw'}}>Looking for more results? Reduce the number of filters that you have chosen to see more.</p>
                

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {packages.packages.map(item => {
                        return (
                            <div class="col">
                                <Card item={item} selectedMessage='Selected' id={item._id} isSelected={item._id == selectedID} onUnSelect={unSelect} onSelect={selectOption} onMoreInfo={openDetailModalHandler} img={friendsBG} title={item.PackageName} content={item.description.slice(0, 100)+ '...'} detailModalShow={detailModalShow} closeDetailModalHandler={closeDetailModalHandler} selectOption={selectOption} images={images}/>
                            </div>
                        )
                    })}
                </div>

                <button className="btn btn-dark" style={{padding: '0.5vw 5vw', marginTop: '5vw', marginBottom: '2vw', backgroundColor: '#ECDBC5', border: 0}}>LOAD MORE</button>
                <div style={{marginBottom: '2vw'}}>
                <div style={{float: 'right'}}>
                    <WhiteButton style={{marginRight: '0.8vw'}} onClick={prevSubstep}>Back</WhiteButton>
                    <StartPlanningBtn onClick={nextSubstep}>Next</StartPlanningBtn>
                </div>
                </div>

            </div>}

            {substep == 2 && <div className="tab-content" id="pills-tabContent" style={{backgroundColor:'white', paddingLeft:'10%', paddingRight:'10%' , paddingBottom:'5%', paddingTop:'3%', borderRadius:'7px', position: 'relative', marginTop: '4vw', color: 'black'}}>
                <p style={{fontSize: '1.2rem', fontWeight: '600'}}>{ selectedPackage.PackageName }</p>
                <p style={{fontSize: '1rem', padding: '0 2vw'}}>{selectedPackage.description}</p>
                <div style={{display: 'flex', marginTop: '2vw'}}>
                    <div style={{flex: 18}}>
                    <div style={{display: 'flex'}}>
                        {images.slice(0, 4).map(item => {
                            return (
                                <img src={item} style={{flex: 1, paddingRight: '0.6vw', paddingBottom: '0.6vw'}}/>
                            )
                        })}
                    </div>
                    <div style={{display: 'flex'}}>
                        {images.slice(4, 8).map(item => {
                            return (
                                <img src={item} style={{flex: 1, paddingRight: '0.6vw', paddingBottom: '0.6vw'}}/>
                            )
                        })}
                    </div>
                    </div>
                    <div style={{flex: 11, display: 'flex'}}>
                        <img src={Video} style={{flex: 1, paddingBottom: '0.6vw'}}></img>
                    </div>
                </div>
                <p style={{marginTop: '4vw', fontWeight: '500'}}>Review The Itinerary</p>
                <div style={{fontSize: '1.2rem'}}>
                

                {selectedPackage.journey.map((itinerary, index) => {
                    return (
                        <Itinerary dateNum={index+1} itinerary={itinerary} />
                    )
                })}
                <TotalIniterary package={selectedPackage}/>
                </div>
                <div style={{marginBottom: '5vw', marginTop: '2vw'}}>
                <div style={{float: 'right'}}>
                    <WhiteButton style={{marginRight: '0.8vw'}} onClick={prevSubstep}>Back</WhiteButton>
                    <StartPlanningBtn onClick={props.onNext}>Next</StartPlanningBtn>
                </div>
                </div>
            </div>}

            <WarningModal show={warningModalShow} onClose={closeWarningModalHandler}></WarningModal>
            <ConfirmationAvoidModal onClose={closeConfirmModalHandler} show={confirmModalShow} accommodation={accommodationFilter} restaurant={dinningFilter} activity={activityFilter} onNext={confirmAvoidOptionsHandler}/>
            <DetailModal show={detailModalShow} onClose={closeDetailModalHandler} onSelect={selectOption} images={images.slice(0, 5)} package={moreInfoPackage}/>
        </>
    )
}