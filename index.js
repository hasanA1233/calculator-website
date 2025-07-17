const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const calculators = {
        "Academic & Educational": [
            { name: 'ACT Score Calculator', path: 'act-score-calculator' },
            { name: 'AP Bio Score Calculator', path: 'ap-bio-score-calculator' },
            { name: 'AP Chem Score Calculator', path: 'ap-chem-score-calculator' },
            { name: 'Blooket Calculator', path: 'blooket-calculator' },
            { name: 'Prostate Volume Calculator', path: 'prostate-volume-calculator' },
            { name: 'Dunk Calculator', path: 'dunk-calculator' },
            { name: 'Persona 3 Reload Fusion Calculator', path: 'persona-3-reload-fusion-calculator' },
            { name: 'Schedule 1 Mixing Calculator', path: 'schedule-1-mixing-calculator' },
            { name: 'Snowday Calculator', path: 'snowday-calculator' },
            { name: 'VDOT Calculator', path: 'vdot-calculator' }
        ],
        "Scientific & Math Tools": [
            { name: 'Scientific Calculator', path: 'scientific-calculator' },
            { name: 'Fraction Calculator', path: 'fraction-calculator' },
            { name: 'Percentage Calculator', path: 'percentage-calculator' },
            { name: 'Random Number Generator', path: 'random-number-generator' },
            { name: 'Percent Error Calculator', path: 'percent-error-calculator' },
            { name: 'Exponent Calculator', path: 'exponent-calculator' },
            { name: 'Binary Calculator', path: 'binary-calculator' },
            { name: 'Hex Calculator', path: 'hex-calculator' },
            { name: 'Half-Life Calculator', path: 'half-life-calculator' },
            { name: 'Quadratic Formula Calculator', path: 'quadratic-formula-calculator' },
            { name: 'Log Calculator', path: 'log-calculator' },
            { name: 'Ratio Calculator', path: 'ratio-calculator' },
            { name: 'Root Calculator', path: 'root-calculator' },
            { name: 'Least Common Multiple (LCM) Calculator', path: 'lcm-calculator' },
            { name: 'Greatest Common Factor (GCF) Calculator', path: 'gcf-calculator' },
            { name: 'Factor Calculator', path: 'factor-calculator' },
            { name: 'Rounding Calculator', path: 'rounding-calculator' },
            { name: 'Matrix Calculator', path: 'matrix-calculator' },
            { name: 'Scientific Notation Calculator', path: 'scientific-notation-calculator' },
            { name: 'Big Number Calculator', path: 'big-number-calculator' }
        ],
        "Health & Fitness": [
            { name: 'BMI Calculator', path: 'bmi-calculator' },
            { name: 'Calorie Calculator', path: 'calorie-calculator' },
            { name: 'Body Fat Calculator', path: 'body-fat-calculator' },
            { name: 'BMR Calculator', path: 'bmr-calculator' },
            { name: 'Ideal Weight Calculator', path: 'ideal-weight-calculator' },
            { name: 'Pace Calculator', path: 'pace-calculator' },
            { name: 'Army Body Fat Calculator', path: 'army-body-fat-calculator' },
            { name: 'Lean Body Mass Calculator', path: 'lean-body-mass-calculator' },
            { name: 'Healthy Weight Calculator', path: 'healthy-weight-calculator' },
            { name: 'Calories Burned Calculator', path: 'calories-burned-calculator' },
            { name: 'One Rep Max Calculator', path: 'one-rep-max-calculator' },
            { name: 'Target Heart Rate Calculator', path: 'target-heart-rate-calculator' }
        ],
        "Real Estate & Mortgage": [
            { name: 'Mortgage Calculator', path: 'mortgage-calculator' },
            { name: 'Amortization Calculator', path: 'amortization-calculator' },
            { name: 'Mortgage Payoff Calculator', path: 'mortgage-payoff-calculator' },
            { name: 'House Affordability Calculator', path: 'house-affordability-calculator' },
            { name: 'Rent Calculator', path: 'rent-calculator' },
            { name: 'Debt-to-Income Ratio Calculator', path: 'debt-to-income-ratio-calculator' },
            { name: 'Real Estate Calculator', path: 'real-estate-calculator' },
            { name: 'Refinance Calculator', path: 'refinance-calculator' },
            { name: 'Rental Property Calculator', path: 'rental-property-calculator' },
            { name: 'APR Calculator', path: 'apr-calculator' },
            { name: 'FHA Loan Calculator', path: 'fha-loan-calculator' },
            { name: 'VA Mortgage Calculator', path: 'va-mortgage-calculator' },
            { name: 'Down Payment Calculator', path: 'down-payment-calculator' },
            { name: 'Rent vs. Buy Calculator', path: 'rent-vs-buy-calculator' }
        ]
    };
    res.render('index', { title: 'Calculator Hub', calculators: calculators });
});

