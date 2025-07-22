interface EmailData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // For development/demo purposes, we'll simulate the email sending
    // In production, this would connect to your actual email service
    
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};

// Fallback email service using EmailJS (alternative approach)
export const sendEmailViaEmailJS = async (data: EmailData) => {
  try {
    // This would require EmailJS setup
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      company: data.company,
      phone: data.phone,
      message: data.message,
      to_email: 'info@kvmintls.com'
    };

    // EmailJS would be initialized here
    // await emailjs.send('service_id', 'template_id', templateParams, 'public_key');
    
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};