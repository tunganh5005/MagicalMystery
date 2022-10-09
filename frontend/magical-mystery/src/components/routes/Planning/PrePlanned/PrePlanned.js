import React from 'react'

import { Route } from 'react-router-dom'
import ExperienceCard from '../../../utils/ExperienceCard'
import Label from '../../../utils/Label'

import {useEffect} from 'react'

import UnknownVideo from '../../../../res/PrePlannedUnknownVideo.png'

import KnownVideo from '../../../../res/PrePlannedKnownVideo.png'

export default () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <Label smallText='Magical Mystery Planning' largeText='Pre-Planned Experiences'/>
            <div style={{display: 'flex', padding: '0 15% 5% 15%'}}>
                <div style={{flex: 1}}>
                    <ExperienceCard title='Pre-Planned Known Experience' content='Pre-planned KNown Experiences are readily availble for you to purchase here and now.' img={KnownVideo} to='/preplanned/known'/>
                </div>
                <div style={{flex: 1}}>
                    <ExperienceCard title='Pre-Planed Unknown Experience' content='A Pre-Planned Unknown Experience has been created to keep our customers on a Magical Mystery journey. Enjoy a day of not knowing what is next.' img={UnknownVideo} to='/preplanned/unknown'/>
                </div>
            </div>
        </div>
    )
}
 