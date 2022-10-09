import React from 'react';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'


// import { tripActions } from '../store/index'


const Component = (props) => {

    const destination = 'Your Location'

    // const dispatch = useDispatch()

    function selectHandler(event){
        // dispatch(tripActions.setDestination(event.label))
        geocodeByAddress(event.label)
        .then(results => getLatLng(results[0]))
        .then(({ lat, lng }) =>
            props.onSelect({lat:lat, lng:lng})
        );
    }
  
    return (
    <div style={{...props.style}}>
        <GooglePlacesAutocomplete 
            selectProps={{
                placeholder: destination,
                onChange: selectHandler,
                styles: {
                    // input: (provided) => ({
                    //     ...provided,
                    //     color: 'white',
                    // }),
                    // menu: (provided) => ({
                    //     ...provided,
                    //     color: 'white',
                    //     backgroundColor: 'rgb(0, 0, 0, 0.5)'
                    // }),
                    control: (provided) => ({
                        ...provided,
                        height: '100%'
                        // color: 'white',
                        // paddingLeft:'2%',
                        // borderRadius: 0,
                        // border: '0',
                        // backgroundColor: 'rgb(0, 0, 0, 0)',
                        // height: '3.85vw'
                    }),
                    // placeholder: (provided) => ({
                    //     color: 'white'
                    // }),
                    container: (provided, { data, isDisabled, isFocused, isSelected }) => ({
                        ...provided,
                        borderRadius: '10px',
                        height: '100%'
                    }),
                    // option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
                    //     ...provided,
                    //     backgroundColor: isSelected ? 'rgb(255, 255, 255, 0.2)' : 'rgb(0, 0, 0, 0)'
                    // }),
                    // singleValue: (provided) => ({
                    //     ...provided,
                    //     color: 'white'
                    // }),
                    indicatorsContainer: (provided) => ({
                        ...provided,
                        display:'none'
                    })
                }
            }} />
    </div>
    );
}

export default Component;