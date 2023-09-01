import React from 'react';
import '../CSS/About.css'; // Import your CSS file
import tarek from '../image/tarek.jpg'
export const About = () => {
    const name = "TAREK BENLAKRI";
    const age = "21";
    const experience = "6 months";
    const education = "Students at university UFAS College Science branch Computer Science ";
    const skills = ["frontend developer with HTML CSS JavaScript and React JS", "backend developer with the SQL MySQL PHP Node.js and Express JS and also Firebase", "I do some language programmation like C++ C Java and some Python and also git Github"];
    const imageSrc = "URL_TO_YOUR_IMAGE";

    const currentYear = new Date().getFullYear();
    const copyright = `© ${currentYear} ${name}`;

    return (
        <div className="cv-container">
            <header>
                
                <img src={tarek} alt="Profile" className="profile-image" />
                <h1>{name}</h1>
                <p>Age: {age}</p>
            </header>
            <section className="section">
                <h2>Education</h2>
                <p>{education}</p>
            </section>
            <section className="section">
                <h2>Experience</h2>
                <p>{experience}</p>
            </section>
            <section className="section">
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
            <footer className="footer">
                <p>{copyright}</p>
                <p>Contact me at: tbenlakri@gmail.com</p>
            </footer>
        </div>
    );
};
