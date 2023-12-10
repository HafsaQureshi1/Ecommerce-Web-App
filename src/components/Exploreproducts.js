import Card from 'react-bootstrap/Card';
import arrows from '../assets/images/arrows.png'
import star from '../assets/images/stars.png'

import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import p4 from '../assets/images/p4.png';
import p5 from '../assets/images/p5.png';
import p6 from '../assets/images/p6.png';
import p7 from '../assets/images/p7.png';
import p8 from '../assets/images/p8.png';
import today from '../assets/images/product.png'
export default function ExploreProducts(){
    return(
        < >
        <br />
        <div style={{marginLeft:'100px'}} className=' my-2 container'>
      <img className='my-2' src={today} alt="" />
    <p className='my-3 fw-bold' style={{fontSize:'36px'}}>Explore Our Products <img className='img-fluid' style={{textAlign:'right'}} src={arrows} alt="" /> </p>
    </div>
    <div style={{marginLeft:'100px'}} className='my-4  container row '>
    <div  className=' col-lg-3 col-md-6 col-sm-12'>
    <Card  style={{  border: 'none' }}>
      <Card.Img variant="top" src={p1} />
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
      <Card.Img variant="top" src={p2} />
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
      <Card.Img variant="top" src={p3} />
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
      <Card.Img variant="top" src={p4} />
      <Card.Body>
        <Card.Title>Blue Applique Dress </Card.Title>
        $120   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $160</span>  
        <Card.Text>
      <img src={star} alt="" />
        <br /><br />
        </Card.Text>
      </Card.Body>
    </Card></div>
    </div>
    <div style={{marginLeft:'100px'}} className='my-4  container row '>
    <div  className=' col-lg-3 col-md-6 col-sm-12'>
    <Card  style={{  border: 'none' }}>
      <Card.Img variant="top" src={p5} />
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
      <Card.Img variant="top" src={p6} />
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
      <Card.Img variant="top" src={p7} />
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
      <Card.Img variant="top" src={p8} />
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