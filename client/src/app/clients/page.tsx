import CertificationsFAQ from '@/components/common/certifications-faq'
import Companies from '@/components/common/companys'
import Footer from '@/components/common/footer'
import NewsAndContact from '@/components/common/news-connect'
import Offer from '@/components/common/offer'
import Navbar from '@/components/nav-bar'
import React from 'react'

const Clients = () => {
  return (
    <div>
      <Navbar/>
      <div className='mt-10'>
            <Companies/>

      </div>
    <Offer/>
      <CertificationsFAQ />
      <NewsAndContact />
      <Footer />
    </div>
  )
}

export default Clients
