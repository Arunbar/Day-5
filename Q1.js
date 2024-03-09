let resume = `{
    "name": "Arun V",
    "title": "MEAN Developer",
    "about": "I completed my programming course, MERN Stack Developer in GUVI.",
    
    "personalDetails":{
        "email": "arunvale2000@gmail.com",
        "mobile": ["6381621546"],
        "address": "8, ANNA NAGAR, Thiruvarur, Tamil Nadu, India",
        "website": "https://swasticblog.com",
        "linkedIn": "https://www.linkedin.com/in/arun-v-84a870259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        
        
            "education":{
                "Degree": "Diploma in EEE",
                "place": "Government Polytechic collage, Korkai",
                "passoutYear": "2020",
                "addonCourse" : ["MERN Stack-GUVI, Chennai (Online)"],
                "skills": ["JavaScript", "Django", "HTML", "CSS", "Python", ],
                
                "project":{
                    "htmlCssProject": "Personal Portfolio Website - swasticBlog(live)",
                    
}}
}}`;
let objFormat = JSON.parse(resume);
console.log(objFormat.personalDetails.workExperience.education.addonCourse[1]);
