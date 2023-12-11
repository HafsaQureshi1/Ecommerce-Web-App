import arrival from '../assets/images/arrival.png'
import box from '../assets/images/box.png'
export default function Newarrival(){
    return(
<div style={{marginLeft:'60px'}} className=' my-2 container-fluid'>
      <img className='p-3 my-2' src={box} alt="" />
    <p className='mx-3 my-3 fw-bold' style={{fontSize:'36px'}}>New Arrivals  </p>
    <img style={{textAlign:'center'}} className='mx-3 my-4 img-fluid' src={arrival} alt="" />
    </div>


    )
}