-- Create contact_submissions table if it doesn't exist
CREATE OR REPLACE FUNCTION create_contact_table_if_not_exists() 
RETURNS void AS $$
BEGIN
  -- Create the table if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'contact_submissions') THEN
    CREATE TABLE public.contact_submissions (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      message TEXT NOT NULL
    );
    
    -- Enable Row Level Security
    ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
    
    -- Create policies to control access
    CREATE POLICY "Enable read access for all users" 
    ON public.contact_submissions 
    FOR SELECT 
    TO anon, authenticated 
    USING (true);
    
    CREATE POLICY "Enable insert for all users" 
    ON public.contact_submissions 
    FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);
    
    -- Grant necessary permissions
    GRANT ALL ON public.contact_submissions TO anon, authenticated;
    
    RAISE NOTICE 'Created contact_submissions table';
  ELSE
    RAISE NOTICE 'contact_submissions table already exists';
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Execute the function to create the table
SELECT create_contact_table_if_not_exists();