app.get('/act-score-calculator', (req, res) => {
    res.render('act-score-calculator', { title: 'ACT Score Calculator', result: null });
});

app.post('/act-score-calculator', (req, res) => {
    const { english, math, reading, science } = req.body;
    const compositeScore = (parseInt(english) + parseInt(math) + parseInt(reading) + parseInt(science)) / 4;
    res.render('act-score-calculator', { title: 'ACT Score Calculator', result: compositeScore.toFixed(2) });
});

app.get('/ap-bio-score-calculator', (req, res) => {
    res.render('ap-bio-score-calculator', { title: 'AP Bio Score Calculator', result: null });
});

app.post('/ap-bio-score-calculator', (req, res) => {
    const { mcq, frq } = req.body;
    const totalScore = parseInt(mcq) + parseInt(frq);
    let apScore;
    if (totalScore >= 76) apScore = 5;
    else if (totalScore >= 62) apScore = 4;
    else if (totalScore >= 49) apScore = 3;
    else if (totalScore >= 36) apScore = 2;
    else apScore = 1;
    res.render('ap-bio-score-calculator', { title: 'AP Bio Score Calculator', result: apScore });
});

app.get('/ap-chem-score-calculator', (req, res) => {
    res.render('ap-chem-score-calculator', { title: 'AP Chem Score Calculator', result: null });
});

app.post('/ap-chem-score-calculator', (req, res) => {
    const { mcq, frq } = req.body;
    const totalScore = parseInt(mcq) + parseInt(frq);
    let apScore;
    if (totalScore >= 75) apScore = 5;
    else if (totalScore >= 60) apScore = 4;
    else if (totalScore >= 45) apScore = 3;
    else if (totalScore >= 30) apScore = 2;
    else apScore = 1;
    res.render('ap-chem-score-calculator', { title: 'AP Chem Score Calculator', result: apScore });
});

app.get('/blooket-calculator', (req, res) => {
    res.render('blooket-calculator', { title: 'Blooket Calculator', result: null });
});

app.post('/blooket-calculator', (req, res) => {
    const { questions, correct } = req.body;
    const accuracy = (parseInt(correct) / parseInt(questions)) * 100;
    res.render('blooket-calculator', { title: 'Blooket Calculator', result: accuracy.toFixed(2) });
});

app.get('/prostate-volume-calculator', (req, res) => {
    res.render('prostate-volume-calculator', { title: 'Prostate Volume Calculator', result: null });
});

app.post('/prostate-volume-calculator', (req, res) => {
    const { length, width, height } = req.body;
    const volume = parseFloat(length) * parseFloat(width) * parseFloat(height) * 0.52;
    res.render('prostate-volume-calculator', { title: 'Prostate Volume Calculator', result: volume.toFixed(2) });
});

app.get('/dunk-calculator', (req, res) => {
    res.render('dunk-calculator', { title: 'Dunk Calculator', result: null });
});

