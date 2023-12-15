import Outlet from "./Outlet"



const OutletLets = (props) => {
  return (

    <div  className="location-info">
          
   
    
    <div className='d-flex flex-wrap card-container'>
      {props.nearestOutlets.map((outlet,index) => (

<Outlet key={index} outlet = {outlet} index = {index} />
        
        
      ))}</div>
    
  </div>
   
  )
}

export default OutletLets
