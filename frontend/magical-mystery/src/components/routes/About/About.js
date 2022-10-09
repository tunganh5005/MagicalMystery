
import Header from './Header'

import CreateExperience from './CreateExperience'

import Friends from './PrePlanned'

import Puzzled from './Puzzled'
import TailerMade from './TailerMade'
import Review from './Review'
import Preview from './Preview'
import Label from '../../utils/Label'
import ValueProposition from './ValueProposition'

const About = () => {
    return (
        <>
        <Header></Header>
        <ValueProposition/>
        <Label smallText='Start Planning Now' largeText="Our Experiences"/>
        <Friends/>
        <CreateExperience/>
        <Puzzled/>
        <TailerMade/>
        <Review/>
        <Preview/>
        </>
    );
}

export default About;