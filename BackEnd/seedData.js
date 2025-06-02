const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const internshipSchema = new mongoose.Schema({
  title: String,
  company: String,
  stipend: String,
  duration: String,
  location: String,
  description: String,
  requirements: String,
  applicationDeadline: String,
  createdAt: { type: Date, default: Date.now }
});

const Internship = mongoose.model('Internship', internshipSchema);

const sampleInternships = [
  {
    title: "Android Developer Intern",
    company: "TechCorp Solutions",
    stipend: "₹15,000/month",
    duration: "3 months",
    location: "Bangalore, Karnataka",
    description: "Work on cutting-edge Android applications using Kotlin and Java. You'll be part of a dynamic team developing innovative mobile solutions for various clients.",
    requirements: "Knowledge of Kotlin/Java, Android SDK, Git, and basic understanding of REST APIs.",
    applicationDeadline: "15th July 2025"
  },
  {
    title: "Web Development Intern",
    company: "Digital Innovations",
    stipend: "₹12,000/month",
    duration: "4 months",
    location: "Remote",
    description: "Join our web development team to build responsive websites and web applications using modern technologies like React, Node.js, and MongoDB.",
    requirements: "HTML, CSS, JavaScript, React.js, Node.js, and database knowledge preferred.",
    applicationDeadline: "20th July 2025"
  },
  {
    title: "Data Science Intern",
    company: "Analytics Pro",
    stipend: "₹18,000/month",
    duration: "6 months",
    location: "Mumbai, Maharashtra",
    description: "Analyze large datasets, create machine learning models, and derive insights to help businesses make data-driven decisions.",
    requirements: "Python, R, SQL, Machine Learning basics, Statistics, and data visualization tools.",
    applicationDeadline: "25th July 2025"
  },
  {
    title: "UI/UX Design Intern",
    company: "Creative Studios",
    stipend: "₹10,000/month",
    duration: "3 months",
    location: "Pune, Maharashtra",
    description: "Design intuitive user interfaces and engaging user experiences for mobile and web applications. Work closely with developers to implement designs.",
    requirements: "Figma, Adobe XD, Photoshop, understanding of design principles, and portfolio of previous work.",
    applicationDeadline: "30th July 2025"
  },
  {
    title: "Backend Developer Intern",
    company: "ServerTech Ltd",
    stipend: "₹16,000/month",
    duration: "5 months",
    location: "Hyderabad, Telangana",
    description: "Develop robust backend systems using Node.js, Express, and MongoDB. Learn about scalable architecture and API development.",
    requirements: "Node.js, Express.js, MongoDB, REST API development, and version control with Git.",
    applicationDeadline: "10th August 2025"
  },
  {
    title: "Flutter Developer Intern",
    company: "MobileFirst Solutions",
    stipend: "₹14,000/month",
    duration: "4 months",
    location: "Chennai, Tamil Nadu",
    description: "Build cross-platform mobile applications using Flutter and Dart. Work on both iOS and Android app development simultaneously.",
    requirements: "Dart programming, Flutter framework, mobile app development concepts, and API integration.",
    applicationDeadline: "5th August 2025"
  }
];

async function seedInternships() {
  try {
    await Internship.deleteMany({});
    console.log('Cleared existing internships');

    await Internship.insertMany(sampleInternships);
    console.log('Sample internships added successfully!');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedInternships();
