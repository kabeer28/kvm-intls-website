import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

// Demo component to simulate email sending without actual backend
const EmailServiceDemo: React.FC<{ formData: any; onSuccess: () => void; onError: (error: string) => void }> = ({ 
  formData, 
  onSuccess, 
  onError 
}) => {
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateEmailSending = async () => {
    setIsSimulating(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success (90% success rate for demo)
      if (Math.random() > 0.1) {
        console.log('📧 Email would be sent with the following data:');
        console.log('To: info@kvmintls.com');
        console.log('Subject: Quote Request from', formData.firstName, formData.lastName);
        console.log('Content:', {
          name: `${formData.firstName} ${formData.lastName}`,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toISOString()
        });
        
        onSuccess();
      } else {
        throw new Error('Simulated network error');
      }
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Failed to send email');
    } finally {
      setIsSimulating(false);
    }
  };

  React.useEffect(() => {
    simulateEmailSending();
  }, []);

  return null;
};

export default EmailServiceDemo;