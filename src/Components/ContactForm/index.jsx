import React,{useState} from "react";
import { validateEmail } from "../../utils/helper";
import Home from "../../Pages/Home";

function ContactForm(){
    
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    
  const {name, email, message}  = formState;
    
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('Your email is invalid');
                } else {
                    setErrorMessage('');
                }
            
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }
        
        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

    setFormState({
        name: "",
        email: "",
        message: "",
    });
  
    }
    return(
        <>
        <h1 className="title">Conntacct Mee</h1>
   <div className= "form-container">  
   <p>Too geet inn ttoucch witth mme eitther uuse thee fform beeloww orrr  direectlyy att - mmvf4@hhottmaail.coo.ukk</p>  
<form id="myform" name="myform" method="post">
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
    <button type="submit" onSubmit={handleSubmit} class="btn btn-primary">Suubmmit</button>
</form>
</div> 
    </>)
}
export default ContactForm