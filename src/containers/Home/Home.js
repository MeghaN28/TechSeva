import React from 'react';
import IMAGES from '../../images/index';
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
//import Header from '../../components/Header/Header';
const UseStyles = makeStyles({
  root: {
    maxWidth: 340,
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
                    There are several terms, words, and phrases associated with government job recruitment in India (known as Sarkari Naukri), therefore we must be aware of their definitions, descriptions, and meanings. If a Government Jobs vacancy Recruitment lexicon is developed, these words may be included.
                    The government's specific activity or function. For the purposes of recruitment, a government job is defined as a specific position in any government agency or organisation that performs work on behalf of the government. As a result, a government job is a position that executes on behalf of the government.

                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Link href="/Adhar" onClick={Adhar}>
                    Learn More
                  </Link>
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
            Government services refers to development that provides municipal or federal government services to the general public; however, this use class excludes protective and emergency services, minor and large impact utility service providers, and public education services. Taxation offices, courthouses, postal distribution offices, manpower and employment offices are all common applications.
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
            A novel is a long fictional storey that depicts personal experiences. In the current period, the book is generally written in a literary writing style. A textbook is a book that contains a complete collection of material in a field of study in order to explain it. Textbooks and other books used in schools are referred to as schoolbooks.
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
            A part-time work is one with less hours per week than a full-time one. They are scheduled to work in shifts. Rotational shifts are common. Workers are classified as part-time if they work less than 30 hours per week on a regular basis. According to the International Labour Organization, the number of part-time workers in most developed nations has grown from one-quarter to half in the last 20 years.
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
            The Indian voter ID card is an identity document issued by the Election Commission of India to Indian citizens over the age of 18 who are voting in municipal, state, and national elections. It primarily serves as proof of identity for Indian citizens voting in municipal, state, and national elections. It can also be used to prove your identity, residence, and age for other purposes, such as purchasing a mob.
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
      <div class="element">
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
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
     
     
      </div>
      );
    }
    
        