app.post('/dunk-calculator', (req, res) => {
// Scientific & Math Tools
app.get('/scientific-calculator', (req, res) => {
    res.render('scientific-calculator', { title: 'Scientific Calculator', result: null });
});

app.post('/scientific-calculator', (req, res) => {
    const { expression } = req.body;
    let result;
    try {
        result = eval(expression);
    } catch (error) {
        result = 'Invalid Expression';
    }
    res.render('scientific-calculator', { title: 'Scientific Calculator', result: result });
});

app.get('/fraction-calculator', (req, res) => {
    res.render('fraction-calculator', { title: 'Fraction Calculator', result: null });
});

app.post('/fraction-calculator', (req, res) => {
    const { fraction1, fraction2, operator } = req.body;
    // Basic fraction logic placeholder
    const result = `${fraction1} ${operator} ${fraction2} = ?`;
    res.render('fraction-calculator', { title: 'Fraction Calculator', result: result });
});

app.get('/percentage-calculator', (req, res) => {
    res.render('percentage-calculator', { title: 'Percentage Calculator', result: null });
});

app.post('/percentage-calculator', (req, res) => {
    const { percentage, number } = req.body;
    const result = (parseFloat(percentage) / 100) * parseFloat(number);
    res.render('percentage-calculator', { title: 'Percentage Calculator', result: result.toFixed(2) });
});

app.get('/random-number-generator', (req, res) => {
    res.render('random-number-generator', { title: 'Random Number Generator', result: null });
});

app.post('/random-number-generator', (req, res) => {
    const { min, max } = req.body;
    const result = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
    res.render('random-number-generator', { title: 'Random Number Generator', result: result });
});

app.get('/percent-error-calculator', (req, res) => {
    res.render('percent-error-calculator', { title: 'Percent Error Calculator', result: null });
});

app.post('/percent-error-calculator', (req, res) => {
    const { observed, actual } = req.body;
    const result = Math.abs((parseFloat(observed) - parseFloat(actual)) / parseFloat(actual)) * 100;
    res.render('percent-error-calculator', { title: 'Percent Error Calculator', result: result.toFixed(2) + '%' });
});

app.get('/exponent-calculator', (req, res) => {
    res.render('exponent-calculator', { title: 'Exponent Calculator', result: null });
});

app.post('/exponent-calculator', (req, res) => {
    const { base, exponent } = req.body;
    const result = Math.pow(parseFloat(base), parseFloat(exponent));
    res.render('exponent-calculator', { title: 'Exponent Calculator', result: result });
});

app.get('/binary-calculator', (req, res) => {
    res.render('binary-calculator', { title: 'Binary Calculator', result: null });
});

app.post('/binary-calculator', (req, res) => {
    const { number, to } = req.body;
    let result;
    if (to === 'decimal') {
        result = parseInt(number, 2);
    } else {
        result = (parseInt(number)).toString(2);
    }
    res.render('binary-calculator', { title: 'Binary Calculator', result: result });
});

app.get('/hex-calculator', (req, res) => {
    res.render('hex-calculator', { title: 'Hex Calculator', result: null });
});

app.post('/hex-calculator', (req, res) => {
    const { number, to } = req.body;
    let result;
    if (to === 'decimal') {
        result = parseInt(number, 16);
    } else {
        result = (parseInt(number)).toString(16).toUpperCase();
    }
    res.render('hex-calculator', { title: 'Hex Calculator', result: result });
});

app.get('/half-life-calculator', (req, res) => {
    res.render('half-life-calculator', { title: 'Half-Life Calculator', result: null });
});

app.post('/half-life-calculator', (req, res) => {
    const { initial, remaining, time } = req.body;
    // Placeholder for half-life calculation
    const result = 'Half-life calculation is complex and requires more inputs.';
    res.render('half-life-calculator', { title: 'Half-Life Calculator', result: result });
});

app.get('/quadratic-formula-calculator', (req, res) => {
    res.render('quadratic-formula-calculator', { title: 'Quadratic Formula Calculator', result: null });
});

app.post('/quadratic-formula-calculator', (req, res) => {
    const { a, b, c } = req.body;
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    let result;
    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        result = `x = ${x.toFixed(2)}`;
    } else {
        result = 'No real roots';
    }
    res.render('quadratic-formula-calculator', { title: 'Quadratic Formula Calculator', result: result });
});

app.get('/log-calculator', (req, res) => {
    res.render('log-calculator', { title: 'Log Calculator', result: null });
});

app.post('/log-calculator', (req, res) => {
    const { base, number } = req.body;
    const result = Math.log(number) / Math.log(base);
    res.render('log-calculator', { title: 'Log Calculator', result: result.toFixed(4) });
});

app.get('/ratio-calculator', (req, res) => {
    res.render('ratio-calculator', { title: 'Ratio Calculator', result: null });
});

app.post('/ratio-calculator', (req, res) => {
    const { value1, value2 } = req.body;
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const commonDivisor = gcd(value1, value2);
    const result = `${value1 / commonDivisor}:${value2 / commonDivisor}`;
    res.render('ratio-calculator', { title: 'Ratio Calculator', result: result });
});

app.get('/root-calculator', (req, res) => {
    res.render('root-calculator', { title: 'Root Calculator', result: null });
});

app.post('/root-calculator', (req, res) => {
    const { number, root } = req.body;
    const result = Math.pow(number, 1 / root);
    res.render('root-calculator', { title: 'Root Calculator', result: result.toFixed(4) });
});

app.get('/lcm-calculator', (req, res) => {
    res.render('lcm-calculator', { title: 'LCM Calculator', result: null });
});

app.post('/lcm-calculator', (req, res) => {
    const { num1, num2 } = req.body;
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const result = (num1 * num2) / gcd(num1, num2);
    res.render('lcm-calculator', { title: 'LCM Calculator', result: result });
});

app.get('/gcf-calculator', (req, res) => {
    res.render('gcf-calculator', { title: 'GCF Calculator', result: null });
});

app.post('/gcf-calculator', (req, res) => {
    const { num1, num2 } = req.body;
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const result = gcd(num1, num2);
// Health & Fitness Calculators
app.get('/bmi-calculator', (req, res) => {
    res.render('bmi-calculator', { title: 'BMI Calculator', result: null });
});

app.post('/bmi-calculator', (req, res) => {
    const { weight, height } = req.body;
    const bmi = (parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2));
    res.render('bmi-calculator', { title: 'BMI Calculator', result: bmi.toFixed(2) });
});

app.get('/calorie-calculator', (req, res) => {
    res.render('calorie-calculator', { title: 'Calorie Calculator', result: null });
});

app.post('/calorie-calculator', (req, res) => {
    const { age, gender, weight, height, activity } = req.body;
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    const result = Math.round(bmr * parseFloat(activity));
    res.render('calorie-calculator', { title: 'Calorie Calculator', result: result });
});

app.get('/body-fat-calculator', (req, res) => {
    res.render('body-fat-calculator', { title: 'Body Fat Calculator', result: null });
});

app.post('/body-fat-calculator', (req, res) => {
    // Placeholder for body fat calculation
    res.render('body-fat-calculator', { title: 'Body Fat Calculator', result: 'Body fat calculation is complex and requires more inputs.' });
});

app.get('/bmr-calculator', (req, res) => {
    res.render('bmr-calculator', { title: 'BMR Calculator', result: null });
});

app.post('/bmr-calculator', (req, res) => {
    const { age, gender, weight, height } = req.body;
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    res.render('bmr-calculator', { title: 'BMR Calculator', result: Math.round(bmr) });
});

app.get('/ideal-weight-calculator', (req, res) => {
    res.render('ideal-weight-calculator', { title: 'Ideal Weight Calculator', result: null });
});

app.post('/ideal-weight-calculator', (req, res) => {
    // Placeholder for ideal weight calculation
    res.render('ideal-weight-calculator', { title: 'Ideal Weight Calculator', result: 'Ideal weight calculation varies based on different formulas.' });
});

app.get('/pace-calculator', (req, res) => {
    res.render('pace-calculator', { title: 'Pace Calculator', result: null });
});

app.post('/pace-calculator', (req, res) => {
    const { distance, hours, minutes, seconds } = req.body;
    const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    const pace = totalSeconds / parseFloat(distance);
    const paceMinutes = Math.floor(pace / 60);
    const paceSeconds = Math.round(pace % 60);
    res.render('pace-calculator', { title: 'Pace Calculator', result: `${paceMinutes}:${paceSeconds} per unit of distance` });
});

app.get('/army-body-fat-calculator', (req, res) => {
    res.render('army-body-fat-calculator', { title: 'Army Body Fat Calculator', result: null });
});

app.post('/army-body-fat-calculator', (req, res) => {
    // Placeholder for Army body fat calculation
    res.render('army-body-fat-calculator', { title: 'Army Body Fat Calculator', result: 'Army body fat calculation is complex and requires more inputs.' });
});

app.get('/lean-body-mass-calculator', (req, res) => {
    res.render('lean-body-mass-calculator', { title: 'Lean Body Mass Calculator', result: null });
});

app.post('/lean-body-mass-calculator', (req, res) => {
    // Placeholder for lean body mass calculation
    res.render('lean-body-mass-calculator', { title: 'Lean Body Mass Calculator', result: 'Lean body mass calculation is complex and requires more inputs.' });
});

app.get('/healthy-weight-calculator', (req, res) => {
    res.render('healthy-weight-calculator', { title: 'Healthy Weight Calculator', result: null });
});

app.post('/healthy-weight-calculator', (req, res) => {
    // Placeholder for healthy weight calculation
    res.render('healthy-weight-calculator', { title: 'Healthy Weight Calculator', result: 'Healthy weight calculation varies based on different formulas.' });
});

app.get('/calories-burned-calculator', (req, res) => {
    res.render('calories-burned-calculator', { title: 'Calories Burned Calculator', result: null });
});

app.post('/calories-burned-calculator', (req, res) => {
    // Placeholder for calories burned calculation
    res.render('calories-burned-calculator', { title: 'Calories Burned Calculator', result: 'Calories burned calculation is complex and requires more inputs.' });
});

app.get('/one-rep-max-calculator', (req, res) => {
    res.render('one-rep-max-calculator', { title: 'One Rep Max Calculator', result: null });
});

app.post('/one-rep-max-calculator', (req, res) => {
    const { weight, reps } = req.body;
    const orm = weight * (1 + (reps / 30));
    res.render('one-rep-max-calculator', { title: 'One Rep Max Calculator', result: orm.toFixed(2) });
});

app.get('/target-heart-rate-calculator', (req, res) => {
// Real Estate & Mortgage Calculators
app.get('/mortgage-calculator', (req, res) => {
    res.render('mortgage-calculator', { title: 'Mortgage Calculator', result: null });
});

app.post('/mortgage-calculator', (req, res) => {
    const { principal, rate, years } = req.body;
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseInt(years) * 12;
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
    const monthlyPayment = parseFloat(principal) * (numerator / denominator);
    res.render('mortgage-calculator', { title: 'Mortgage Calculator', result: `Monthly Payment: $${monthlyPayment.toFixed(2)}` });
});

app.get('/amortization-calculator', (req, res) => {
    res.render('amortization-calculator', { title: 'Amortization Calculator', result: null });
});

app.post('/amortization-calculator', (req, res) => {
    // Placeholder for amortization calculation
    res.render('amortization-calculator', { title: 'Amortization Calculator', result: 'Amortization schedule generation is complex and will be implemented later.' });
});

app.get('/mortgage-payoff-calculator', (req, res) => {
    res.render('mortgage-payoff-calculator', { title: 'Mortgage Payoff Calculator', result: null });
});

app.post('/mortgage-payoff-calculator', (req, res) => {
    // Placeholder for mortgage payoff calculation
    res.render('mortgage-payoff-calculator', { title: 'Mortgage Payoff Calculator', result: 'Mortgage payoff calculation is complex and will be implemented later.' });
});

app.get('/house-affordability-calculator', (req, res) => {
    res.render('house-affordability-calculator', { title: 'House Affordability Calculator', result: null });
});

app.post('/house-affordability-calculator', (req, res) => {
    // Placeholder for house affordability calculation
    res.render('house-affordability-calculator', { title: 'House Affordability Calculator', result: 'House affordability calculation is complex and will be implemented later.' });
});

app.get('/rent-calculator', (req, res) => {
    res.render('rent-calculator', { title: 'Rent Calculator', result: null });
});

app.post('/rent-calculator', (req, res) => {
    // Placeholder for rent calculation
    res.render('rent-calculator', { title: 'Rent Calculator', result: 'Rent calculation is complex and will be implemented later.' });
});

app.get('/debt-to-income-ratio-calculator', (req, res) => {
    res.render('debt-to-income-ratio-calculator', { title: 'Debt-to-Income Ratio Calculator', result: null });
});

app.post('/debt-to-income-ratio-calculator', (req, res) => {
    const { monthlyDebt, grossIncome } = req.body;
    const dti = (parseFloat(monthlyDebt) / parseFloat(grossIncome)) * 100;
    res.render('debt-to-income-ratio-calculator', { title: 'Debt-to-Income Ratio Calculator', result: `DTI: ${dti.toFixed(2)}%` });
});

app.get('/real-estate-calculator', (req, res) => {
    res.render('real-estate-calculator', { title: 'Real Estate Calculator', result: null });
});

app.post('/real-estate-calculator', (req, res) => {
    // Placeholder for real estate calculation
    res.render('real-estate-calculator', { title: 'Real Estate Calculator', result: 'Real estate calculation is complex and will be implemented later.' });
});

app.get('/refinance-calculator', (req, res) => {
    res.render('refinance-calculator', { title: 'Refinance Calculator', result: null });
});

app.post('/refinance-calculator', (req, res) => {
    // Placeholder for refinance calculation
    res.render('refinance-calculator', { title: 'Refinance Calculator', result: 'Refinance calculation is complex and will be implemented later.' });
});

app.get('/rental-property-calculator', (req, res) => {
    res.render('rental-property-calculator', { title: 'Rental Property Calculator', result: null });
});

app.post('/rental-property-calculator', (req, res) => {
    // Placeholder for rental property calculation
    res.render('rental-property-calculator', { title: 'Rental Property Calculator', result: 'Rental property calculation is complex and will be implemented later.' });
});

app.get('/apr-calculator', (req, res) => {
    res.render('apr-calculator', { title: 'APR Calculator', result: null });
});

app.post('/apr-calculator', (req, res) => {
    // Placeholder for APR calculation
    res.render('apr-calculator', { title: 'APR Calculator', result: 'APR calculation is complex and will be implemented later.' });
});

app.get('/fha-loan-calculator', (req, res) => {
    res.render('fha-loan-calculator', { title: 'FHA Loan Calculator', result: null });
});

app.post('/fha-loan-calculator', (req, res) => {
    // Placeholder for FHA loan calculation
    res.render('fha-loan-calculator', { title: 'FHA Loan Calculator', result: 'FHA loan calculation is complex and will be implemented later.' });
});

app.get('/va-mortgage-calculator', (req, res) => {
    res.render('va-mortgage-calculator', { title: 'VA Mortgage Calculator', result: null });
});

app.post('/va-mortgage-calculator', (req, res) => {
    // Placeholder for VA mortgage calculation
    res.render('va-mortgage-calculator', { title: 'VA Mortgage Calculator', result: 'VA mortgage calculation is complex and will be implemented later.' });
});

app.get('/down-payment-calculator', (req, res) => {
    res.render('down-payment-calculator', { title: 'Down Payment Calculator', result: null });
});

app.post('/down-payment-calculator', (req, res) => {
    const { homePrice, downPaymentPercentage } = req.body;
    const downPayment = parseFloat(homePrice) * (parseFloat(downPaymentPercentage) / 100);
    res.render('down-payment-calculator', { title: 'Down Payment Calculator', result: `Down Payment: $${downPayment.toFixed(2)}` });
});

app.get('/rent-vs-buy-calculator', (req, res) => {
    res.render('rent-vs-buy-calculator', { title: 'Rent vs. Buy Calculator', result: null });
});

app.post('/rent-vs-buy-calculator', (req, res) => {
    // Placeholder for rent vs. buy calculation
    res.render('rent-vs-buy-calculator', { title: 'Rent vs. Buy Calculator', result: 'Rent vs. buy calculation is complex and will be implemented later.' });
});
    res.render('target-heart-rate-calculator', { title: 'Target Heart Rate Calculator', result: null });
});

app.post('/target-heart-rate-calculator', (req, res) => {
    const { age } = req.body;
    const mhr = 220 - age;
    const lower = Math.round(mhr * 0.5);
    const upper = Math.round(mhr * 0.85);
    res.render('target-heart-rate-calculator', { title: 'Target Heart Rate Calculator', result: `Your target heart rate is between ${lower} and ${upper} bpm.` });
});
    res.render('gcf-calculator', { title: 'GCF Calculator', result: result });
});

