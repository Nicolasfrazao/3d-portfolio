import { useState } from 'react';

/**
 * The useAlert hook is used to manage the state of an alert message in a UI
 * component. It provides three functions: showAlert, hideAlert, and a state
 * object called "alert" which contains the text of the alert message, its type
 * (which can be either "danger" or "success"), and a boolean show property that
 * indicates whether the alert should be shown or hidden.
 *
 * The initial state of the alert is an object with the properties show = false,
 * text = "", and type = "danger". The showAlert function updates the state to
 * show the alert with the given text and type. The hideAlert function updates
 * the state to hide the alert and reset the text and type to their initial
 * values.
 *
 * The useAlert hook is used to manage the alert message in the Contact Me
 * section of the website. It's used to show an error message if the user tries
 * to send a message without entering any text, and to show a success message if
 * the message is sent successfully.
 */
const useAlert = () => {
  /**
   * The initial state of the alert is an object with the properties show = false,
   * text = "", and type = "danger". The state is stored in the React state
   * hook useState.
   */
  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

  /**
   * The showAlert function updates the state to show the alert with the given
   * text and type. The text and type arguments are optional and default to
   * "" and "danger" respectively if not provided.
   */
  const showAlert = ({ text = '', type = 'danger' }) =>
    setAlert({ show: true, text, type });

  /**
   * The hideAlert function updates the state to hide the alert and reset the
   * text and type to their initial values.
   */
  const hideAlert = () =>
    setAlert({ show: false, text: '', type: 'danger' });

  /**
   * The useAlert hook returns an object with the state of the alert, the
   * showAlert function, and the hideAlert function.
   */
  return { alert, showAlert, hideAlert };
};

/**
 * The default export of the useAlert hook is the hook itself.
 */
export default useAlert;


