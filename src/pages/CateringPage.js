import React, { Component } from 'react';
import { Banner, Header, CateringMenu, About, Message, Footer, Subscribe } from '../components';
import { CateringWrapper, OnlineOrder } from '../styled-components/pages/catering';

class Catering extends Component {
    scroll = (id) => {
      if(id == "home"){
        window.location.href = "/"
      } else {
        window.location.href = "/" + id;
      }
    }
    render(){
      return (
          <CateringWrapper>
            <Banner id="catering"/>
            <Header scroll={this.scroll}/>
            <About noLogo noHexes>
              <h2>Subscription / Catering Program</h2>
              <p>We are capable of providing premium coffee to anybody and any business within the Salt Lake valley. Please consider our catering menu and if you are interested, fill out the form below.</p>
            </About>
            <CateringMenu/>
            <Subscribe/>
            <Message noMessage/>
            <Footer/>
          </CateringWrapper>
      );
    }
}

export default Catering;
