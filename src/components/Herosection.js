import arrow from '../assets/images/DropDown.png'
import frame from '../assets/images/Frame 560.png'
export default function Herosection() {
  return (
    < > 
<div className='container-fluid'>

  <div className='my-4 row'>

<div style={{marginLeft:'30px'}} className='col-lg-3 col-md-6 col-sm-12 divsize  text-light justify-content-center text-center  '>

<p style={{marginTop:'40px'}} className='mx-4 '>Women Fashion   <span><img style={{marginLeft:'30px',marginTop:'15px'}} src={arrow} alt="" /></span></p>
<p className='mx-4 my-3'>Men's Fashion  <span><img className='right' src={arrow} alt="" /></span></p>
<p className='mx-4 my-3'>Accessories   <span><img style={{marginLeft:'68px'}} className='' src={arrow} alt="" /></span></p>
<p className='mx-4 my-3'>Kids   <span><img style={{marginLeft:'132px'}} src={arrow} alt="" /></span></p>
<p className='mx-4 my-3'>Shawls   <span><img style={{marginLeft:'107px'}} src={arrow} alt="" /></span></p>

</div>
<div className='  col-lg-1 col-md-l 'style={{width:'auto'}}>
  <div className='vertical-line'></div>
  
</div>

<div className='col-lg-8 col-md-6 col-sm-6'>
  <img className=' img-fluid ' src={frame} alt="" /></div>
</div></div>
<hr />
    </ >
  );
}

