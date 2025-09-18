const express = require('express');
const path = require('path');
const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to get certificates data
app.get('/api/certificates', (req, res) => {
    const certificates = [{
            id: 1,
            title: "JavaScript Certification",
            image: "/images/cert1.jpg",
            issuer: "Tech Academy",
            date: "2024"
        },
        {
            id: 2,
            title: "Node.js Certification",
            image: "/images/cert2.jpg",
            issuer: "Web Institute",
            date: "2024"
        }
    ];
    res.json(certificates);
});

// Contact form endpoint (optional)
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Here you could save to database or send email
    console.log('Contact form submission:', { name, email, message });
    res.json({ success: true, message: 'Message sent successfully!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Portfolio server running on http://localhost:${PORT}`);
});