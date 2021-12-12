

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

import { useEffect } from 'react';

import * as opencage from 'opencage-api-client';

const useStyle = makeStyles(theme=>({

    root:{

        height:400,
        width:400,
    }

    
        
}))

const initialdata={

    lat:0,
    lng:0,


};


const Map=(props)=>{

    const [mapdata,setmapdata]=useState(initialdata);

    useEffect(()=>{

        opencage
        .geocode({ key: '574f2e7a4cba478c9e03b38705c09f8c' , q:props.address  })
        .then(response => {
          console.log(response);
          setmapdata({...mapdata,...response.results[0].geometry});
            
         
          
          
        })
        .catch(err => {
          console.error(err);
          
        });

    },[props.address])


    console.log(mapdata);
    const classes=useStyle();




    return(

        
        <div className={classes.root}>
          {  mapdata.lat?
                    
                    <MapContainer center={[mapdata.lat,mapdata.lng]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[mapdata.lat,mapdata.lng]}>
                            <Popup>
                            {props.address}
                            </Popup>
                        </Marker>
                    </MapContainer>:<div>Loading...</div>
        }
        </div>
        


    );
}

export default Map;