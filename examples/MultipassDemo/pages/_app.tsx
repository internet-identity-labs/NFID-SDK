import React from 'react'
import { AppComponent } from 'next/dist/shared/lib/router/router'
import 'tailwindcss/tailwind.css'

const GetImpactNow: AppComponent = ({ Component, pageProps }) => {
  return (
    <div className='relative'>
      <Component {...pageProps} />
    </div>
  )
}

export default GetImpactNow
