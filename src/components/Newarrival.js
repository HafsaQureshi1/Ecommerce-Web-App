import arrival from '../assets/images/arrival.png'
import box from '../assets/images/box.png'
export default function Newarrival(){
    return(
<div style={{marginLeft:'100px'}} className=' my-2 container'>
      <img className='my-2' src={box} alt="" />
    <p className='my-3 fw-bold' style={{fontSize:'36px'}}>New Arrivals  </p>
    <img style={{width:'96%'}} className='my-4 img-fluid' src={arrival} alt="" />
    </div>


    )
}