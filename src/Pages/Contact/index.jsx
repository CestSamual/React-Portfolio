import React from "react";
import ContactForm from "../../Components/ContactForm";
function Contact(){
    return(
        <section className= "form">

            <div className= "row justify-content-center" id="form-container">
              <ContactForm/>  
            </div>

        </section>
    )
}
export default Contact