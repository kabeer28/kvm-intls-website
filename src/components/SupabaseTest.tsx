import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function SupabaseTest() {
  const [status, setStatus] = useState('Checking connection...');
  const [envVars, setEnvVars] = useState({
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL ? '✅ Set' : '❌ Missing',
    supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing',
    tableExists: 'Checking...'
  });

  useEffect(() => {
    async function checkConnection() {
      try {
        console.log('Environment variables:', {
          VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL ? '✅ Set' : '❌ Missing',
          VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'
        });

        const { data, error } = await supabase.from('contact_submissions').select('*').limit(1);
        
        if (error) {
          throw error;
        }
        
        setEnvVars(prev => ({ ...prev, tableExists: '✅ Found' }));
        setStatus('✅ Connected to Supabase successfully!');
        console.log('Supabase connection successful. Sample data:', data);
      } catch (error) {
        console.error('Supabase connection error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        
        if (errorMessage.includes('does not exist')) {
          setEnvVars(prev => ({ ...prev, tableExists: '❌ Not found' }));
        }
        
        setStatus(`❌ Connection error: ${errorMessage}`);
      }
    }

    checkConnection();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      zIndex: 9999,
      maxWidth: '350px',
      fontSize: '14px',
      fontFamily: 'monospace',
      border: '1px solid #e0e0e0'
    }}>
      <div style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '16px' }}>Debug Information</div>
      <div style={{ marginBottom: '5px' }}><strong>Supabase URL:</strong> {envVars.supabaseUrl}</div>
      <div style={{ marginBottom: '5px' }}><strong>Supabase Key:</strong> {envVars.supabaseKey}</div>
      <div style={{ marginBottom: '5px' }}><strong>Table Status:</strong> {envVars.tableExists}</div>
      <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #eee' }}>
        <strong>Status:</strong> {status}
      </div>
    </div>
  );
}
