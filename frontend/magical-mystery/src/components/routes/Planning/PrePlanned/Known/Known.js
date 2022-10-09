
import React from 'react'

import { Route } from 'react-router-dom'
import ExperienceCard from '../../../../utils/ExperienceCard'
import Label from '../../../../utils/Label'

import {useEffect} from 'react'

import UnknownVideo from '../../../../../res/PrePlannedUnknownVideo.png'

import KnownVideo from '../../../../../res/PrePlannedKnownVideo.png'

export default () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <Label smallText='Magical Mystery Planning' largeText='Pre-Planned Known Experiences'/>
            <div style={{display: 'flex', padding: '0 15% 5% 15%'}}>
                <div style={{flex: 1}}>
                    <ExperienceCard title='Full Experience' content='The Full Experience will need to be booked four weeks prior to the date commencing and it will include a package.' img={UnknownVideo} to='/preplanned/known/fullexperience'/>
                </div>
                <div style={{flex: 1}}>
                    <ExperienceCard title='Last Minute Experience' content='Last Minute Experience can be booked with just hours notice but dies not include a Magical Mystery package. ' img={KnownVideo} to='/preplanned/known/lastminute'/>
                </div>
            </div>
        </div>
    )
}