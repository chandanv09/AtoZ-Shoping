import React from 'react'
import Itemlist from './itemlist/Itemlist'

function Home(props) {
  return (
   <Itemlist Items={props.data}/>
  )
}

export default Home
