import React from "react";
import {Container} from './styles'
import { accessUrl } from "../../services/spotify";
import LogoSpotify from '../../images/login/spotify-login-logo.jpg'

const Login = () => {
  return (
    <Container>
      <img
        src={LogoSpotify}
        alt="Spotify Logo"
      />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </Container>
  );
}

export default Login;