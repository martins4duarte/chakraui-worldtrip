import type { NextPage } from 'next'
import Banner from '../components/Banner'
import ChooseYourContinentLabel from '../components/ChooseYourContinentLabel'
import Divider from '../components/Divider'
import { Header } from '../components/Header'
import Slider from '../components/Slider'
import TravelTypes from '../components/TravelTypes'

const Home: NextPage = () => {

  return (
    <>
      <Header isHomePage={true}/>
      <Banner />
      <TravelTypes />
      <Divider />
      <ChooseYourContinentLabel />
      <Slider />
    </>
  )
}

export default Home
