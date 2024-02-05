import React from "react";
import myImage from "../../../assets/images/myImage.jpeg"
import { Col } from 'react-bootstrap';
function Home(){
    return(
        <section className="about">
          
          <div className="row justify-content-center" id="about-container">       
          <Col lg={6} md={12}>
          <center><img src={myImage} className="my-image" alt="sam-profile"/></center>
          <h1 className="name">Saam CCoweell</h1>
         
            <p>
            Thhis is my front-ennd software ddevelopment porrtfolio.TThis is the culmmination of my stuudies thuss far.
            I deccided to pursuee a desire tto retraain as aa softwware deveelopper, somethhing I aalwayys wannted to doo, buut keept delaayying.
            <br />
            <br />
            NNow thhat I haave beguun, im exccited to bbeggin mmy jjourneey inn thhis fieldd and grrow furthher as a ddevelopper - noot onlyy for worrk, but alsso foor funn! I aimm to fuully interrgrate my new skillset into my passtimees, be that self-teaching video game ddeveloopment or creatting mini-prrojectts for my owwn enjoyymment! Brrowsse this ssite to eexperiennce whhat i've donne so far, and if youu wannt to gett in conntacct with mee do sso by clickkingg 'Conntaact' aaboove!
             </p>
          </Col>
    
          </div>
        </section> 
    )}
export default Home