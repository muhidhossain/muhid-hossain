import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { useForm } from 'react-hook-form';

const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const YOUR_USER_ID = process.env.REACT_APP_YOUR_USER_ID;

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const onMouseOver = (data) => {
    console.log(data);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  // Function for sending email
  const sendEmail = (e) => {
    if (Object.keys(errors).length === 0) {
      e.preventDefault();
      emailjs
        .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error);
          }
        );
      e.target.reset();
    } else {
      console.log('error');
    }
  };

  return (
    <div className="container contact-area">
      <div className="contact-heading">
        <h4>CONTACT</h4>
      </div>
      <div>
        <form
          className="contact-form"
          onSubmit={
            Object.keys(errors).length === 0 ? sendEmail : preventDefault
          }
        >
          <div>
            <label>Name</label>
            {errors.user_name && <span>Name is required*</span>}
          </div>
          <input
            type="text"
            name="user_name"
            ref={register({ required: true })}
          />
          <div>
            <label>Email</label>
            {errors.user_email && <span>Enter a valid email*</span>}
          </div>
          <input
            type="email"
            name="user_email"
            ref={register({
              required: true,
              pattern: /(.+)@(.+){2,}\.(.+){2,}/,
            })}
          />

          <div>
            <label>Message</label>
            {errors.message && <span>Kindly write your message*</span>}
          </div>
          <textarea name="message" ref={register({ required: true })} />
          <div>
            <input
              type="submit"
              value="Send"
              onMouseOver={handleSubmit(onMouseOver)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
