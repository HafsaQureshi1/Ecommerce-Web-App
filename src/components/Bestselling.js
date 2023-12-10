import s1 from '../assets/images/s1.png'

import s2 from '../assets/images/s2.png'
import card3 from '../assets/images/card3.png'
import card2 from '../assets/images/card2.png'
import Card from 'react-bootstrap/Card';
import star from '../assets/images/stars.png'
import month from '../assets/images/month.png'
export default function Bestselling(){
    return(
        <>
        
        <div  style={{marginLeft:'100px'}}  className=" container my-3">
            <img  className='' src={month} alt="" />
            <h2 className=' my-4 fw-bold'>Best Selling <button style={{textAlign:'right'}} className=' btn gradient text-white'>View all</button></h2>
            <div className='my-5  container row '>
    <div className=' col-lg-3 col-md-6 col-sm-12'>
    <Card  style={{  border: 'none' }}>
      <Card.Img variant="top" src={s1} />
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
      <Card.Img variant="top" src={s2} />
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
      <Card.Img variant="top" src={card2} />
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
            
        </div>

        </>
    )
}