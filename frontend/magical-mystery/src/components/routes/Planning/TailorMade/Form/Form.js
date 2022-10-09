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
            <Label smallText='Magical Mystery Planning' largeText='Tailor-Made Experience'/>
            <div style={{display: 'flex', padding: '0 15% 5% 15%'}}>
                <div style={{flex: 1}}>
                    <ExperienceCard title='Friends & Family Experience Form' content='Fill out our tailor-made form to tailor the experience to suit you and your friends or family’s interests. ' img={KnownVideo} to='/tailormade/call'/>
                </div>
                <div style={{flex: 1}}>
                    <ExperienceCard title='Romantic Date Form' content='Fill out our tailor-made form to tailor the romantic date to suit your and your partners interests.' img={UnknownVideo} to='/tailormade/form/romantic'/>
                </div>
            </div>
        </div>
    )
}
 