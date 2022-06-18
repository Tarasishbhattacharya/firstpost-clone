import "./Singlepage.css"


export const Singlepage=({data})=>{
    return (
        <div className="singlenews">
            <img src={data.image} alt="image"/>
           <div className="info">
               <h2>{data.headline}</h2>
                <p>{data.desc}</p>
           </div>
        </div>
    )
}