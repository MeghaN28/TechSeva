import React from 'react';
import IMAGES from '../../images/index';
import video from '../../images/Google_Earth_Trend_of_India_❤️4k_full_screen_WhatsApp_status_Video___Incredible_India_status(4K).webm';
import './Service.css';
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
export default function service() {
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
          <br/>
            <div class="element" style={{opacity: .6}}>
                
                    <Card className={classes.root} >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={IMAGES.logoGovtJob}
                    title="Government Services"
                    
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Government Job Services
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
        <Button size="small" color="primary">
          Click here to proceed
        </Button>
        <Button size="small" color="primary"   onPress={() => 'https://www.youtube.com/watch?v=A0ISwM8fFk8'}>
          Click here to Watch Video
        </Button>
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
            title="Government Job Services"
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Government Services
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          Click here to proceed
        </Button>
        <Button size="small" color="primary">
          Click here to Watch Video
        </Button>
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
            Ration Card Services
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          Click here to proceed
        </Button>
        <Button size="small" color="primary">
          Click here to Watch Video
        </Button>
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
              Bank Account Opening
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          Click here to proceed
        </Button>
        <Button size="small" color="primary">
          Click here to Watch Video
        </Button>
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
           Part Time Jobs
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          Click here to proceed
        </Button>
        <Button size="small" color="primary">
          Click here to Watch Video
        </Button>
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
             Online Courses
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          Click here to proceed
        </Button>
        <Button size="small" color="primary">
          Click here to Watch Video
        </Button>
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
            Novel
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          Click here to proceed
        </Button>
        <Button size="small" color="primary">
          Click here to Watch Video
        </Button>
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
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          Click here to proceed
        </Button>
        <Button size="small" color="primary">
          Click here to Watch Video
        </Button>
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
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          Click here to proceed
        </Button>
        <Button size="small" color="primary">
          Click here to Watch Video
        </Button>
      </CardActions>
      </Card>
      <br/>
      </div>
      <div>
          </div>
          </div>
      
      );
    }
    
        