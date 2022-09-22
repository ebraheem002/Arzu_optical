import React,{useState,useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { ValidApi } from '../CartContext.js';


function Searched() {
  const [searchedData,setSearchedData] = useState([])


 const Params = useParams()
 const {productsData} = ValidApi()
 useEffect(() =>{
  {productsData.filter((dataa) =>{
    setSearchedData(
      dataa.title.toLowerCase().includes(Params.search.toLowerCase()))
      
    console.log(Params.search)

})}
 })


  return (
    <div></div>
  )
}
export default Searched
