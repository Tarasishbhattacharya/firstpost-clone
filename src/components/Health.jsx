import axios from "axios"
import { useEffect,useState } from "react"
import { Singlepage } from "./Singlepage"
// import { Sidebar } from "./Sidebar"
// import "./Sidebar.css"
import {Footer} from "./Footer"
import "./Singlepage.css"

export const Health=()=>{
    const[data,setData]=useState([])
    const[page,setPage]=useState(1)

    useEffect(()=>{
      loaddata(page).then((res)=>setData(res.data))
    },[page])
    const loaddata=async(page)=>{
        return await axios.get("http://localhost:8080/health",{
            params:{
                _page:page,
                _limit:13
            }
        })
    }
    return (
        <>
        <div className="news">
          {data.map((el)=>{
              return <Singlepage data={el} />
          })}
         
        </div>
        <button onClick={()=>setPage(page-1)}>prev</button>
          <button onClick={()=>setPage(page+1)}>Next</button>
        <Footer/>
        </>

        
        
    )
}