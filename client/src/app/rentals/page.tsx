import CertificationsFAQ from '@/components/common/certifications-faq'
import Companies from '@/components/common/companys'
import Footer from '@/components/common/footer'
import NewsAndContact from '@/components/common/news-connect'
import Offer from '@/components/common/offer'
import Navbar from '@/components/nav-bar'
import Rentals from '@/components/rantals/form'
import VehicleOptionsSection from '@/components/rantals/options'
import WhyEntrex from '@/components/rantals/why'
import HowItWorks from '@/components/rantals/works'
import React from 'react'

const MainRentals = () => {
  return (
    <div>
      <Navbar/>
      <Rentals/>
      <Offer/>
      <WhyEntrex/>
      
      <VehicleOptionsSection/>
      <HowItWorks/>
            <Companies/>

      <CertificationsFAQ />
      <NewsAndContact />
      <Footer />
    </div>
  )
}

export default MainRentals
