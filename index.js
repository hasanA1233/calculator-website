const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home route
app.get('/', (req, res) => {
  const calculators = [
    { name: "ACT Score Calculator", path: "/calc/act-score" },
    { name: "AP Bio Score Calculator", path: "/calc/ap-bio-score" },
    { name: "AP Chem Score Calculator", path: "/calc/ap-chem-score" },
    { name: "Blooket Calculator", path: "/calc/blooket" },
    { name: "Prostate Volume Calculator", path: "/calc/prostate-volume" },
    { name: "Dunk Calculator", path: "/calc/dunk" },
    { name: "Persona 3 Reload Fusion Calculator", path: "/calc/persona3-fusion" },
    { name: "Schedule 1 Mixing Calculator", path: "/calc/schedule1-mixing" },
    { name: "Snow Day Calculator", path: "/calc/snow-day" },
    { name: "VDOT Calculator", path: "/calc/vdot" }
  ];
  res.render('home', { calculators });
});

// ACT Score Calculator
app.get('/calc/act-score', (req, res) => {
  res.render('calculators/act-score', { result: null, errors: [] });
});

app.post('/calc/act-score', (req, res) => {
  const { english, math, reading, science } = req.body;
  let errors = [];
  let result = null;

  // Validation
  [english, math, reading, science].forEach((val, idx) => {
    if (isNaN(val) || val < 1 || val > 36) {
      errors.push(`Subject ${["English", "Math", "Reading", "Science"][idx]} must be a number between 1 and 36.`);
    }
  });

  if (errors.length === 0) {
    result = Math.round((Number(english) + Number(math) + Number(reading) + Number(science)) / 4);
  }
  res.render('calculators/act-score', { result, errors });
});

// AP Bio Score Calculator (stub for demo)
app.get('/calc/ap-bio-score', (req, res) => {
  res.render('calculators/ap-bio-score', { result: null, errors: [] });
});

app.post('/calc/ap-bio-score', (req, res) => {
  // Replace with real logic as needed
  const { mcq, frq } = req.body;
  let errors = [];
  let result = null;

  if (isNaN(mcq) || mcq < 0 || mcq > 60) {
    errors.push("MCQ Score must be between 0 and 60.");
  }
  if (isNaN(frq) || frq < 0 || frq > 40) {
    errors.push("FRQ Score must be between 0 and 40.");
  }

  if (errors.length === 0) {
    // Example simplified scoring
    const total = Number(mcq) + Number(frq);
    if (total >= 90) result = 5;
    else if (total >= 75) result = 4;
    else if (total >= 60) result = 3;
    else if (total >= 45) result = 2;
    else result = 1;
  }
  res.render('calculators/ap-bio-score', { result, errors });
});

// Stub routes for other calculators
const stubCalculators = [
  "ap-chem-score", "blooket", "prostate-volume", "dunk", "persona3-fusion", "schedule1-mixing", "snow-day", "vdot"
];
stubCalculators.forEach(name => {
  app.get(`/calc/${name}`, (req, res) => {
    res.render(`calculators/${name}`, { result: null, errors: [] });
  });
  app.post(`/calc/${name}`, (req, res) => {
    // You can implement each calculator's logic here
    res.render(`calculators/${name}`, { result: "Result will appear here!", errors: [] });
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});