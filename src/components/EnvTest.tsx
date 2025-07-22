import { useEffect, useState } from 'react';

export default function EnvTest() {
  const [env, setEnv] = useState({
    nodeEnv: '',
    supabaseUrl: '',
    supabaseKey: '',
    allEnv: {}
  });

  useEffect(() => {
    setEnv({
      nodeEnv: import.meta.env.MODE,
      supabaseUrl: import.meta.env.VITE_SUPABASE_URL || 'Not found',
      supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Set (hidden for security)' : 'Not found',
      allEnv: import.meta.env
    });
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      background: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      zIndex: 9999,
      maxWidth: '500px',
      fontSize: '14px',
      fontFamily: 'monospace',
      border: '1px solid #e0e0e0',
      maxHeight: '90vh',
      overflow: 'auto'
    }}>
      <h2 style={{ marginTop: 0 }}>Environment Variables</h2>
      <div style={{ marginBottom: '10px' }}>
        <div><strong>NODE_ENV:</strong> {env.nodeEnv}</div>
        <div><strong>VITE_SUPABASE_URL:</strong> {env.supabaseUrl || 'Not set'}</div>
        <div><strong>VITE_SUPABASE_ANON_KEY:</strong> {env.supabaseKey}</div>
      </div>
      
      <div style={{ marginTop: '15px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
        <h3>All Environment Variables:</h3>
        <pre style={{ 
          background: '#f5f5f5', 
          padding: '10px', 
          borderRadius: '4px',
          maxHeight: '200px',
          overflow: 'auto',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        }}>
          {JSON.stringify(env.allEnv, null, 2)}
        </pre>
      </div>
    </div>
  );
}
