import React from "react"
import de from '../assets/images/de.png'
    const textStyle = {
        marginLeft: '250px',
       fontFamily: 'Ag, sans-serif',
      };
export default function CheckOut() {
  return (
    <>
   <h6 style={{ marginLeft: '100px', marginBottom: '100px', fontFamily: 'Ag, sans-serif', }}>
        <span style={{ opacity: 0.4 }}>Account</span>
        &nbsp; / &nbsp;
        <span style={{ opacity: 0.4 }}>MyAccount</span>
        &nbsp; / &nbsp;
        <span style={{ opacity: 0.4 }}>Products</span>
        &nbsp; / &nbsp;
        <span style={{ opacity: 1.0 }}>Checkout</span>
      </h6>
    <div className="container-fluid" style={textStyle}>
      <h2>Billing Details </h2>
      <div className="row">
      <div className="col-lg-4">
      <div>
      <label htmlFor="userName" style={ {marginTop: '50px',   fontFamily: 'Ag, sans-serif',  opacity: 0.4, }} >First Name</label>
      <br />
      <input type="text" id="userName" style={{background:'#F5F5F5',height:'50px',width:'470px', border:'none'}} />
    </div>
    <div>
      <label htmlFor="userName" style={ {marginTop: '25px',   fontFamily: 'Ag, sans-serif',  opacity: 0.4, }} >Company Name</label>
      <br />
      <input type="text" id="userName" style={{background:'#F5F5F5',height:'50px',width:'470px', border:'none'}} />
    </div>
    <div>
      <label htmlFor="userName" style={ {marginTop: '25px',   fontFamily: 'Ag, sans-serif',  opacity: 0.4, }} >Street Address</label>
      <br />
      <input type="text" id="userName" style={{background:'#F5F5F5',height:'50px',width:'470px', border:'none'}} />
    </div>
    <div>
      <label htmlFor="userName" style={ {marginTop: '25px',   fontFamily: 'Ag, sans-serif',  opacity: 0.4, }} >Apartment, floor, etc (optional)</label>
      <br />
      <input type="text" id="userName" style={{background:'#F5F5F5',height:'50px',width:'470px', border:'none'}} />
    </div>
    <div>
      <label htmlFor="userName" style={ {marginTop: '25px',   fontFamily: 'Ag, sans-serif',  opacity: 0.4, }} >Town/City</label>
      <br />
      <input type="text" id="userName" style={{background:'#F5F5F5',height:'50px',width:'470px', border:'none'}} />
    </div>
    <div>
      <label htmlFor="userName" style={ {marginTop: '25px',   fontFamily: 'Ag, sans-serif',  opacity: 0.4, }} >Phone Number</label>
      <br />
      <input type="text" id="userName" style={{background:'#F5F5F5',height:'50px',width:'470px', border:'none'}} />
    </div>
    <div>
      <label htmlFor="userName" style={ {marginTop: '25px',   fontFamily: 'Ag, sans-serif',  opacity: 0.4, }} >Email Address</label>
      <br />
      <input type="text" id="userName" style={{background:'#F5F5F5',height:'50px',width:'470px', border:'none'}} />
    </div>
    <label style={ {marginTop: '25px',marginBottom: '25px',  fontWeight: '100'}}>
        <input type="checkbox" style={{ background:'red', marginRight: '10px'}}/>
        Save this information for faster checkout next time 
      </label>

      </div>
      <div className="my-5 mx-5 col-lg-6">
      <br />
      <img className="mx-4" src={de} alt="" />
      <div className="my-5 form-check">
          <input
            className="mx-2 form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadio1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="exampleRadio1">
            Cash on delivery
          </label>
          <div className="container-fluid mt-4">
      <div className="row">
        {/* Input field column */}
        <div className="col-lg-6 mb-3 ">
          <input
            style={{textAlign:'left', width: '100%',height:'50px' }}
            className='form-control'
            type="text"
            placeholder="Coupon code"
          />
           <button style={{width:'250px',height:'50px'}} className='my-4 gradient btn text-light' type="submit">Place order</button>
        
        </div>

        {/* Button column */}
        <div className="col-lg-6 mb-3">
          <button style={{width:'200px',height:'50px'}} className='gradient btn text-light' type="submit">Apply Coupon</button>
        </div>
      </div>
    </div>
        </div>
      </div>
</div>          </div>
    </>
  )
}