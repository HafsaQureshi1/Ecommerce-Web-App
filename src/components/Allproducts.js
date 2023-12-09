import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/images/Frame 33.png';
import img2 from '../assets/images/Frame 34.png';
import img3 from '../assets/images/Frame 38.png';
import img4 from '../assets/images/Frame 71.png';
import img5 from '../assets/images/Frame 72.png';
import img6 from '../assets/images/Frame 73.png';
import img7 from '../assets/images/Frame 32.png';
import img8 from '../assets/images/Frame 70.png';
import img9 from '../assets/images/Frame 71 (1).png';
import stars from '../assets/images/Frame 39.png';
import stars2 from '../assets/images/Frame 40.png';
import stars3 from '../assets/images/Frame 41.png';
import stars4 from '../assets/images/Frame 68.png';
import stars5 from '../assets/images/Frame 69.png';
import stars6 from '../assets/images/Frame 70 (1).png';
import stars7 from '../assets/images/Frame 35.png';
import stars8 from '../assets/images/Frame 68 (1).png';
import stars9 from '../assets/images/Frame 69 (1).png';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
export default function Allproducts(){
    return(
<>
<h5>Home/<span style={{color:"#000000"}}>All Products</span></h5>
<h1 className='my-5'>All Products</h1>
<Container className="d-flex justify-content-end">
        <Row>
          <Col xs="auto">
            <p className="mr-3">Showing 1-10 of 100 products Sort by:</p>
          </Col>
          <Col xs="auto">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#fff", color: "#000", border: "none" , marginTop:'-10px' }}>
              most Popular
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"></Dropdown.Item>
                <Dropdown.Item href="#/action-2"></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
<div className="container-fuild ">
  <div class="row">
    <div className='col-lg-4 col-md-6 col-sm-12'>
<Card className='mx-5'  style={{ width: '18rem',border:'none' }}>
    <Card.Img className='mx-3' variant="top " src={img} />
    <Card.Body style={{marginLeft:'none'}}>
      <Card.Title>Baby Crochet Design</Card.Title>
      <img varient="down" src={stars} />
      <Card.Text style={{width:'700px', height:'32.4px'}} className='fw-bold'>
        $145
      </Card.Text>
      <Button  style={{width:'270px'}} className='gradient-container'>Add to Cart</Button>
    </Card.Body>
  </Card>
  </div>

   <div className='col-lg-4 col-md-6 col-sm-12'>
<Card className='mx-5'  style={{ width: '18rem',border:'none' }}>
    <Card.Img className='mx-3' variant="top " src={img2} />
    <Card.Body style={{marginLeft:'none'}}>
      <Card.Title>Balochi Doch</Card.Title>
      <img varient="down" src={stars2} />
      <Card.Text style={{width:'700px', height:'32.4px'}} className='fw-bold'>
        $180
      </Card.Text>
      <Button  style={{width:'270px'}} className='gradient-container'>Add to Cart</Button>
    </Card.Body>
  </Card>
  </div>

   <div className='col-lg-4 col-md-6 col-sm-12'>
<Card className='mx-5'  style={{ width: '18rem',border:'none' }}>
    <Card.Img className='mx-3' variant="top " src={img3} />
    <Card.Body style={{marginLeft:'none'}}>
      <Card.Title>  Crochet Dress</Card.Title>
      <img varient="down" src={stars3} />
      <Card.Text style={{width:'700px', height:'32.4px'}} className='fw-bold'>
        $120
      </Card.Text>
      <Button  style={{width:'270px'}} className='gradient-container'>Add to Cart</Button>
    </Card.Body>
  </Card>
  </div>
  </div>
  </div>


  <div className="container-fuild my-5">
  <div class="row">
    <div className='col-lg-4 col-md-6 col-sm-12'>
<Card className='mx-5'  style={{ width: '18rem',border:'none' }}>
    <Card.Img className='mx-3' variant="top " src={img4} />
    <Card.Body style={{marginLeft:'none'}}>
      <Card.Title>Applique Chaddar </Card.Title>
      <img varient="down" src={stars4} />
      <Card.Text style={{width:'700px', height:'32.4px'}} className='fw-bold'>
        $240
      </Card.Text>
      <Button  style={{width:'270px'}} className='gradient-container'>Add to Cart</Button>
    </Card.Body>
  </Card>
  </div>

   <div className='col-lg-4 col-md-6 col-sm-12'>
<Card className='mx-5'  style={{ width: '18rem',border:'none' }}>
    <Card.Img className='mx-3' variant="top " src={img5} />
    <Card.Body style={{marginLeft:'none'}}>
      <Card.Title>Embroidered Dress</Card.Title>
      <img varient="down" src={stars5} />
      <Card.Text style={{width:'700px', height:'32.4px'}} className='fw-bold'>
        $180
      </Card.Text>
      <Button  style={{width:'270px'}} className='gradient-container'>Add to Cart</Button>
    </Card.Body>
  </Card>
  </div>

   <div className='col-lg-4 col-md-6 col-sm-12'>
<Card className='mx-5'  style={{ width: '18rem',border:'none' }}>
    <Card.Img className='mx-3' variant="top " src={img6} />
    <Card.Body style={{marginLeft:'none'}}>
      <Card.Title>Hand-Embroidered Dress</Card.Title>
      <img varient="down" src={stars6} />
      <Card.Text style={{width:'700px', height:'32.4px'}} className='fw-bold'>
        $130
      </Card.Text>
      <Button  style={{width:'270px'}} className='gradient-container'>Add to Cart</Button>
    </Card.Body>
  </Card>
  </div>
  </div>
  </div>





  <div className="container-fuild">
  <div class="row">
    <div className='col-lg-4 col-md-6 col-sm-12'>
<Card className='mx-5'  style={{ width: '18rem',border:'none' }}>
    <Card.Img className='mx-3' variant="top " src={img7} />
    <Card.Body style={{marginLeft:'none'}}>
      <Card.Title>Applique Dress </Card.Title>
      <img varient="down" src={stars7} />
      <Card.Text style={{width:'700px', height:'32.4px'}} className='fw-bold'>
        $212
      </Card.Text>
      <Button  style={{width:'270px'}} className='gradient-container'>Add to Cart</Button>
    </Card.Body>
  </Card>
  </div>

   <div className='col-lg-4 col-md-6 col-sm-12'>
<Card className='mx-5'  style={{ width: '18rem',border:'none' }}>
    <Card.Img className='mx-3' variant="top " src={img8} />
    <Card.Body style={{marginLeft:'none'}}>
      <Card.Title>Applique Dress</Card.Title>
      <img varient="down" src={stars8} />
      <Card.Text style={{width:'700px', height:'32.4px'}} className='fw-bold'>
        $145
      </Card.Text>
      <Button  style={{width:'270px'}} className='gradient-container'>Add to Cart</Button>
    </Card.Body>
  </Card>
  </div>

   <div className='col-lg-4 col-md-6 col-sm-12'>
<Card className='mx-5'  style={{ width: '18rem',border:'none' }}>
    <Card.Img className='mx-3' variant="top " src={img9} />
    <Card.Body style={{marginLeft:'none'}}>
      <Card.Title>Ajrak Dress</Card.Title>
      <img varient="down" src={stars9} />
      <Card.Text style={{width:'700px', height:'32.4px'}} className='fw-bold'>
        $80
      </Card.Text>
      <Button  style={{width:'270px'}} className='gradient-container'>Add to Cart</Button>
    </Card.Body>
  </Card>
  </div>
  </div>
  </div>
</>
    )

}