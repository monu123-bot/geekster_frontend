// App.js (React)


import React, { useEffect, useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import Nav from './components/common/Nav';
import OutletLets from './components/OutletLets';

function App() {
    const [userLocation, setUserLocation] = useState({ lat: '', lng: '' });
    const [nearestOutlets, setNearestOutlets] = useState([]);
    const [address,setAddress] = useState("")
    const [coordinates,setCoordinates] = useState({
        lat:null,
        lng:null
    })
    const handleSelect = async value =>{
        const result = await geocodeByAddress(value);
        const ll = await getLatLng(result[0])
       
        setAddress(value)
        setUserLocation(ll)
        setCoordinates(ll)
        
    } 
    // Function to fetch user's location
    const fetchUserLocation = () => {
        console.log("user location clicked")
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    // Function to send location data to backend
    const findNearestOutlets = async () => {
        
        try {
            const response = await fetch('https://geekster-backend4.onrender.com/outlet/findNearestOutlets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ location: coordinates })
            });
    
            if (response.ok) {
                const data = await response.json();
               
                setNearestOutlets(data.outletsWithDistances);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(()=>{
        findNearestOutlets()
    },[coordinates,userLocation])
    

    return (
     
         <>
        


     <Nav/>


        <div className="container outerbox">
          

            <div className='innerbox' >

        <div className="search-bar">
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className="search-container">
                <input
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                  })}
                />
                
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>  
            )}
          </PlacesAutocomplete>
         

        </div>
        </div>
      
        

        <OutletLets nearestOutlets = {nearestOutlets}  />

        
      </div>
      </>


    );
  };


export default App;


