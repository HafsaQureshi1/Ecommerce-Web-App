import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import img1 from '../assets/images/Frame 895.png';
import img2 from '../assets/images/Frame 896.png';
import img3 from '../assets/images/Frame 897.png';
import img4 from '../assets/images/Frame 919.png';
import img5 from '../assets/images/Frame 894.png';
import img6 from '../assets/images/Frame 922.png';
import img7 from '../assets/images/UnderLine (2).png';
import img8 from '../assets/images/Group 1000005935.png';
import img9 from '../assets/images/Ellipse 8.png';
import img10 from '../assets/images/Wishlist.png';
import img11 from '../assets/images/Frame 911.png';
export default function Productdetails() {
    return (
        <>
            <div className="Container">
                <div className="row">
                    <div className="col-lg-3">
                    <img src={img1}/>
                    <img src={img2}/>
                    <img src={img3}/>
                    <img src={img4}/>
                    </div>

                    <div className="col-lg-5">
                    <img style={{height:'530px',width:'500px'}}src={img5}/>
                    </div>
                    <div className="col-lg-4">
                     <h1>Applique Chaddar</h1>
                     <img src={img6}/>
                     <h2>$192.00</h2>
                     <h5>Applic Work Hand Made Long Size Chadders Available Stuff Swiss Voil Length 2.5 Yard</h5>
                     <img src={img7}/>
                     <p>
                           Colours: 
                            <img src={img8}/>
                            <img src={img9}/>
                        </p>
                        <p>
                           Size:
                           <ButtonGroup className="me-2" aria-label="First group">
                           <Button  variant="secondary" style={{width:'32px', height:'32px',backgroundColor:'white',color:'black'}}>XS</Button>{''}
                           <Button  variant="secondary" style={{width:'32px', height:'32px',backgroundColor:'white',color:'black'}}>S</Button>{''}
                           <Button  style={{width:'32px', height:'32px'}} className='gradient-container'>M</Button>{''}
                           <Button  variant="secondary" style={{width:'32px', height:'32px',backgroundColor:'white',color:'black'}}>L</Button>{''}
                           <Button  variant="secondary" style={{width:'32px', height:'32px',backgroundColor:'white',color:'black'}}>XL</Button>
                           </ButtonGroup>
                        </p> 

                        <p>
                        <ButtonGroup className="me-2 " aria-label="First group">
                           <Button  variant="secondary" style={{width:'32px', height:'32px',backgroundColor:'white',color:'black'}}>-</Button>{''}
                           <Button  variant="secondary" style={{width:'42px', height:'32px',backgroundColor:'white',color:'black'}}>2</Button>{''}
                           <Button  variant="secondary" style={{width:'32px', height:'32px',backgroundColor:'white',color:'white'}} className='gradient-container'>+</Button>
                           </ButtonGroup>
                           <Button style={{ width:'150px',height:'32px'}} className='gradient-container '>Buy Now</Button>
                           <Button  variant="secondary" style={{width:'32px', height:'32px',backgroundColor:'white',color:'black'}}>
                           <img  style={{ width:'20px',height:'20px'}}src={img10}/>
                           </Button>
                            </p> 
                            <p>
                            <img src={img11}/>
                            </p>
                    </div>
                </div>
            </div>

        </>
    )
} 