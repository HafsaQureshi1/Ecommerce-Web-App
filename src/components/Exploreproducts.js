

export default function ExploreProducts(){
    return(
        < >
        <div style={{marginLeft:'100px'}} className=' my-2 container'>
      <img className='my-2' src={today} alt="" />
    <p className='my-3 fw-bold' style={{fontSize:'36px'}}>Flash Sales <img style={{marginLeft:'500px'}} src={arrows} alt="" /> </p>
    </div>
    <div style={{marginLeft:'100px'}} className='my-4 mx-5 container row '>
    <div  className=' col-lg-3 col-md-6 col-sm-12'>
    <Card  style={{  border: 'none' }}>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Balochi Doch</Card.Title>
        $120   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $160</span>  
        <Card.Text>
      <img src={star} alt="" />
        <br /><br />
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='col-lg-3 col-md-6 col-sm-12'><Card  style={{  border: 'none' }}>
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>Embroidered Dress</Card.Title>
        $120   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $160</span>  
        <Card.Text>
      <img src={star} alt="" />
        <br /><br />
        </Card.Text>
      </Card.Body>
    </Card></div>
    <div className='col-lg-3 col-md-6 col-sm-12'><Card  style={{  border: 'none' }}>
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title>Embroidered Dress</Card.Title>
        $960   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $1160</span>  
        <Card.Text>
      <img src={star} alt="" />
        <br /><br />
        </Card.Text>
      </Card.Body>
    </Card></div>
    <div className='col-lg-3 col-md-6 col-sm-12'><Card  style={{  border: 'none' }}>
      <Card.Img variant="top" src={card4} />
      <Card.Body>
        <Card.Title>Blue Applique Dress </Card.Title>
        $120   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $160</span>  
        <Card.Text>
      <img src={star} alt="" />
        <br /><br />
        </Card.Text>
      </Card.Body>
    </Card></div>
    <div className='my-3 justify-content-center text-center'><button style={{width :'270px',fontSize:'18px'}} className=' gradient-container btn text-light'>View All Products</button>
   <br /><br />
   </div>
   <hr />
    </div>
    
        
        
        </>
    )
}