app.get('/factor-calculator', (req, res) => {
    res.render('factor-calculator', { title: 'Factor Calculator', result: null });
});

app.post('/factor-calculator', (req, res) => {
    const { number } = req.body;
    const factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    res.render('factor-calculator', { title: 'Factor Calculator', result: factors.join(', ') });
});

app.get('/rounding-calculator', (req, res) => {
    res.render('rounding-calculator', { title: 'Rounding Calculator', result: null });
});

app.post('/rounding-calculator', (req, res) => {
    const { number, decimals } = req.body;
    const result = parseFloat(number).toFixed(decimals);
    res.render('rounding-calculator', { title: 'Rounding Calculator', result: result });
});

app.get('/matrix-calculator', (req, res) => {
    res.render('matrix-calculator', { title: 'Matrix Calculator', result: null });
});

app.post('/matrix-calculator', (req, res) => {
    // Placeholder for matrix calculation
    res.render('matrix-calculator', { title: 'Matrix Calculator', result: 'Matrix operations are complex and will be implemented later.' });
});

app.get('/scientific-notation-calculator', (req, res) => {
    res.render('scientific-notation-calculator', { title: 'Scientific Notation Calculator', result: null });
});

app.post('/scientific-notation-calculator', (req, res) => {
    const { number } = req.body;
    const result = parseFloat(number).toExponential();
    res.render('scientific-notation-calculator', { title: 'Scientific Notation Calculator', result: result });
});

