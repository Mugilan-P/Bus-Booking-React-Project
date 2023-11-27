import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
       Blue Bus
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
  {
    img: 'https://www.a1travels.in/assets/images/gallery-02.png',
    title: 'A1 TRAVELS',
    description: 'A1 travels has redefined road travel to a 5 star experience in Safety, luxury, entertainment and ambience. '
  },
  {
    img: 'https://www.no1travels.in/assets/images/gal-02.png',
    title: 'NO.1 AIR TRAVELS',
    description: 'No.1 Air Travels operates long distance coach services in the states of Tamil Nadu, Karnataka and Kerala.'
  },
  {
    img: 'https://i.pinimg.com/originals/16/34/e1/1634e1aef4605ac5e1d4f6abc4878867.jpg',
    title: 'SRS TRAVELS',
    description: 'SRS Travels has made tremendous progress in its chosen field and currently commands a fleet of nearly 5000 vehicles operating on 24/7 basis. '
  },
  {
    img: 'https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/93757/banner_banner.jpg',
    title: 'BLACK PEARL TRANZ',
    description: 'Travelling to places through Blackpearl Tranz is always affordable, convenient, and satisfactory. One of the finest bus operating services.'
  },
  {
    img: 'https://th.bing.com/th/id/OIP.62mLTt8326McuscavYOywQHaDT?w=272&h=156&c=7&r=0&o=5&pid=1.7',
    title: 'ORANGE TRAVELS',
    description: 'We offer luxurious amenities for our customers during their journey which is useful for their journey and make it Comfortable & Safe.'
  },
  {
    img: 'https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/83298/gallery_49719686106_f5d601cae6_b.jpg',
    title: 'SWAMI AYYAPPA TRAVELS',
    description: 'During the journey, we provide various amenities to our passengers such as AC, Water Bottle, Snacks, Blankets & Pillows, Reading Lights, LCD Display, Charging Points etc.,'
  },
  {
    img: 'https://i1.wp.com/mytnstc.com/wp-content/uploads/2018/12/fullsizerender-1.jpg?fit=3835%2C2583&ssl=1',
    title: 'SETC',
    description: 'We run long-distance mofussil services exceeding 300 km and above throughout the state of Tamil Nadu and major cities in adjoining states of Andhra Pradesh, Karnataka, Kerala and the union territory of Puducherry.'
  },
  {
    img: 'https://www.parveentravels.com/assets/images/routes/route-bus.png',
    title: 'PARVEEN TRAVELS',
    description: 'Today Parveen Travels is the only, single largest fleet operator with ISO certified one stop shop for travel needs.'
  },
  {
    img: 'https://s3-ap-southeast-1.amazonaws.com/rbplus/BusImage/Domestic/5483_35_2.png',
    title: 'VRL TRAVELS',
    description: 'Market Leader in Karnatakas Private Passenger Travel Industry. Our customer have the choice of several bus types, viz. AC / Non A/c Sleeper coach, AC / Non A/c Semi Sleeper / Seater, etc.'
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Booking() {
  const navigation  = useNavigate()
  return (
    <div>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              
            >
              BLUE BUS
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            BlueBus is the World's largest online bus ticket booking service trusted by over 35 million happy customers globally.
            BlueBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={()=> navigation("/contactus")}>CONTACT US</Button>
              <Button to="/login"  onClick={()=> navigation("/login")} class="btn btn-outline-primary my-2 my-sm-0" type="primary">LOGIN</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, i) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                     image={card.img}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                     {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">SEE BUSES</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
    </div>
  );
}
