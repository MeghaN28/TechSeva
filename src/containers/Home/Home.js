import React from 'react';
import IMAGES from '../../images/index';
import './Home.css';
//import Header from '../../components/Header/Header';
function home() {
    return (
        
       <div>
           
          <h3>Providing The Online Services to our Customers With All Features</h3>
          <div class="item">
               <img src={IMAGES.logoServices} alt=""></img>
               <figcaption class="caption">Services</figcaption>
           <img src={IMAGES.logoRationCard} alt=""></img>
           <img src={IMAGES.logoVoterId} alt=""></img>
           <img src={IMAGES.logoVoterService} alt=""></img>
           <img src={IMAGES.logoPartTime} alt=""></img>
           <img src={IMAGES.logoNovel} alt=""></img>
           <img src={IMAGES.logoLandServices} alt=""></img>
           <img src={IMAGES.logoGovtServices} alt=""></img>
           <img src={IMAGES.logoGovtJob} alt=""></img>
       </div>
       </div>
            
       
    );
}
 
export default home;