import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'


//mapboxgl.accessToken = 'pk.eyJ1IjoibWVoZWRpLTAxIiwiYSI6ImNreWRnZGR6eTBjb2Qyb3MyNHhsYXMzcjcifQ.Lfr2CciVtucqKU7Ki3Hifw';


export default function Home() {

  // const map = new mapboxgl.Map({
  //   container: 'map', // container ID
  //   style: 'mapbox://styles/mapbox/streets-v11', // style URL
  //   center: ,
  //   zoom: ,
  //   });

  return (
    <Wrapper>
      <Map />
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen

`

const ActionItems = tw.div`
flex-1

`
