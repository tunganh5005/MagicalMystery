
import React from 'react'

import { Route } from 'react-router-dom'
import ExperienceCard from '../../../../utils/ExperienceCard'
import Label from '../../../../utils/Label'

import {useEffect, useState} from 'react'

import UnknownVideo from '../../../../../res/PrePlannedUnknownVideo.png'

import KnownVideo from '../../../../../res/PrePlannedKnownVideo.png'
import StartPlanningBtn from '../../../../utils/StartPlanningBtn'


import im7 from '../../../../../res/im7.png'

import im8 from '../../../../../res/im8.png'

import im12 from '../../../../../res/im12.png'
import WhiteButton from '../../../../utils/WhiteButton'

import ToolTip from '../ToolTip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default (props) => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <div style={{backgroundColor: 'white', padding: '2vw', margin: '4vw 0', borderRadius: '8px', textAlign: 'left'}}>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flex: 2}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Your Name</p>
                    </div>
                    <div style={{flex: 6, display: 'flex'}}>
                        <div style={{flex: 1, marginRight: '1.5vw'}}>
                            <input className='form-control' type="text" placeholder='First Name' style={{}}/>
                        </div>
                        <div style={{flex: 1}}>
                            <input className='form-control' type="text" placeholder='Last Name'/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flex: 2}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Your Partner's Name</p>
                    </div>
                    <div style={{flex: 6, display: 'flex'}}>
                        <div style={{flex: 1, marginRight: '1.5vw'}}>
                            <input className='form-control' type="text" placeholder='First Name' style={{}}/>
                        </div>
                        <div style={{flex: 1}}>
                            <input className='form-control' type="text" placeholder='Last Name'/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flex: 2}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Email Address</p>
                    </div>
                    <div style={{flex: 6}}>
                        <input className='form-control' type="text" placeholder='email@company.com' style={{}}/>
                    </div>
                </div>
                <hr/>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flex: 2}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Phone Number</p>
                    </div>
                    <div style={{flex: 6}}>
                        <input className='form-control' type="text" placeholder='0412 345 678' style={{}}/>
                    </div>
                </div>
                <hr/>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flex: 2}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Your Partner's Name</p>
                    </div>
                    <div style={{flex: 6, display: 'flex'}}>
                        <div style={{flex: 1, marginRight: '1.5vw'}}>
                            <input className='form-control' type="text" placeholder='Date' style={{}}/>
                        </div>
                        <div style={{flex: 1, marginRight: '1.5vw'}}>
                            <input className='form-control' type="text" placeholder='Month' style={{}}/>
                        </div>
                        <div style={{flex: 1}}>
                            <input className='form-control' type="text" placeholder='Year'/>
                    </div>
                    </div>
                </div>
                <hr/>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flex: 2}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Billing Address</p>
                    </div>
                    <div style={{flex: 6}}>
                        <input className='form-control' type="text" placeholder='Start typing for suggestions...' style={{}}/>
                        <p style={{margin: "0.4% 0", color: '#70707B', fontSize: '0.8rem'}}>If you can’t find your address, click here to manually enter.</p>
                    </div>
                </div>
                <hr/>
                <div style={{display: 'flex'}}>
                    <div style={{flex:1}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>When Do You Want To Go?</p>
                    </div>
                    <div style={{flex:3, display: 'flex'}}>
                        <input className='form-control' type='text' placeholder='Start Date' style={{marginRight: '1vw'}}/>
                        <p style={{paddingTop: '0.8vw', fontSize: '1rem', lineHeight: '100%'}}>to</p>
                        <input className='form-control' type='text' placeholder='End Date' style={{marginLeft: '1vw'}}/>
                    </div>
                </div>
                <hr/>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flex: 2}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Select Your Destinationr</p>
                    </div>
                    <div style={{flex: 6, display: 'flex'}}>
                        <div style={{flex: 5}}>
                            <input className='form-control' type="text" placeholder='Destination' style={{}}/>
                        </div>
                        <div style={{flex: 4}}>
                        <svg width="100%" height="100%" viewBox="0 0 607 366" xmlns="http://www.w3.org/2000/svg" style={{padding: '2% 5% 5% 5%'}}>
                                { props.selectedRegions.includes('Mallee') && <ToolTip region="Mallee"><path onClick={props.onDeleteRegion.bind(this, 'Mallee')} type="button" className="region selected" d="M35 133.5L31.5 132.5H26.5H19.5M35 133.5L19.5 132.5M35 133.5H41.25M68 135.5L61 134.5H51.5L47.5 133.5H41.25M68 135.5L41.25 133.5M68 135.5H73H78L83.5 136.5H91L96 137.5H102.5L107.5 138.5H111.5L114.5 139.5H119.5L122.5 140.5L125 141H127.5L129.5 142.5L132 143L135 144L139 145H143H146.5L150 144H153H156.5H160H163.5L166.5 145L170 146L174.5 148L178.5 149.5L183.5 151.5L189.5 154.5L196 157.5L202 160.5L208 163.5L214 166.5L220 169.5L227 173.5L233.5 177L239.5 180L245 183L251.5 185.5L258.5 188L263 191.5L265.5 194L267 198.5V201.5V207.5L266.5 211.5V215.5L265.5 218.5L265 223L267.5 224L273.5 224.5L278 225.5H282.5H284L284.5 222.5L286.5 219.5L288 216.5L289.5 214.5L292 211.5L294.5 209L296.5 207L299.5 205L303.5 203L308 201L312.5 199L317.5 197L322.5 196L328.5 195L333.5 193.5L340 191L346 188.5L351.5 186.5L355.5 184.5L360 182L364.5 179.5L368.5 177L371 175L374 172L376 168.5V165L373 162L370 159L368 156.5L366.5 153V147.5L364.5 146L361 145.5H357.5L354.5 146.5L351 145.5L346 145L342 144L337 141.5L333.5 140.5L330 141.5H326.5L323 140L319.5 138L316 135.5L313 133L310 131L307 130.5L304 132L300.5 133.5L297.5 134.5H294.5L290 133L285 132L280.5 132.5L275.5 133L273 135L272 137.5L271 139.5L270 141.5L270.5 144L271 146.5L272 148.5L271 150L269 148.5H265.5L263 150.5L260.5 152L258 153L254.5 150.5L252.5 149L249.5 148.5L248 148L244 145L241 142L236 138L234 135L232.5 132L230.5 128.5L226.5 125L222.5 123.5L219 120.5L215 117L212 114L208.5 112L206 111.5L203 108.5L199 107L196 106L194 104L191 102L187.5 101H183.5L181.5 100L179.5 98L178 96V94.5L179 92.5L178.5 90.5L176 89L173.5 88L170 87L167.5 86L165 84.5L164 82.5L162.5 80V77.5L161.5 75.5V69.5L161 66.5L162.5 64.5L163 62.5L162.5 60L161.5 58H158.5L157.5 57L156 55L153 53.5L150 52L145.5 51H143L140.5 50.5L139.5 49H138L137.5 50.5L136 50L135 48.5H133.5L132.5 49L131 49.5L129.5 48L129 46.5L128 45L126.5 44.5L126 43.5L123.5 42.5L122 43.5L119.766 45V48.5L118.5 49.5L119 51.5L117.5 54H116L114.5 56L113.5 58L111 57L109 56.5L107 55L106 53L104.5 49.5L102.5 46.5L102 44L100.5 42.5L98.5 41L97 39L96.5 37V34.5V32.5V31L97.5 30V28.5V27L97 25L94 25.5H92.5L91 23.5L89.5 21.5L88.5 19.5V18L87 16L85 15L83 13.5L81 13H79L78 14.5L76.5 12L74.5 10H72.5H70.5H68L67 11L65.5 11.5L63.5 12L61.5 11.5H59L57 10.5L55.5 9.5L53.5 8.5L52 9L49.5 11L47.5 13L44.5 14.5L43.5 16L41 17.5L38.5 16L37 14.5H35L33.5 13L31 11.5L28 12H26.5L24.5 10.5L23.5 9.5L22.5 8L20.5 7.5H18.5L17 8L15 7.5L14 6H12L11 8L9 7L7 6.5L6 5H4.5L4 3L3 2L1.5 1.5V131.5H7L12.5 132.5H19.5" stroke="black"/></ToolTip>}
                                { !props.selectedRegions.includes('Mallee') && <ToolTip region="Mallee"><path onClick={props.onAddRegion.bind(this, 'Mallee')} type="button" data-bs-toggle="modal" data-bs-target="#Mallee-plan" className="region" d="M35 133.5L31.5 132.5H26.5H19.5M35 133.5L19.5 132.5M35 133.5H41.25M68 135.5L61 134.5H51.5L47.5 133.5H41.25M68 135.5L41.25 133.5M68 135.5H73H78L83.5 136.5H91L96 137.5H102.5L107.5 138.5H111.5L114.5 139.5H119.5L122.5 140.5L125 141H127.5L129.5 142.5L132 143L135 144L139 145H143H146.5L150 144H153H156.5H160H163.5L166.5 145L170 146L174.5 148L178.5 149.5L183.5 151.5L189.5 154.5L196 157.5L202 160.5L208 163.5L214 166.5L220 169.5L227 173.5L233.5 177L239.5 180L245 183L251.5 185.5L258.5 188L263 191.5L265.5 194L267 198.5V201.5V207.5L266.5 211.5V215.5L265.5 218.5L265 223L267.5 224L273.5 224.5L278 225.5H282.5H284L284.5 222.5L286.5 219.5L288 216.5L289.5 214.5L292 211.5L294.5 209L296.5 207L299.5 205L303.5 203L308 201L312.5 199L317.5 197L322.5 196L328.5 195L333.5 193.5L340 191L346 188.5L351.5 186.5L355.5 184.5L360 182L364.5 179.5L368.5 177L371 175L374 172L376 168.5V165L373 162L370 159L368 156.5L366.5 153V147.5L364.5 146L361 145.5H357.5L354.5 146.5L351 145.5L346 145L342 144L337 141.5L333.5 140.5L330 141.5H326.5L323 140L319.5 138L316 135.5L313 133L310 131L307 130.5L304 132L300.5 133.5L297.5 134.5H294.5L290 133L285 132L280.5 132.5L275.5 133L273 135L272 137.5L271 139.5L270 141.5L270.5 144L271 146.5L272 148.5L271 150L269 148.5H265.5L263 150.5L260.5 152L258 153L254.5 150.5L252.5 149L249.5 148.5L248 148L244 145L241 142L236 138L234 135L232.5 132L230.5 128.5L226.5 125L222.5 123.5L219 120.5L215 117L212 114L208.5 112L206 111.5L203 108.5L199 107L196 106L194 104L191 102L187.5 101H183.5L181.5 100L179.5 98L178 96V94.5L179 92.5L178.5 90.5L176 89L173.5 88L170 87L167.5 86L165 84.5L164 82.5L162.5 80V77.5L161.5 75.5V69.5L161 66.5L162.5 64.5L163 62.5L162.5 60L161.5 58H158.5L157.5 57L156 55L153 53.5L150 52L145.5 51H143L140.5 50.5L139.5 49H138L137.5 50.5L136 50L135 48.5H133.5L132.5 49L131 49.5L129.5 48L129 46.5L128 45L126.5 44.5L126 43.5L123.5 42.5L122 43.5L119.766 45V48.5L118.5 49.5L119 51.5L117.5 54H116L114.5 56L113.5 58L111 57L109 56.5L107 55L106 53L104.5 49.5L102.5 46.5L102 44L100.5 42.5L98.5 41L97 39L96.5 37V34.5V32.5V31L97.5 30V28.5V27L97 25L94 25.5H92.5L91 23.5L89.5 21.5L88.5 19.5V18L87 16L85 15L83 13.5L81 13H79L78 14.5L76.5 12L74.5 10H72.5H70.5H68L67 11L65.5 11.5L63.5 12L61.5 11.5H59L57 10.5L55.5 9.5L53.5 8.5L52 9L49.5 11L47.5 13L44.5 14.5L43.5 16L41 17.5L38.5 16L37 14.5H35L33.5 13L31 11.5L28 12H26.5L24.5 10.5L23.5 9.5L22.5 8L20.5 7.5H18.5L17 8L15 7.5L14 6H12L11 8L9 7L7 6.5L6 5H4.5L4 3L3 2L1.5 1.5V131.5H7L12.5 132.5H19.5" stroke="black"/></ToolTip>}
                                <foreignObject className="location-label" x="90" y="90" width="80" height="20" style={{fontSize: '0.75vw', pointerEvents: 'none'}}><span><FontAwesomeIcon icon={faLocationDot} /></span></foreignObject>
                                { props.selectedRegions.includes('Wimmera') && <ToolTip region="Wimmera"><path onClick={props.onDeleteRegion.bind(this, 'Wimmera')} type="button" data-bs-toggle="modal" data-bs-target="#Wimmera-plan" className="region selected" d="M1.5 131.5L2 232.5H6L10.5 233L16.5 233.5L23 234L29 234.5L36.5 235.5L43 236L50.5 237L59 238.5L65 239.5L71.5 241L77.5 242.5L82.5 244.5L88 248.5L92.5 250.5L96.5 252L101 252.5H106L110.5 251.5L115.5 250H118.5L122.5 250.5L128 252L134 254L138.5 256L142.5 257L147 258.5L152.5 260L156.5 261L159 262L164.5 263L168 264L172.5 264.5L176 265.5H180.5L185 266H191L195.5 265.5L200.5 264L204 263L206.5 261L209.5 258L212 255.5L212.5 254L211 250L209.5 247L209 244.5V242.5V239.5V237L209.5 235L211 233L212.5 231.5L214 230L216 229L218.5 227.5H221L221.5 226.5H224L225 225.5H226H229.5L230.5 224.5H233L236 224L238.5 223.5H242L245.5 223L247 222.5H258L259.5 223.5H265L265.5 218.5L266.5 215.5V215V211L267 207.5V198.5L265.5 194L264.5 193L262.5 191L260 189L258.5 188L257.5 187.5L253 186L249 184.5L244 182.5L242.5 181.5L239.5 180L235.5 178L232.5 176.5L229.5 175L226 173L223.5 171.5L221 170L219 169L217 168L211 165L205 162L199 159L193 156L187.5 153.5L182 151L177 149L173 147.5L169.5 146L167.5 145.5L163.5 144H150L146.5 145H145H138.5L135 144L132 143L129.5 142.5L127.5 141H124.5L119.5 139.5H114.5L111.5 138.5H107.5L102.5 137.5H96L91 136.5H83.5L78 135.5H67.5L64.5 135L60.5 134.5H55.5H51L47.5 134L34.5 133.5L31 132.5H12.5L6.5 131.5H1.5Z" stroke="black"/></ToolTip>}
                                { !props.selectedRegions.includes('Wimmera') && <ToolTip region="Wimmera"><path onClick={props.onAddRegion.bind(this, 'Wimmera')} type="button" data-bs-toggle="modal" data-bs-target="#Wimmera-plan" className="region" d="M1.5 131.5L2 232.5H6L10.5 233L16.5 233.5L23 234L29 234.5L36.5 235.5L43 236L50.5 237L59 238.5L65 239.5L71.5 241L77.5 242.5L82.5 244.5L88 248.5L92.5 250.5L96.5 252L101 252.5H106L110.5 251.5L115.5 250H118.5L122.5 250.5L128 252L134 254L138.5 256L142.5 257L147 258.5L152.5 260L156.5 261L159 262L164.5 263L168 264L172.5 264.5L176 265.5H180.5L185 266H191L195.5 265.5L200.5 264L204 263L206.5 261L209.5 258L212 255.5L212.5 254L211 250L209.5 247L209 244.5V242.5V239.5V237L209.5 235L211 233L212.5 231.5L214 230L216 229L218.5 227.5H221L221.5 226.5H224L225 225.5H226H229.5L230.5 224.5H233L236 224L238.5 223.5H242L245.5 223L247 222.5H258L259.5 223.5H265L265.5 218.5L266.5 215.5V215V211L267 207.5V198.5L265.5 194L264.5 193L262.5 191L260 189L258.5 188L257.5 187.5L253 186L249 184.5L244 182.5L242.5 181.5L239.5 180L235.5 178L232.5 176.5L229.5 175L226 173L223.5 171.5L221 170L219 169L217 168L211 165L205 162L199 159L193 156L187.5 153.5L182 151L177 149L173 147.5L169.5 146L167.5 145.5L163.5 144H150L146.5 145H145H138.5L135 144L132 143L129.5 142.5L127.5 141H124.5L119.5 139.5H114.5L111.5 138.5H107.5L102.5 137.5H96L91 136.5H83.5L78 135.5H67.5L64.5 135L60.5 134.5H55.5H51L47.5 134L34.5 133.5L31 132.5H12.5L6.5 131.5H1.5Z" stroke="black"/></ToolTip>}
                                <foreignObject className="location-label" x="92" y="180" width="160" height="160" style={{fontSize: '0.75vw', pointerEvents: 'none'}}><FontAwesomeIcon icon={faLocationDot} /></foreignObject>
                                { props.selectedRegions.includes('South West') && <ToolTip region="South West"><path onClick={props.onDeleteRegion.bind(this, 'South West')} type="button" data-bs-toggle="modal" data-bs-target="#South-West-plan" className="region selected" d="M2 232.5V287.5L4 288.5L7 289.5L10 291.5L14 293.5L17.5 295L21 298L24 299L26.5 301.5L29 303.5L29.5 306L30 308L29 310V312L31 312.5L32 312L34 309.5L36 310L37.5 311.5L40 313.5L41.5 314L43 312.5L44 311.5L47 312L48 311V310L46 309V307.5L45.5 306.5V305.5L47 304L50 303L53 301.5H55H58L63 302L64.5 303L66.5 303.5L68.5 304.5L72 306L75 307.5L80.5 310L83 311L83.5 312L85 312.5L86.5 313L88 311.5L89.5 311L90.5 310.5L92 310L94 308.5H95.5H96.5L99 310L99.5 310.5L101 311.5H102L102.5 310L104.5 309.5L105 310.5L106 311.5L107.5 312.5L109 313.5L115 316.5L118 318.5L123 322L129 325L135 326.5L137 327.5L140.5 328L144.5 329.5L147 330.5L150 333L151.5 335L153.5 337L155 337.5H156.5L159 337H160.5H162L163.5 338L166 338.5L168 339L169.5 340.5L172 342L173.5 344H175H176.5L177 343L178.5 342L180 340.5H181.5L183.5 339L185 336L186.5 335L189.5 334L193 333L196 331.5L199.5 328.5L202 325L204 324.5L206 321.5L207.5 319L210.5 317L214 316L219 313.5L223 311.5L227.5 308.5L230 307.5L233.5 304L235.5 303.5H237L237.5 305L239 305.5H240.5L241 304L243 304.5L245 304L248 304.5L249 304L250 302.5L251 301L253 299.5L254.5 298.5V297V295L253.5 293.5L252 293H250L247.5 294L245 295L243.5 295.5L241.5 297H239L237.5 296L235.5 294.5H232L230.5 293.5L231 293L232 292L234 291.5L236 290H238L239.5 291L241 290.5L244 287.5L242.5 286.5L240 285L236.5 283L233 281L230 278L228 276L225.5 274L223 271L220 268L218 265L216.5 262L214 257L212.5 254L212 255.5L209.5 258L207 260.5L204 263L195.5 265.5L190.5 266H185L181 265.5H176L172.5 264.5L168 264L164.5 263L159 262L156.5 261L154.5 260.5L147 258.5L142.5 257L138.5 256L134 254L128 252L122.5 250.5L118.5 250H115.5L106 252.5H101L96.5 252L88 248.5L82.5 244.5L78 242.5L75 242L71 241L68.5 240.5L64.5 239.5L61 239L55 238L50 237L47 236.5L44 236L35.5 235.5L32.5 235L29 234.5H27L22 234L16 233.5L10.5 233L6 232.5H2Z" stroke="black"/></ToolTip>}
                                { !props.selectedRegions.includes('South West') && <ToolTip region="South West"><path onClick={props.onAddRegion.bind(this, 'South West')} type="button" data-bs-toggle="modal" data-bs-target="#South-West-plan" className="region" d="M2 232.5V287.5L4 288.5L7 289.5L10 291.5L14 293.5L17.5 295L21 298L24 299L26.5 301.5L29 303.5L29.5 306L30 308L29 310V312L31 312.5L32 312L34 309.5L36 310L37.5 311.5L40 313.5L41.5 314L43 312.5L44 311.5L47 312L48 311V310L46 309V307.5L45.5 306.5V305.5L47 304L50 303L53 301.5H55H58L63 302L64.5 303L66.5 303.5L68.5 304.5L72 306L75 307.5L80.5 310L83 311L83.5 312L85 312.5L86.5 313L88 311.5L89.5 311L90.5 310.5L92 310L94 308.5H95.5H96.5L99 310L99.5 310.5L101 311.5H102L102.5 310L104.5 309.5L105 310.5L106 311.5L107.5 312.5L109 313.5L115 316.5L118 318.5L123 322L129 325L135 326.5L137 327.5L140.5 328L144.5 329.5L147 330.5L150 333L151.5 335L153.5 337L155 337.5H156.5L159 337H160.5H162L163.5 338L166 338.5L168 339L169.5 340.5L172 342L173.5 344H175H176.5L177 343L178.5 342L180 340.5H181.5L183.5 339L185 336L186.5 335L189.5 334L193 333L196 331.5L199.5 328.5L202 325L204 324.5L206 321.5L207.5 319L210.5 317L214 316L219 313.5L223 311.5L227.5 308.5L230 307.5L233.5 304L235.5 303.5H237L237.5 305L239 305.5H240.5L241 304L243 304.5L245 304L248 304.5L249 304L250 302.5L251 301L253 299.5L254.5 298.5V297V295L253.5 293.5L252 293H250L247.5 294L245 295L243.5 295.5L241.5 297H239L237.5 296L235.5 294.5H232L230.5 293.5L231 293L232 292L234 291.5L236 290H238L239.5 291L241 290.5L244 287.5L242.5 286.5L240 285L236.5 283L233 281L230 278L228 276L225.5 274L223 271L220 268L218 265L216.5 262L214 257L212.5 254L212 255.5L209.5 258L207 260.5L204 263L195.5 265.5L190.5 266H185L181 265.5H176L172.5 264.5L168 264L164.5 263L159 262L156.5 261L154.5 260.5L147 258.5L142.5 257L138.5 256L134 254L128 252L122.5 250.5L118.5 250H115.5L106 252.5H101L96.5 252L88 248.5L82.5 244.5L78 242.5L75 242L71 241L68.5 240.5L64.5 239.5L61 239L55 238L50 237L47 236.5L44 236L35.5 235.5L32.5 235L29 234.5H27L22 234L16 233.5L10.5 233L6 232.5H2Z" stroke="black"/></ToolTip>}
                                <foreignObject className="location-label" x="98" y="275" width="160" height="160" style={{fontSize: '0.75vw', pointerEvents: 'none'}}><FontAwesomeIcon icon={faLocationDot} /></foreignObject>
                                { props.selectedRegions.includes('Melbourne CBD and Yarra Valley') && <ToolTip region="Melbourne CBD and Yarra Valley"><path onClick={props.onDeleteRegion.bind(this, 'Melbourne CBD and Yarra Valley')} type="button" data-bs-toggle="modal" data-bs-target="#Melbourn-CBD-and-Yarra-Valley-plan" className="region selected" d="M278.289 225.5H284L287 227.5L290 228L295 229.5L300 231L305.5 233.5L310.5 235L315.5 237L320 238.5L325.5 241L330.5 243.5L334 246.5L336.5 250.5V255.5V260.5L336 266.5L334.5 272.5L332.5 278.5L329 285.5L326.5 291.5L324 297L321 301.5H317.5L313 300L307.5 299L304 298L299.5 297L295.5 296L292 295L288.5 294L287 293.5L283.5 293L282 291.5L281 287.5L279.5 285.5L276 284L273.5 280L271.5 275.5L270 274.5H268L266 276.5L262 277L259 280L251.5 284.5L245.5 287L244 287.5L241 285.5L237.5 283.5L233 281L230 278L227.5 275.5L225.5 274L225 273.5L223 271L220 268L218 265L216.5 262L214.5 258L212.5 254L211.5 251.5L210.5 249L209.5 247L209 244.5V237L209.5 235L211 233L211.5 232.5L214 230L215 229.5L218.5 227.5H221L221.5 226.5H224L225 225.5H229.5L230.5 224.5H233L238.5 223.5H242L245.5 223L247 222.5H258L259.5 223.5H264.5L265 223L266.5 223.5L268.5 224L274 224.5L277.5 225.5H278.289Z" stroke="black"/></ToolTip>}
                                { !props.selectedRegions.includes('Melbourne CBD and Yarra Valley') && <ToolTip region="Melbourne CBD and Yarra Valley"><path onClick={props.onAddRegion.bind(this, 'Melbourne CBD and Yarra Valley')} type="button" data-bs-toggle="modal" data-bs-target="#Melbourn-CBD-and-Yarra-Valley-plan" className="region" d="M278.289 225.5H284L287 227.5L290 228L295 229.5L300 231L305.5 233.5L310.5 235L315.5 237L320 238.5L325.5 241L330.5 243.5L334 246.5L336.5 250.5V255.5V260.5L336 266.5L334.5 272.5L332.5 278.5L329 285.5L326.5 291.5L324 297L321 301.5H317.5L313 300L307.5 299L304 298L299.5 297L295.5 296L292 295L288.5 294L287 293.5L283.5 293L282 291.5L281 287.5L279.5 285.5L276 284L273.5 280L271.5 275.5L270 274.5H268L266 276.5L262 277L259 280L251.5 284.5L245.5 287L244 287.5L241 285.5L237.5 283.5L233 281L230 278L227.5 275.5L225.5 274L225 273.5L223 271L220 268L218 265L216.5 262L214.5 258L212.5 254L211.5 251.5L210.5 249L209.5 247L209 244.5V237L209.5 235L211 233L211.5 232.5L214 230L215 229.5L218.5 227.5H221L221.5 226.5H224L225 225.5H229.5L230.5 224.5H233L238.5 223.5H242L245.5 223L247 222.5H258L259.5 223.5H264.5L265 223L266.5 223.5L268.5 224L274 224.5L277.5 225.5H278.289Z" stroke="black"/></ToolTip>}
                                <foreignObject className="location-label" x="265" y="240" width="160" height="160" style={{fontSize: '0.75vw', pointerEvents: 'none', lineHeight: '0.8vw'}}><FontAwesomeIcon icon={faLocationDot} style={{paddingBottom: '0.3vw'}} /></foreignObject>
                                { props.selectedRegions.includes('Mornington Penisuala') && <ToolTip region="Mornington Penisuala"><path onClick={props.onDeleteRegion.bind(this, 'Mornington Penisuala')} type="button" data-bs-toggle="modal" data-bs-target="#Mornington-Penisuala-plan" className="region selected" d="M304.5 312.5L303 313L302 314.5V317L301.5 318.5L300 321H298.5L297 320.5L295.5 319L294 316.5L291.5 315.5L288.5 316L285.5 317L281.5 320L283 321L285 321.5L287 322L288.5 320.5L291.5 320L294 322L296.5 323L300 322L305 322.5L307 319.5L309 317.5L311.5 314.5L313.5 312L316 309L319.5 304L321 301.5H317.5L313 300L307.5 299L305.5 298.5L302 297.5L297 296.5L287 293.5L283.5 293L283 292.5L282 291L281.5 294L280.5 295.5L279.5 297.5L277.5 299.5L276.5 301L273.5 303.5L272.5 305L270 308.5L266 310H263L260.5 309.5L256.846 309L258.5 311.5L261 314.5L264.5 316.5L266.5 318.5L269 319.5L273 318.5L276.5 317.5L279.5 314L282.5 311.5L284.664 312L286.5 312.5H289.5V311L288 309L287 307.5V306.5H288.5L289.5 304L291 301L293 300.5H295L296.5 301L298 300H302.5L305.5 300.5L307 303L308 305.5L309 307.5L310 309L310.5 311L308.5 313L306 313.5L304.5 312.5ZM304.5 312.5L303 310.5M303 310.5H301L300 311.5L298.5 313H296L294.805 312L293 311.5L292 310L292.5 309L293 306.5L294 304.5H294.5L295.5 305.205L297 306.5L299 306L301.5 306.5H303.5L306 308V309L304.5 309.5L303 310.5Z" stroke="black"/></ToolTip>}
                                { !props.selectedRegions.includes('Mornington Penisuala') && <ToolTip region="Mornington Penisuala"><path onClick={props.onAddRegion.bind(this, 'Mornington Penisuala')} type="button" data-bs-toggle="modal" data-bs-target="#Mornington-Penisuala-plan" className="region" d="M304.5 312.5L303 313L302 314.5V317L301.5 318.5L300 321H298.5L297 320.5L295.5 319L294 316.5L291.5 315.5L288.5 316L285.5 317L281.5 320L283 321L285 321.5L287 322L288.5 320.5L291.5 320L294 322L296.5 323L300 322L305 322.5L307 319.5L309 317.5L311.5 314.5L313.5 312L316 309L319.5 304L321 301.5H317.5L313 300L307.5 299L305.5 298.5L302 297.5L297 296.5L287 293.5L283.5 293L283 292.5L282 291L281.5 294L280.5 295.5L279.5 297.5L277.5 299.5L276.5 301L273.5 303.5L272.5 305L270 308.5L266 310H263L260.5 309.5L256.846 309L258.5 311.5L261 314.5L264.5 316.5L266.5 318.5L269 319.5L273 318.5L276.5 317.5L279.5 314L282.5 311.5L284.664 312L286.5 312.5H289.5V311L288 309L287 307.5V306.5H288.5L289.5 304L291 301L293 300.5H295L296.5 301L298 300H302.5L305.5 300.5L307 303L308 305.5L309 307.5L310 309L310.5 311L308.5 313L306 313.5L304.5 312.5ZM304.5 312.5L303 310.5M303 310.5H301L300 311.5L298.5 313H296L294.805 312L293 311.5L292 310L292.5 309L293 306.5L294 304.5H294.5L295.5 305.205L297 306.5L299 306L301.5 306.5H303.5L306 308V309L304.5 309.5L303 310.5Z" stroke="black"/></ToolTip>}
                                <foreignObject x="295" y="295" width="160" height="160" style={{fontSize: '0.75vw', pointerEvents: 'none', lineHeight: '0.8vw'}}><FontAwesomeIcon icon={faLocationDot} style={{paddingBottom: '0.3vw'}} /><br/></foreignObject>
                                { props.selectedRegions.includes('High Country') && <ToolTip region="High Country"><path onClick={props.onDeleteRegion.bind(this, 'High Country')} type="button" data-bs-toggle="modal" data-bs-target="#High-Country-plan" className="region selected" d="M329 285.5L328 288L330 288.5H333.5H337.5L342.5 288L348.5 287L353.5 285.5L358 283.5L364 279.5L368.5 276.5L372.5 271.5L375.5 266.5L378.5 262.5L380 257.5L381 254L384.5 250.5L388 248.5L391 247L397 246.5H403H409H415H424.5L432.5 246L438.5 244.5L448 242.5L456 239.5L461 237L466 234.5L470.5 232L474 229.5L477.5 226.5L481.5 223.5L485 220L488 216.5L491.5 213L493 210.5L495 207L497 204L498 202.5L497 201.5H495L492.5 200L490 199.5L485.5 199L484.5 198V196.5L486 196L487.5 194L488.5 192L490 191V186.5L489 185L488.5 183.5H486V182L485.5 180.5V178L484.5 176L483.5 174.5L482 173L480.5 172L480 170.5L480.5 169V167.5V165L479 164L478.5 161L477.5 159L478.5 158.5L479 156.5V154.5L477.5 153.5L476 152V150.5L474.5 148V146.5L471.5 145L470 143L466.5 142L463.5 141L462 140H460L457 139L455 139.5L451 141L448.5 142.5H445.5L444 141.5L442.5 140L439.5 139.5L437 140L435 141.5L433 143L432.5 145L431.5 148H430.5L429.5 147H428.5H427L424.5 147.5H421.5L420 147L418 146L416.5 146.5L415 148L413.5 150V151.5V154L415.5 156L418 157H420L420.5 158L419 159H416.5L413.5 158L412 156.5L411 154.5V152L410.5 149.5L408.5 150H406.5L404 151L402 150L399 149.5L395.5 148L391 146.5L388 145.5L385 144L381 142.5L376.5 141.5H373.5L369.5 142.5L367.5 145L366.5 147.5V153L368 156.5L370 159L376 165V168.5L374 172L371 175L368.5 177L367 178L362 181L357.5 183.5L351.5 186.5L346 188.5L341 190.5L333.5 193.5L328.5 195L324.5 195.5L317.5 197L313.5 198.5L299.5 205L296.5 207L295 208.5L292 211.5L288 216.5L286.5 219.5L284.5 222.5L284 225.5L287 227.5L290 228L292 228.5L300 231L301 231.5L305.5 233.5L310.5 235L313 236L317 237.5L320 238.5L321 239L326.5 241.5L330.5 243.5L334 246.5L336.5 250.5V260.5V261.5L336 266.5L335.5 268.5L334.5 272.5L334 274L332.5 278.5L331 281.5L329 285.5Z" stroke="black"/></ToolTip>}
                                { !props.selectedRegions.includes('High Country') && <ToolTip region="High Country"><path onClick={props.onAddRegion.bind(this, 'High Country')} type="button" data-bs-toggle="modal" data-bs-target="#High-Country-plan" className="region" d="M329 285.5L328 288L330 288.5H333.5H337.5L342.5 288L348.5 287L353.5 285.5L358 283.5L364 279.5L368.5 276.5L372.5 271.5L375.5 266.5L378.5 262.5L380 257.5L381 254L384.5 250.5L388 248.5L391 247L397 246.5H403H409H415H424.5L432.5 246L438.5 244.5L448 242.5L456 239.5L461 237L466 234.5L470.5 232L474 229.5L477.5 226.5L481.5 223.5L485 220L488 216.5L491.5 213L493 210.5L495 207L497 204L498 202.5L497 201.5H495L492.5 200L490 199.5L485.5 199L484.5 198V196.5L486 196L487.5 194L488.5 192L490 191V186.5L489 185L488.5 183.5H486V182L485.5 180.5V178L484.5 176L483.5 174.5L482 173L480.5 172L480 170.5L480.5 169V167.5V165L479 164L478.5 161L477.5 159L478.5 158.5L479 156.5V154.5L477.5 153.5L476 152V150.5L474.5 148V146.5L471.5 145L470 143L466.5 142L463.5 141L462 140H460L457 139L455 139.5L451 141L448.5 142.5H445.5L444 141.5L442.5 140L439.5 139.5L437 140L435 141.5L433 143L432.5 145L431.5 148H430.5L429.5 147H428.5H427L424.5 147.5H421.5L420 147L418 146L416.5 146.5L415 148L413.5 150V151.5V154L415.5 156L418 157H420L420.5 158L419 159H416.5L413.5 158L412 156.5L411 154.5V152L410.5 149.5L408.5 150H406.5L404 151L402 150L399 149.5L395.5 148L391 146.5L388 145.5L385 144L381 142.5L376.5 141.5H373.5L369.5 142.5L367.5 145L366.5 147.5V153L368 156.5L370 159L376 165V168.5L374 172L371 175L368.5 177L367 178L362 181L357.5 183.5L351.5 186.5L346 188.5L341 190.5L333.5 193.5L328.5 195L324.5 195.5L317.5 197L313.5 198.5L299.5 205L296.5 207L295 208.5L292 211.5L288 216.5L286.5 219.5L284.5 222.5L284 225.5L287 227.5L290 228L292 228.5L300 231L301 231.5L305.5 233.5L310.5 235L313 236L317 237.5L320 238.5L321 239L326.5 241.5L330.5 243.5L334 246.5L336.5 250.5V260.5V261.5L336 266.5L335.5 268.5L334.5 272.5L334 274L332.5 278.5L331 281.5L329 285.5Z" stroke="black"/></ToolTip>}
                                <foreignObject className="location-label" x="355" y="200" width="160" height="160" style={{fontSize: '0.75vw', pointerEvents: 'none'}}><FontAwesomeIcon icon={faLocationDot} /></foreignObject>
                                { props.selectedRegions.includes('Gippsland') && <ToolTip region="Gippsland"><path onClick={props.onDeleteRegion.bind(this, 'Gippsland')} type="button" data-bs-toggle="modal" data-bs-target="#Gippsland-plan" className="region selected" d="M324 297L321 301.5L319.5 304L317.5 307L315 310.5L312.5 313.5L309.5 317L307 319.5L305 322.5L306 324L308 325L310.5 328L312 330L314 332L315.5 332.5L316 331.5L319 330L322.5 328.5H324.5L328 330L330.5 331.5L330.85 333L327.5 332.5L328.5 334.5L331 338.5L333.5 341.5L334.245 345L336 346.5L337 348H339.5L340.5 347L341 345L342.5 343L344.5 341.5H348L351.5 343L354.5 346L358 351L360 355L362.5 357L364.5 358.5L363.5 360.5L362.5 361L365 363L368.5 364.5L370 363L370.5 360.5L372.5 359L371.5 356.5L370 354.5L371.5 351L373.5 346.5L373 344.5L372.5 341L371 339.5L367.5 343L364 345L363 347.5H361L360 345.5L359.5 343.5L358.5 341.5L356 339.5L354.5 337.5L355 335L358.5 333L362.5 332.5L365.5 334L366.5 335L368.5 336L370 335L373 333.5H377.5L381 333L383.5 331.5H387.5L390.5 330.5L392 329.5L396.5 329L398 330.5L400 329L403 326L409.5 320.5L417 314L425.5 307L431 302L442 293.5L449 289L457 284L463.5 280L471 277L478.5 274L486.5 273L490.5 272L495.5 271L502 270.5H507L514.5 269.5H520L525.5 269H536.5H541.5H546L549 268H554H557.5L560 268.5L561 270L562.5 270.5L564 269.5L566 268H576L577.5 266.5L579 266L582.5 264.5L586.5 262.5L590 260L592.5 257L594.5 256V255L595 254L594 252.5L592.5 251L592 250.5L593 249.5L594.5 250L596 249.5L596.5 250L598 251.5H599.5H601.5L604 251L606 250.5V249.5L605 248.5L602 246L597.5 244.5L590.5 242L585 239.5L576 235.5L570.5 233.5L564 230.5L557 228L552 225.5L545 222.5L537.5 219.5L532.5 217.5L526.5 215L522 213L518 211L514 209L510 207.5L507 206L503 205L500 204L498 202.5L497 204L495 207L493.5 209.5L491.5 213L490 214.5L488 216.5L486 219L482 223L480 224.5L477.5 226.5L474.5 229L472 231L469.5 232.5L462 236.5L456 239.5L453 240.5L448 242.5L445.5 243L438 244.5L432.5 246L425 246.5H397L391 247L384.5 250.5L381 254L378.5 262.5L375.5 266.5L372.5 271.5L368.5 276.5L358 283.5L353.5 285.5L348.5 287L342.5 288L337.5 288.5H330L328 288L324 297Z" stroke="black"/></ToolTip>}
                                { !props.selectedRegions.includes('Gippsland') && <ToolTip region="Gippsland"><path onClick={props.onAddRegion.bind(this, 'Gippsland')} type="button" data-bs-toggle="modal" data-bs-target="#Gippsland-plan" className="region" d="M324 297L321 301.5L319.5 304L317.5 307L315 310.5L312.5 313.5L309.5 317L307 319.5L305 322.5L306 324L308 325L310.5 328L312 330L314 332L315.5 332.5L316 331.5L319 330L322.5 328.5H324.5L328 330L330.5 331.5L330.85 333L327.5 332.5L328.5 334.5L331 338.5L333.5 341.5L334.245 345L336 346.5L337 348H339.5L340.5 347L341 345L342.5 343L344.5 341.5H348L351.5 343L354.5 346L358 351L360 355L362.5 357L364.5 358.5L363.5 360.5L362.5 361L365 363L368.5 364.5L370 363L370.5 360.5L372.5 359L371.5 356.5L370 354.5L371.5 351L373.5 346.5L373 344.5L372.5 341L371 339.5L367.5 343L364 345L363 347.5H361L360 345.5L359.5 343.5L358.5 341.5L356 339.5L354.5 337.5L355 335L358.5 333L362.5 332.5L365.5 334L366.5 335L368.5 336L370 335L373 333.5H377.5L381 333L383.5 331.5H387.5L390.5 330.5L392 329.5L396.5 329L398 330.5L400 329L403 326L409.5 320.5L417 314L425.5 307L431 302L442 293.5L449 289L457 284L463.5 280L471 277L478.5 274L486.5 273L490.5 272L495.5 271L502 270.5H507L514.5 269.5H520L525.5 269H536.5H541.5H546L549 268H554H557.5L560 268.5L561 270L562.5 270.5L564 269.5L566 268H576L577.5 266.5L579 266L582.5 264.5L586.5 262.5L590 260L592.5 257L594.5 256V255L595 254L594 252.5L592.5 251L592 250.5L593 249.5L594.5 250L596 249.5L596.5 250L598 251.5H599.5H601.5L604 251L606 250.5V249.5L605 248.5L602 246L597.5 244.5L590.5 242L585 239.5L576 235.5L570.5 233.5L564 230.5L557 228L552 225.5L545 222.5L537.5 219.5L532.5 217.5L526.5 215L522 213L518 211L514 209L510 207.5L507 206L503 205L500 204L498 202.5L497 204L495 207L493.5 209.5L491.5 213L490 214.5L488 216.5L486 219L482 223L480 224.5L477.5 226.5L474.5 229L472 231L469.5 232.5L462 236.5L456 239.5L453 240.5L448 242.5L445.5 243L438 244.5L432.5 246L425 246.5H397L391 247L384.5 250.5L381 254L378.5 262.5L375.5 266.5L372.5 271.5L368.5 276.5L358 283.5L353.5 285.5L348.5 287L342.5 288L337.5 288.5H330L328 288L324 297Z" stroke="black"/></ToolTip>}
                                <foreignObject className="location-label" x="405" y="275" width="160" height="160" style={{fontSize: '0.75vw', pointerEvents: 'none'}}><FontAwesomeIcon icon={faLocationDot} /></foreignObject>
                                
                            </svg>
                        </div>
                    </div>
                </div>
                <hr/>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flex: 2}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Can’t Find Your Ideal Destination? Specify where you would like to you... (Additional Chage May Apply)</p>
                    </div>
                    <div style={{flex: 6}}>
                        <input className='form-control' type="text" placeholder='Enter your own destination...' style={{}}/>
                    </div>
                </div>
                <hr/>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flex: 2}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Time of Day/Length of Date</p>
                    </div>
                    <div style={{flex: 6}}>
                        <input className='form-control' type="text" placeholder='Weekend' style={{}}/>
                    </div>
                </div>
                <hr/>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flex: 2}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>Special Occassion</p>
                    </div>
                    <div style={{flex: 6}}>
                        <input className='form-control' type="text" placeholder='Birthday' style={{}}/>
                    </div>
                </div>
                <hr/>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flex: 2}}>
                        <p style={{fontSize: '1rem', fontWeight: '500'}}>What Are Common Interets That You All Enjoy? (List 5+)</p>
                    </div>
                    <div style={{flex: 6}}>
                        <textarea className='form-control' type="text" placeholder='List at least 5 common interests...' style={{height: "10vh"}}></textarea>
                    </div>
                </div>
                <hr style={{color:'rgb(156, 162, 168)'}}/>
                <div style={{display: 'flex'}}>
                    <div style={{flex:1}}>
                        <p style={{fontSize: '1rem', fontWeight: '500', paddingRight: '1vw'}}>Would you like this Magical Mystery experience to be a complete mystery where no-one will not know what your experience has in place?</p>
                    </div>
                    <div style={{flex:3,fontSize: '1rem'}}>
                        <div class="form-check" style={{width: '100%', paddingBottom: '0.6vw'}}>
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                        <label class="form-check-label" for="exampleRadios1">
                        Yes, surprise us.
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                        <label class="form-check-label" for="exampleRadios2">
                        No, I want to know the plan.
                        </label>
                        </div>
                    </div>
                </div>
                <div style={{width: '100%', textAlign: "right"}}>
                    {/* <WhiteButton style={{marginRight: '0.8vw'}} onClick={props.onBack}>Back</WhiteButton> */}
                    <StartPlanningBtn onClick={props.onNext}>Next</StartPlanningBtn>
                </div>
            </div>
            </div>
    )
}