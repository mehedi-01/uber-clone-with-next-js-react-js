import React from 'react'
import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWVoZWRpLTAxIiwiYSI6ImNreWRnZGR6eTBjb2Qyb3MyNHhsYXMzcjcifQ.Lfr2CciVtucqKU7Ki3Hifw';

const Map = () => {

    
  useEffect(() => {
    // if (map.current) return; // initialize map only once for useEffect 
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });

    return  <Wrapper id='map'></Wrapper>
        
    
}

export default Map

const Wrapper = tw.div`
flex-1

`
