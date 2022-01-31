import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { Input } from 'postcss'


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
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="http://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>

          <Profile>
            <Name>Mehedi Hasan</Name>
            <UserImage src="https://www.jquery-az.com/html/images/banana.jpg" />
          </Profile>
          

        </Header>
        <ActionButoons>
        <ActionButoon>
          <ActionButoonImage  src="https://p.kindpng.com/picc/s/41-410968_episode-interactive-car-overlay-hd-png-download.png" />
          Ride</ActionButoon>
        <ActionButoon>
        <ActionButoonImage  src="https://i.ibb.co/n776JLm/bike.png" />
          Wheels</ActionButoon>
        <ActionButoon>
        <ActionButoonImage  src="https://i.ibb.co/5RjchBg/uberschedule.png" />
          Reserve</ActionButoon>
        </ActionButoons>

        <InputButton>
        Where  to?
        </InputButton>
        {/* ActionButtons */}
        {/* InputButton */}






      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen

`

const ActionItems = tw.div`
flex-1 p-4

`

const Header = tw.div`
flex justify-between items-center

`

const UberLogo = tw.img`

h-20
rounded-full
`

const Profile = tw.div`
flex items-center

`
const Name = tw.div`
mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px

`

const ActionButoons = tw.div`
flex
`
const ActionButoon = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg text-xl hover:bg-sky-400
`
const ActionButoonImage = tw.img`

h-3/5

`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex  items-center mt-8
`