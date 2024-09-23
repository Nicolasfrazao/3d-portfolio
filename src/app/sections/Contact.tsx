'use client'

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

/**
 * Contact is a React component that renders a contact form.
 *
 * The form asks for the user's name, email address, and message.
 * When the form is submitted, the component sends an email to
 * the email address specified in the VITE_APP_EMAILJS_TO_EMAIL
 * environment variable using EmailJS.
 *
 * The component also displays an alert message if the email
 * sending fails, or if the email sending succeeds.
 *
 * The alert message is displayed for 3 seconds before being
 * automatically hidden.
 *
 * The component also displays a loading indicator while the
 * email is being sent.
 *
 * The component uses the useAlert hook to manage the alert
 * message state.
 *
 * The component uses the useRef hook to create a reference to
 * the form element.
 *
 * The component uses the useState hook to keep track of the
 * form's state.
 */
const Contact = () => {
  /**
   * formRef is a reference to the form element.
   */
  const formRef = useRef();

  /**
   * { alert, showAlert, hideAlert } is an object returned by the
   * useAlert hook.
   *
   * The object has three properties: alert, showAlert, and hideAlert.
   *
   * The alert property is an object that has three properties: show,
   * text, and type.
   *
   * The show property is a boolean that indicates whether the
   * alert should be shown or hidden.
   *
   * The text property is a string that contains the text to be
   * displayed in the alert message.
   *
   * The type property is a string that indicates the type of
   * alert message to be displayed. The type can be either 'success'
   * or 'danger'.
   *
   * The showAlert function is a function that updates the alert
   * state by setting the show property to true and the text and
   * type properties to the values passed as arguments.
   *
   * The hideAlert function is a function that updates the alert
   * state by setting the show property to false.
   */
  const { alert, showAlert, hideAlert } = useAlert();

  /**
   * loading is a boolean that indicates whether the email is
   * being sent or not.
   */
  const [loading, setLoading] = useState(false);

  /**
   * form is an object that contains the form's state.
   *
   * The form object has three properties: name, email, and message.
   *
   * The name property is a string that contains the user's name.
   *
   * The email property is a string that contains the user's email
   * address.
   *
   * The message property is a string that contains the user's
   * message.
   */
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  /**
   * handleChange is an event handler function that updates the
   * form state when the user changes the value of any of the
   * form's fields.
   *
   * The function takes an event object as an argument.
   *
   * The function updates the form state by setting the property
   * of the form object that corresponds to the name of the
   * changed field to the value of the changed field.
   */
  const handleChange = ({ target: { name, value } } : { target: { name: string; value: string }}) => {
    setForm({ ...form, [name]: value });
  };

  /**
   * handleSubmit is an event handler function that is called when
   * the user submits the form.
   *
   * The function takes an event object as an argument.
   *
   * The function prevents the default form submission behavior by
   * calling the preventDefault method of the event object.
   *
   * The function sets the loading state to true.
   *
   * The function then sends an email to the email address specified
   * in the VITE_APP_EMAILJS_TO_EMAIL environment variable using
   * EmailJS.
   *
   * The function then updates the alert state by calling the
   * showAlert function with the text and type properties set to
   * the values returned by the EmailJS send function.
   *
   * The function then sets the loading state to false.
   *
   * The function then calls the hideAlert function after 3 seconds
   * to hide the alert message.
   *
   * The function then resets the form state to its initial state.
   */
  const handleSubmit = (e) : void => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Nicolas Frazao',
          from_email: form.email,
          to_email: 'nicolas_frazao@hotmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message ',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message ",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
