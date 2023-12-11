import Button from 'react-bootstrap/Button';
import img1 from '../assets/images/icons-phone (1).png';
import img2 from '../assets/images/icons-mail (1).png';
import img3 from '../assets/images/UnderLine (1).png';

export default  function Contact(){
    return(
      <>
    <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <p>
                            <img src={img1}/>
                            Call to us
                        </p>
                        <p>
                           we are available 24/7, 7 days a week <br />
                           phone: +1 234 567 89 00
                        </p>

                        <img src={img3}/>

                        <p>
                            <img src={img2}/>
                            Write to us
                        </p>

                        <p>
                            Fill out the form and we will contact you <br />
                            within 24 hours
                            <br />
                            Email: farhang.company@gmail.com
                        </p>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4">
                                <input type="text" placeholder='Your name' />
                            </div>
                            <div className="col-lg-4">
                                <input type="text" placeholder='Your email' />
                            </div>
                            <div className="col-lg-4">
                                <input type="text" placeholder='Your phone' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <textarea name="" id="" cols="103" rows="10" placeholder='Your message'></textarea>
                            </div>
                            <div className="col-lg-12 justify-content-end d-flex">
                            <Button  style={{width:'270px'}} className='gradient-container'>Send Message</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
      </>  
    )
}