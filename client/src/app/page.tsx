import React from 'react'
import HomePage from '@/components/home/hero'
import WhyEntrex from '@/components/home/why-entrex'
import PremiumTravelSection from '@/components/home/travel-section'
import TrustedSection from '@/components/home/trusted-section'
import CertificationsFAQ from '@/components/common/certifications-faq'
import NewsAndContact from '@/components/common/news-connect'
import Footer from '@/components/common/footer'

const Home = () => {
  return (
    <>
      <HomePage />
      <WhyEntrex />
      <PremiumTravelSection />
      <TrustedSection />
      <CertificationsFAQ />
      <NewsAndContact />
      <Footer />
    </>
  )
}

export default Home
