import React from 'react';
import IMAGES from '../../images/index';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Header from '../../components/Header/Header';
const UseStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function home() {
  const classes = UseStyles();
    return (
      <div>
         <h3>Providing The Online Services to our Customers With All Features</h3><br/>
            <div class="element">
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
                      Information if any
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
        </div>
        <div class="element">
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
              Information if any
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
      <div class="element">
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
              Information if any
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
      <div class="element">
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
              Information if any
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
      <div class="element">
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
              Information if any
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
      <div class="element">
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
              Information if any
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
      <div class="element">
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
              Information if any
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
      <div class="element">
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
              Information if any
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
     
      </div>
      );
    }
    
        