app.get('/big-number-calculator', (req, res) => {
    res.render('big-number-calculator', { title: 'Big Number Calculator', result: null });
});

app.post('/big-number-calculator', (req, res) => {
    // Placeholder for big number calculation
    res.render('big-number-calculator', { title: 'Big Number Calculator', result: 'Big number operations require a dedicated library.' });
});
    const { height, vertical } = req.body;
    const reach = parseInt(height) + parseInt(vertical);
    const canDunk = reach >= 120; // 10 feet = 120 inches
    const message = canDunk ? "You can likely dunk!" : "You probably can't dunk yet.";
    res.render('dunk-calculator', { title: 'Dunk Calculator', result: message });
});

app.get('/persona-3-reload-fusion-calculator', (req, res) => {
    res.render('persona-3-reload-fusion-calculator', { title: 'Persona 3 Reload Fusion Calculator', result: null });
});

app.post('/persona-3-reload-fusion-calculator', (req, res) => {
    const { persona1, persona2 } = req.body;
    // This is a placeholder for a real fusion logic.
    const result = `Fusion of ${persona1} and ${persona2} results in a powerful Persona!`;
    res.render('persona-3-reload-fusion-calculator', { title: 'Persona 3 Reload Fusion Calculator', result: result });
});

app.get('/schedule-1-mixing-calculator', (req, res) => {
    res.render('schedule-1-mixing-calculator', { title: 'Schedule 1 Mixing Calculator', result: null });
});

