// utils/email.js
import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
  const serviceID = import.meta.env.VITE_APP_SERVICE_ID;
  const templateID = import.meta.env.VITE_APP_TEMPLATE_ID;
  const userID = import.meta.env.VITE_APP_USER_ID;

  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      formData,
      userID
    );
    return response;
  } catch (error) {
    console.log(error);
    console.error('Error sending email:', error);
    throw error;
  }
};
