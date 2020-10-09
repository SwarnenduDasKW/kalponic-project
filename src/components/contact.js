import React from "react";
import { TextField, Button } from "@material-ui/core";
import "../styles/contact.css";

function Contact(props) {
  return (
    <div className="contact" id="contact">
      <h2>Contact us</h2>
      <hr />
      <p>
        Have questions? We will be more than happy to assist you. Do reach out
        to us over email or give us a call.
      </p>
      <div className="contact__contacts">
        <p>{props.data ? props.data.address : "loading..."}</p>
        <p>{props.data ? props.data.email : "loading..."}</p>
        <p>{props.data ? props.data.phone.map((d, i) => d) : "loading..."}</p>
      </div>
      <h3>Leave us a message</h3>

      <form name="sentMessage" id="contactForm">
        <div className="contact__info">
          <TextField
            autoFocus
            required
            margin="dense"
            id="outlined-required"
            label="Name"
            variant="outlined"
          />
          <TextField
            required
            margin="dense"
            id="outlined-required"
            label="Email"
            type="email"
            variant="outlined"
          />
        </div>
        <div className="contact__message">
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            label="Message"
            multiline
            rowsMax={4}
            variant="outlined"
          />
        </div>
        <Button variant="contained" className="contact__submit">
          Learn More
        </Button>
      </form>
      <h3>Follow us</h3>
      <div className="contact__social"></div>
    </div>
  );
}

export default Contact;
