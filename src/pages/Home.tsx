import Amenities from '../components/Ameneties'
// import Branches from '../components/Branches'
import Footer from '../components/CTA'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Rooms from '../components/Rooms'
import Stats from '../components/Stats'
import BrandStory from '../components/Story'
import Testimonials from '../components/Testimonies'

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Stats/>
   <BrandStory/>
   <Rooms/>
   <Amenities/>
   {/* <Branches/> */}
   <Testimonials/>
   <Gallery/>
   <Footer/>
  </>
  )
}
