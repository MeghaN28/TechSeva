import React from 'react';
import IMAGES from '../../images/index';
import video from '../../images/Google_Earth_Trend_of_India_❤️4k_full_screen_WhatsApp_status_Video___Incredible_India_status(4K).webm';
import './Home.css';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Adhar from '../../components/Adhar/Adhar';
import Marquee from "react-fast-marquee";
import Box from '@material-ui/core/Box';
import myVideo from '../.././images/india.mp4';
//imimport video from './images/india.mp4';port Header from '../../components/Header/Header';
const UseStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 250,
  },
});
export default function home() {
  const classes = UseStyles();
    return (
      <div>
    
        <video controls autoPlay loop muted style={{
          width:"100%",
          left:"50%",
          top:"400",
          bottom:"800",
          objectFit:"cover",
          transform:"translate(-50%,-50%)",
          zIndex:"-1",
          position: "fixed",
          width: "500",
          height: "100%",
          backgroundSize: "cover"}}>
          <source src={myVideo} type="video/mp4"></source>
        </video>
         <Marquee>
            <h4>Offers Starting Soon from 1/8/2021 !!! Stay Tuned...!!</h4>
          </Marquee>
          <br/>
         <h2><center>Providing The Online Services to our Customers With All Features</center></h2><br/>
            <div class="element" style={{opacity: .8}}>

                    <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={IMAGES.logoGovtJob}
                    title="Government Job"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Government Jobs
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    There are several terms, words, and phrases associated with government job recruitment in India (known as Sarkari Naukri), therefore we must be aware of their definitions, descriptions, and meanings. If a Government Jobs vacancy Recruitment lexicon is developed, these words may be included.
                    The government's specific activity or function. For the purposes of recruitment, a government job is defined as a specific position in any government agency or organisation that performs work on behalf of the government. As a result, a government job is a position that executes on behalf of the government.

                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
              </Card>
        </div>
        <div class="element" style={{opacity: .8
        }}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={IMAGES.logoRationCard}
            title="Ration Card Services"
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Ration Card Services
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Ration cards are an official document issued by state governments in India to households that are eligible to purchase subsidised food grain from the Public Distribution System under the National Food Security Act (NFSA). They also serve as a common form of identification for many Indians.[1]

Under the NFSA, all state governments in India have to identify households that are eligible for purchasing subsidised food grain from the Public Distribution System and provide them with ration cards. There are two types of ration cards under NFSA:[2]
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
        </CardActions>
      </Card>
      </div>
      <div class="element" style={{opacity: .8}}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={IMAGES.logoGovtServices}
            title="GovtServices"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Government Services
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Government services refers to development that provides municipal or federal government services to the general public; however, this use class excludes protective and emergency services, minor and large impact utility service providers, and public education services. Taxation offices, courthouses, postal distribution offices, manpower and employment offices are all common applications.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        
        </CardActions>
      </Card>
      </div>
      <div class="element" style={{opacity: .8}}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={IMAGES.logoLandServices}
            title="Land Services"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Land Services
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Property management is also the management of personal property, equipment, tooling, and physical capital assets that are acquired and used to build, repair, and maintain end item deliverables. Property management involves the processes, systems, and manpower required to manage the life cycle of all acquired property as defined above including acquisition, control, accountability, responsibility, maintenance, utilization, and disposition.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
      </div>
      <div class="element" style={{opacity: .8}}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={IMAGES.logoNovel}
            title="Novels"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Novels
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            A novel is a long fictional storey that depicts personal experiences. In the current period, the book is generally written in a literary writing style. A textbook is a book that contains a complete collection of material in a field of study in order to explain it. Textbooks and other books used in schools are referred to as schoolbooks.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
      
        </CardActions>
      </Card>
      </div>
      <div class="element" style={{opacity: .8}}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={IMAGES.logoPartTime}
            title="Parttime Services"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Part Time Job Services
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            A part-time work is one with less hours per week than a full-time one. They are scheduled to work in shifts. Rotational shifts are common. Workers are classified as part-time if they work less than 30 hours per week on a regular basis. According to the International Labour Organization, the number of part-time workers in most developed nations has grown from one-quarter to half in the last 20 years.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
      </div>
      <div class="element" style={{opacity: .8}}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={IMAGES.logoVoterId}
            title="Voter IdServices"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Voter ID Services
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            The Indian voter ID card is an identity document issued by the Election Commission of India to Indian citizens over the age of 18 who are voting in municipal, state, and national elections. It primarily serves as proof of identity for Indian citizens voting in municipal, state, and national elections. It can also be used to prove your identity, residence, and age for other purposes, such as purchasing a mob.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
      </div>
      <div class="element" style={{opacity: .8}}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={IMAGES.logoVoterService}
            title="Voter Services"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Voter Services
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            In some jurisdictions, enrollment may require an application being made by an eligible voter and registered persons to re-register or update registration details when they change residence or other relevant information changes. In some jurisdictions, an enrollment agency may receive change of address information from other government agencies, which is used to automatically update voter details
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
      </div>
      <div class="element" style={{opacity: .8}}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={IMAGES.logoPan}
            title="Pam Services"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Pan Card Services
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            PAN is a ten-digit alphanumeric number provided by the Income Tax Government in the form of a laminated card to any "person" who applies for it or to whom the department allots the number without an application.
            PAN allows the department to link all of the "person's" transactions to the department. Tax payments, TDS/TCS credits, and refunds of insufficient funds are examples of these transactions.

            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
      <br/>
      </div>
      <div>
      <Marquee>
            <h5>Scrolling text here !!... Scroll...</h5>
          </Marquee>
          </div>
          </div>
      
      );
    }
    
        