import React from "react";
import { TextField, Button } from "@material-ui/core";
import "../styles/contact.css";
import { LocationOn, Mail, Phone } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact(props) {
  return (
    <div className="contact" id="contact">
      <div className="contact__contactheader">
        <h2 className="contact__contactus">Contact us</h2>
        <hr />
        <p>
          Have questions? We will be more than happy to assist you. Do reach out
          to us over email or give us a call.
        </p>
      </div>
      <div className="contact__contactsgroup">
        <div className="contact__contacts">
          <LocationOn />
          <p>{props.data ? props.data.address : "loading..."}</p>
        </div>
        <div className="contact__contacts">
          <Mail />
          <p>{props.data ? props.data.email : "loading..."}</p>
        </div>
        <div className="contact__contacts">
          <Phone />
          <div className="contact__phones">
            {props.data
              ? props.data.phone.map((d, i) => <Typography>{d}</Typography>)
              : "loading..."}
          </div>
        </div>
      </div>
      <div className="contact__input">
        <form name="sentMessage" id="contactForm">
          <h3>Leave us a message</h3>
          <TextField
            className="contact__nameemail"
            required
            margin="dense"
            id="outlined-required"
            label="Name"
            variant="outlined"
          />

          <TextField
            className="contact__nameemail"
            required
            margin="dense"
            id="outlined-required"
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            className="contact__msg"
            id="outlined-multiline-flexible"
            helperText="Required"
            required
            label="Message"
            rows="15"
            multiline
            rowsMax={4}
            variant="outlined"
            margin="dense"
          />
        </form>
        <Button variant="contained" className="contact__submit">
          Send Message
        </Button>
      </div>
      <div className="contact__social">
        <h3>Follow us</h3>
        <FacebookIcon fontSize="large" />
        <InstagramIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
        <YouTubeIcon fontSize="large" />
        <PinterestIcon fontSize="large" />
        <LinkedInIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Contact;