app.post('/schedule-1-mixing-calculator', (req, res) => {
    const { item1, item2 } = req.body;
    const total = parseInt(item1) + parseInt(item2);
    res.render('schedule-1-mixing-calculator', { title: 'Schedule 1 Mixing Calculator', result: total });
});

app.get('/snowday-calculator', (req, res) => {
    res.render('snowday-calculator', { title: 'Snowday Calculator', result: null });
});

app.post('/snowday-calculator', (req, res) => {
    const { inches, timing } = req.body;
    let chance = 0;
    if (parseInt(inches) >= 6) {
        chance = timing.toLowerCase() === 'overnight' ? 90 : 75;
    } else if (parseInt(inches) >= 4) {
        chance = timing.toLowerCase() === 'overnight' ? 75 : 50;
    } else if (parseInt(inches) >= 2) {
        chance = timing.toLowerCase() === 'overnight' ? 50 : 25;
    }
    res.render('snowday-calculator', { title: 'Snowday Calculator', result: chance });
});

app.get('/vdot-calculator', (req, res) => {
    res.render('vdot-calculator', { title: 'VDOT Calculator', result: null });
});
app.post('/vdot-calculator', (req, res) => {
    let { distance, distance_unit, time } = req.body;
    distance = parseFloat(distance);
    time = parseFloat(time);

    if (distance > 0 && time > 0) {
        // Convert distance to meters
        if (distance_unit === 'kilometers') {
            distance *= 1000;
        } else if (distance_unit === 'miles') {
            distance *= 1609.34;
        }

        const velocity = distance / time; // meters per minute

        // Simplified VDOT formula for demonstration
        // A more accurate formula is complex and may require a lookup table
        const percent_max = 0.8 + 0.1894393 * Math.exp(-0.012778 * time) + 0.2989558 * Math.exp(-0.1932605 * time);
        const vo2 = -4.60 + 0.182258 * velocity + 0.000104 * velocity * velocity;
        const vdot = vo2 / percent_max;

        res.render('vdot-calculator', { title: 'VDOT Calculator', result: vdot.toFixed(2) });
    } else {
        res.render('vdot-calculator', { title: 'VDOT Calculator', result: 'Invalid input' });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});