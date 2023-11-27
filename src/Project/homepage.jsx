import './project.css';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Footer from './footer';

function Home()
{
  const navigation = useNavigate();

    return(
        <div>
        <div style={{textAlign:"center", backgroundColor:"ActiveBorder", color:"white"}}>
        <h1>WELCOME TO BLUE BUS</h1>
        <p ><b>BlueBus is the World's largest online bus ticket booking service trusted by over 35 million happy customers globally.</b></p>
        <p><b>BlueBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.</b></p>
        </div><br/>
        <div>
          <p style={{textAlign:"center"}}><h5>We offers World class busses in offordable price and<br/>
             we offer all main travel agences like <br/>
            BlackPearl, orange, A1 Travels, No1 Air Travels, SRS Travels, Parveen Travels, SETC, SwamyAyyappa etc...</h5>
          </p>
          <p style={{textAlign:"center"}}>
            <h5>
            We also provide you coupon, if you book busses in Blue Bus .<br/>
            We also provide redemption code which will reduce some amount if you book busses next time.
            </h5>
          </p>
          <p style={{textAlign:"center"}}>
            <h5>
              And one main thing in our Blue Bus App/website is<br/>
              You can cancel the ticket at any time befor <br/>
              the bus leave your stop.
            </h5>
          </p>
          <div className='text-center'>
          <Button to="/booking"  onClick={()=> navigation("/booking")} class="btn btn-outline-primary my-2 my-sm-0" type="primary">BOOK BUSSES</Button>
          </div>
        </div>
        <div className="img_content">
            <div className='img1'>
                 <img src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/93660/logo.png" class="img-responsive" alt="logo"></img>
            </div>
            <div>
                <img src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/40676/logo_swamy_ayyappa_travels1.png" class="logo logo-scrolled img-responsive" alt=""/>
             </div>
             <div>
                 <img src="https://static.abhibus.com//content-pages/op-logos/Orange-Travels.png" class="op-logo op-logo-1" alt="Orange Travels"/>
            </div>
            <div>
                <img src="	https://www.a1travels.in/assets/images/logo.png"/>
            </div>
            <div>
              <img src="https://m.no1travels.in/assets/images/logo.png"/>
            </div>
            <div>
              <img src="https://lh3.googleusercontent.com/p/AF1QipM0nalNoVQtBX20xegBWNC8LQIUef20pFzvcpaz=w1080-h608-p-no-v0"/>
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/1200px-TamilNadu_Logo.svg.png"/>
            </div>
            <div>
              <img src="https://media.licdn.com/dms/image/C510BAQHHvqLryRL8xQ/company-logo_200_200/0/1630565511882/parveen_travels_logo?e=2147483647&v=beta&t=P4o3-qrakvx4FKpvyVkWE_OVEl2GuvvjvTwSQakNx4k"/>
            </div>
            <div>
              <img src="https://img.cdn.itspl.net/cdn/B2C_RT/VRL/images/site/Logo.png?d=1.0.0.11" alt="Vijayanand Travels Travels" title="Vijayanand Travels Private Ltd"/>
            </div>
        </div><br/><br/><br/>
          <h2 style={{textAlign:"center"}}><b>THANK YOU<br/> FOR CHOOSING US</b></h2>
          <Footer/>
    </div>
    )
}
export default Home




    
    
 