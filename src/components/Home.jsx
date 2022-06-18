
import axios from "axios"
import { useEffect,useState } from "react"
import { Singlepage } from "./Singlepage"
// import { Sidebar } from "./Sidebar"
// import "./Sidebar.css"
import {Footer} from "./Footer"
import "./Singlepage.css"

export const Home=()=>{
    const[data,setData]=useState([])

    useEffect(()=>{
      loaddata().then((res)=>setData(res.data))
    },[])
    const loaddata=async()=>{
        return await axios.get("http://localhost:8080/home")
    }
    return (
        <>
        <div className="news">
          {data.map((el)=>{
              return <Singlepage data={el} />
          })}
        </div>
        <Footer/>
        </>

        
        
    )
}