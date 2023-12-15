import React from "react"

    const textStyle = {
        marginLeft: '250px',
       fontFamily: 'Ag, sans-serif',
      };
export default function CheckOut() {
  return (
    <div style={textStyle}>
      <h2 >Billing Details</h2>
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

    </div>
  )
}
