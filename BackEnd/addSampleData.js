
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));
const internshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  stipend: { type: String, required: true },
  duration: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String, required: true },
  applicationDeadline: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Internship = mongoose.model('Internship', internshipSchema);

const sampleInternships = [
  {
    title: "Full Stack Developer Intern",
    company: "TechCorp Solutions",
    stipend: "₹15,000/month",
    duration: "3 months",
    location: "Remote",
    description: "Work on cutting-edge web applications using React, Node.js, and MongoDB. Great opportunity to gain hands-on experience in modern web development.",
    requirements: "Knowledge of JavaScript, React, Node.js. Familiarity with databases preferred.",
    applicationDeadline: "15th July 2025"
  },
  {
    title: "Mobile App Developer Intern",
    company: "AppInnovate",
    stipend: "₹12,000/month",
    duration: "2 months",
    location: "Bangalore",
    description: "Develop Android applications using Kotlin. Work with experienced developers on real-world projects.",
    requirements: "Basic knowledge of Android development, Kotlin, Java. Passion for mobile technology.",
    applicationDeadline: "20th July 2025"
  },
  {
    title: "Data Science Intern",
    company: "DataMinds Analytics",
    stipend: "₹18,000/month",
    duration: "4 months",
    location: "Hyderabad",
    description: "Analyze large datasets, create machine learning models, and generate insights for business decisions.",
    requirements: "Python, Pandas, NumPy, basic ML knowledge. Statistics background preferred.",
    applicationDeadline: "10th July 2025"
  },
  {
    title: "UI/UX Design Intern",
    company: "DesignStudio Pro",
    stipend: "₹10,000/month",
    duration: "2 months",
    location: "Mumbai",
    description: "Create user-friendly designs for web and mobile applications. Work with design tools and collaborate with development teams.",
    requirements: "Figma, Adobe XD, creative thinking, portfolio of design work.",
    applicationDeadline: "25th July 2025"
  },
  {
    title: "DevOps Intern",
    company: "CloudTech Systems",
    stipend: "₹20,000/month",
    duration: "3 months",
    location: "Pune",
    description: "Learn cloud deployment, CI/CD pipelines, and infrastructure management using AWS and Docker.",
    requirements: "Basic Linux knowledge, interest in cloud technologies, Docker basics.",
    applicationDeadline: "30th July 2025"
  }
];

async function addSampleData() {
  try {
    await Internship.deleteMany({});
    console.log('Cleared existing internships');
    await Internship.insertMany(sampleInternships);
    console.log('✅ Sample internships added successfully!');
    
    const count = await Internship.countDocuments();
    console.log(`Total internships in database: ${count}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error adding sample data:', error);
    process.exit(1);
  }
}

addSampleData();