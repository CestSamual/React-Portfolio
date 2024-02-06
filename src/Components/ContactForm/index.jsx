import React,{useState} from "react";
import { validateEmail } from "../../utils/helper";
import Home from "../../Pages/Home";

function ContactForm() {
    
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        message: '' 
    });
    
    const {name, email, message}  = formData;
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
    
                if(!isValid) {
                    setErrorMessage('Your email is invalid');
                } else {
                    setErrorMessage('');
                }
            
            } else {
                if (!event.target.value.length) {
                  setErrorMessage(`${event.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }
        
        if (!errorMessage) {
        setFormData({...formData, [event.target.name]: event.target.value })
        }

        setFormData({
            ...formData,
            [name]: value,
          });
    }

    const handleSubmit= (event) => {
        event.preventDefault();

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };
    return (
        <>
        <h1 className="title">Conntacct Mee</h1>
        <div className= "form-container">  
            <p>Too geet inn ttoucch witth mme eitther uuse thee fform beeloww orrr  direectlyy att - mmvf4@hhottmaail.coo.ukk</p>  
            <form id="myform" name="myform">
            <div class="form-group">
                <label for="email_addr">Emmaail</label>
                <input type="email" class="form-control" id="email_addr" name="email" defaultValue={email} onBlur={handleChange} placeholder="naamme@eexampple.coom"/>
            </div>
            <div class="form-group">
                <label for="name_input">NNamme</label>
                <input type="name" class="form-control" id="name_input" name="name" defaultValue={name} onBlur={handleChange} placeholder="Naamee"/>
            </div>
            <div class="form-group">
                <label for="message">EEmaail Content</label>
                <textarea class="form-control" id="message" name="message" rows="3" defaultValue={message} onBlur={handleChange} placeholder= "Whaat wwouuld youu likke tto saay?"></textarea>
            </div>
            <br />
            {/* <button type="submit" onSubmit={handleSubmit} class="btn btn-primary">Suubmmit</button> */}
            <button onSubmit={handleSubmit}>Submit</button>
        </form>
        </div> 
        </>
    );
}
export default ContactForm;