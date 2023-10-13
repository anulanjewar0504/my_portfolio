// Server-side code (Node.js)
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://pijomvppotzjrcolvlxk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpam9tdnBwb3R6anJjb2x2bHhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxNjMzMjMsImV4cCI6MjAxMjczOTMyM30.rS6ObCTeutOtC2kxK9kLzCNrEuOJMwkIdpWMgdxj64o');

// Handle form submission and database interaction
app.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;
    const { data, error } = await supabase.from('FormData').insert([{ Name: name, Email: email, Message: message }]);
    if (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Error');
    } else {
        res.status(200).send('Success');
    }
});
