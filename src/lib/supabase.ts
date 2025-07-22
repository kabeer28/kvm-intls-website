import { createClient } from '@supabase/supabase-js';

// In Vite, environment variables need to be prefixed with VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dihhlkyzsjjmainlszha.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGhsa3l6c2pqbWFpbmxzemhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3OTAxMjIsImV4cCI6MjA2NzM2NjEyMn0.HoA0Qlx-h_tT7MH10ea56FuJqVx6SckZy-JJxaG0MS4';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to submit contact form data to Supabase
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Insert the form data into the 'contact_submissions' table
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          message: formData.message,
        },
      ])
      .select();

    if (error) throw error;

    return { 
      success: true, 
      data: data?.[0] || null,
      message: 'Your message has been sent successfully!'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      error: error instanceof Error ? error : new Error('Failed to submit form'),
      message: 'There was an error sending your message. Please try again.'
    };
  }
}

// Function to create the contact_submissions table if it doesn't exist
export async function ensureContactTable() {
  try {
    const { error } = await supabase.rpc('create_contact_table_if_not_exists');
    
    if (error) {
      console.warn('Error ensuring contact table exists:', error);
      return { success: false, error };
    }
    
    return { success: true, error: null };
  } catch (error) {
    console.error('Error in ensureContactTable:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error : new Error('Unknown error ensuring contact table') 
    };
  }
}