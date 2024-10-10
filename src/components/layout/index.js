import React from 'react'
import Header from './Header';
import Footer from './Footer';

function Layout({childrne}) {
  return (
    <>
      <Header />
      {childrne}
      <Footer />  
    </>
  )
}

export default Layout;