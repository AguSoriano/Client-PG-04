import styled from "styled-components"; 
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '200vh',
    },
    footer: {
        display: "flex",
        justifyContent: "center",
        color: '#ffffff',
        padding: theme.spacing(4, 2),
        marginTop: 'auto',
        backgroundColor: "#000000",
    },
    contenedor: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // width: "25%"
    },
    contenedor: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: "white"
    },
    facebook: {
        color: '#fafafa',
        '&:hover': {
            color: '#0778E9'
        },
    },
    instagram: {
        color: '#fafafa',
        '&:hover': {
            color: '#D92E6C'
            // color: '#F28249'
        },
    },
    linkedin: {
        color: '#fafafa',
        '&:hover': {
            color: '#0077B5'
        },
    },
    link: {
        color: '#fafafa'
    },
}));
function Copyright() {
    return (
        <Typography variant="body2" color="#fafafa">
            {'Copyright © '}
           {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const FooterContainer = styled.div`
width: 100%;
background: radial-gradient(circle, #202020 0%, #151515  100%);
padding: 20px 20px;

`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1024px;
    margin: 0 auto;
`

// export const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     max-width: 1024px;
//     margin: 0 auto;
//     /* background: red; */
// `

const StyledText = styled.a`
    font-size: 0.8rem;
    color: #FFF;
    margin: 0 4px;
    margin-bottom: 20px;
    padding-top: 10px;
    &:hover {
      color: #7ECAFF;
      transition: 0.1s ease-in;
  }
`
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  @media(max-width: 375px){
    margin-left: 30px;
  }
`;

export const FooterTitle = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: bold;
  font-family: ubuntu;
`;

export const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Icon = styled.i`
    font-size: 18px;
    margin-right: 16px;
`
const StyledImage = styled.div`
    margin-left: -10px;
`

const Footer = () => {
    const classes = useStyles();

    return (
<FooterContainer>
            <StyledContainer>
                <FooterRow>
                <Container maxWidth="sm" className={classes.contenedor}>
                    <Typography variant="body1">Cane-Food</Typography>
                    <Copyright />
                    <br></br>
                    <StyledText href="/newsletter">BOLETÍN</StyledText>
                </Container>
                    <FooterColumn>
                    <FooterTitle>Acerca de</FooterTitle>
                        
                        <StyledText href="/privacy">Política de privacidad</StyledText>
                        <StyledText href="/terms">Términos de uso</StyledText>
                    </FooterColumn>
                    <FooterColumn>
                    <FooterTitle>Contacto</FooterTitle>
                        <StyledText href="#">Whatsapp</StyledText>
                        <StyledText href="#">Email</StyledText>
                    </FooterColumn>
                    <FooterColumn>
                    <Container maxWidth="sm" className={classes.contenedor}>
                    <Container>
                        <IconButton href="https://www.instagram.com/canemilanesasdesoja/?igshid=YmMyMTA2M2Y%3D" className={classes.instagram} >
                            <InstagramIcon style={{ fontSize: 50 }} />
                        </IconButton>
                        <IconButton href="https://www.facebook.com/cane.milanesasdesoja" className={classes.facebook}>
                            <FacebookIcon style={{ fontSize: 50 }} />
                        </IconButton>

                    </Container>
                </Container>
                    </FooterColumn>
                </FooterRow>
            </StyledContainer>
</FooterContainer>
    )
}

export default Footer;