//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import "./About.css"

function About() {
    let imageStyle = {
        image: {
            height: '200px',
            width: '300px',
            padding: '10px',
            display: 'center',
            alignself: 'center'
        }
    }
    return (
        <div>
            <h1>About Us</h1>
            <p style={{color:'black'}}>Techseva is a programme aimed at preparing India for a technologically
            oriented future and providing jobs to all citizens.
            We will provide current offers to help you save money and gain additional
            advantages, and we will deliver quality services and ongoing support to all of
            our customers. All government services, government and central
            government job updates, online courses, part-timer jobs, recharges,
            government/private company registration, iso registration, novel book, and
            study books and etc.., are among the services offered by techseva, an online
            platform.</p>
            <div class="centered">
                <div class="cards">
                    <div className="card" style={{ width: "40vw" }}>
                        <div className="card-header" style={{ fontWeight: 'bold' }}>VISION</div>
                        <div className="card-body">
                            <p className="card-text"><p> to create every opportunity, growth, and impact in every community and in all of India's states.</p></p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "40vw" }}>
                        <div className="card-header" style={{ fontWeight: 'bold' }}>MISSION</div>
                        <div className="card-body">
                            <p className="card-text">to deliver high-quality services for all internet services owing to the availability of access throughout India</p></div>
                    </div>
                </div>
            </div>
            </div>
  );
}

export default About;