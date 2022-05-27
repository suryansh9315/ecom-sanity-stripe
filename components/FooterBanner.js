import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({bannerdata}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className="left">
          <p>{bannerdata.discount}</p>
          <h3>{bannerdata.largeText1}</h3>
          <h3>{bannerdata.largeText2}</h3>
          <p>{bannerdata.saleTime}</p>
        </div>
        <div className="right">
          <p>{bannerdata.smallText}</p>
          <h3>{bannerdata.midText}</h3>
          <p>{bannerdata.desc}</p>
          <Link href={`/product/${bannerdata.product}`}>
            <button type='button'>{bannerdata.buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(bannerdata.image)} alt="" className='footer-banner-image'/>
      </div>
    </div>
  )
}

export default FooterBanner