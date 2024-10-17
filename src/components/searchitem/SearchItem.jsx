import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Items} from '../Data'
import Itemlist from '../itemlist/Itemlist';
function SearchItem() {
  const {term} = useParams();
  const[serachData , setSearchData] = useState([]);
  useEffect(()=>{
    const searchData = Items.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()))
    setSearchData(searchData)
  },[term])
  

  return (
    <>
    {!serachData.length ? (<div className='text-center my-5'><h4>No Items Found</h4></div>) : <Itemlist Items={serachData}/> }
    
    </>
  )
}

export default SearchItem
