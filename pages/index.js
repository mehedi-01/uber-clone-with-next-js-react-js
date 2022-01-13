import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWVoZWRpLTAxIiwiYSI6ImNreWRnZGR6eTBjb2Qyb3MyNHhsYXMzcjcifQ.Lfr2CciVtucqKU7Ki3Hifw';


export default function Home() {

  useEffect(() => {
    // if (map.current) return; // initialize map only once
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });

  // const map = new mapboxgl.Map({
  //   container: 'map', // container ID
  //   style: 'mapbox://styles/mapbox/streets-v11', // style URL
  //   center: ,
  //   zoom: ,
  //   });

  return (
    <Wrapper>
      <Map id='map'></Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen

`

const Map = tw.div`
bg-red-500 flex-1

`

const ActionItems = tw.div`
flex-1

`
