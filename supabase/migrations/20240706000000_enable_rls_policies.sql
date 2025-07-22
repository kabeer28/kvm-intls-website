-- Enable RLS on the contact_submissions table
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert into the contact_submissions table
CREATE POLICY "Enable insert for all users" 
ON public.contact_submissions 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Create a policy that allows anyone to select from the contact_submissions table
CREATE POLICY "Enable read access for all users"
ON public.contact_submissions
FOR SELECT
TO anon, authenticated
USING (true);
