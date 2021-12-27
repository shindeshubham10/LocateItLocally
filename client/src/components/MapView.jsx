import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet'

import { makeStyles,Grid ,Box} from '@material-ui/core';
import { useState } from 'react';


import { useEffect } from 'react';

import * as opencage from 'opencage-api-client';

const useStyle = makeStyles(theme=>({

    
    mainContainer:{
     //backgroundColor:'green',
     
    },

    root:{

        height:600,
        width:'900px',
        marginLeft:200
    },

    
        
}))

// const initialdata=[{

//     lat:0,
//     lng:0,


// }];

const sampledata=[

    {
        lat:27.2046,
        lng:77.4977
    },
    {
        lat:17.672200,
        lng:75.897650
    },

]

var cnt=0;
const MapView=({data})=>{
    console.log(data);
    const [mapdata,setmapdata]=useState([]);
    
    //console.log("Shop address ====",props.address)
    useEffect(()=>{

        data?.map((x)=>{

            opencage
            .geocode({ key: '574f2e7a4cba478c9e03b38705c09f8c' , q:x.address })
            .then(response => {
              console.log("We are everywhere bois");
              console.log(response);
              //setmapdata({...mapdata,...response.results[0].geometry});
              //setmapdata([...mapdata,)
              setmapdata([...mapdata,{lat:response.results[0].geometry.lat,long:response.results[0].geometry.lng,addr:x.address}])
                
             
              
              
            })
            .catch(err => {
              console.error(err);
              
            })
     

        })},[data])
    


    console.log(mapdata);
    const classes=useStyle();




    return(
        <>
            <Grid container className={classes.mainContainer}>
            <Grid item lg={12} xs={12}>
               
                
                <div className={classes.root}>
                 {  mapdata[0]?.lat?
                            
                                <MapContainer center={[mapdata[0].lat,mapdata[0].long]} zoom={5} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                

                                {
                                    mapdata?.map((x)=>(
                                        
                                    <Marker position={[x.lat,x.long]} >
                                        <Popup>
                                            {x.addr}
                                        </Popup>
                                    </Marker>
                                

                                    ))
                                }
                                    

                                
                                
                                
                            </MapContainer>
                            
                            :<div>Loading...</div>
                } 

                
                
                    {/* <MapContainer center={[27.2046, 77.4977]} zoom={10} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {sampledata.map((x)=>(

                                
                                <Marker position={[x.lat, x.lng]}  >
                                <Popup>
                                    hgvgcgfbcfgxfxfxdf
                                </Popup>
                                </Marker>
                        




                    ))
                    
                    }
                
                    </MapContainer> */}

                </div>  
            </Grid>
            </Grid>
           
                
        </>
        
        


    );
}

export default MapView;