import React from 'react';
import styles from './Contact.module.scss';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const YOUR_USER_ID = process.env.REACT_APP_YOUR_USER_ID;

const Contact = () => {
  const [open, setOpen] = React.useState({ open: false, message: '' });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, data, YOUR_USER_ID).then(
      (res) => {
        setOpen((prevState) => ({
          ...prevState,
          open: true,
          message: 'Message sent successfully',
        }));
        reset();
      },
      (err) => {
        setOpen((prevState) => ({
          ...prevState,
          open: true,
          message: 'Something went wrong',
        }));
      }
    );
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={`container ${styles.contact}`} id="contact">
      <div className={styles.contact__heading}>
        <h4>CONTACT</h4>
      </div>
      <div>
        <form
          className={styles.contact__form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label>Name</label>
            {errors.user_name?.type === 'required' && (
              <span>Name is required</span>
            )}
            {errors.user_name?.type === 'minLength' && (
              <span>Name must be at least three characters long</span>
            )}
          </div>
          <input
            type="text"
            {...register('user_name', { required: true, minLength: 3 })}
          />
          <div>
            <label>Email</label>
            {errors.user_email?.type === 'required' && (
              <span>Email is required</span>
            )}
            {errors.user_email?.type === 'pattern' && (
              <span>Enter a valid email</span>
            )}
          </div>
          <input
            type="email"
            {...register('user_email', {
              required: true,
              pattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          <div>
            <label>Message</label>
            {errors.message?.type === 'required' && (
              <span>Message is required</span>
            )}
          </div>
          <textarea {...register('message', { required: true })} />
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={open?.message}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default Contact;
