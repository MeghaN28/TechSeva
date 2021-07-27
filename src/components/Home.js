import React from 'react';
import IMAGES from '../images/image';
function home() {
    return (
       <div>
          <h3>Providing The Online Services to our Customers With All Features</h3>
           
           <img src={IMAGES.logoServices} alt=""></img>
           <img src={IMAGES.logoRationCard} alt=""></img>
           <img src={IMAGES.logoVoterId} alt=""></img>
           <img src={IMAGES.logoVoterService} alt=""></img>
           <img src={IMAGES.logoPartTime} alt=""></img>
           <img src={IMAGES.logoNovel} alt=""></img>
           <img src={IMAGES.logoLandServices} alt=""></img>
           <img src={IMAGES.logoGovtServices} alt=""></img>
           <img src={IMAGES.logoGovtJob} alt=""></img>
       </div>
            
       
    );
}
 
export default home;