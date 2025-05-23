import React, { useEffect } from 'react';
import './homePage.css';
import FeaturesCourse from '../component/FeaturesCourse';
import ImageCarouselApp from '../component/CourseCarousel';
import CourseCarousel from '../component/CourseCarousel';
import { useNavigate } from 'react-router-dom';

// import Footer from '../component/Footer';
// import CourseCarousel from '../component/CourseCarousel';

const HomePage = () => {
    let navigate = useNavigate()


    useEffect(() => {
        const elements = document.querySelectorAll('.animate');
        const handleScroll = () => {
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
                    el.classList.add('in-view');
                } else {
                    el.classList.remove('in-view');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (<>
        <div className="home-page">
            {/* HERO SECTION */}
            <header className="hero-section">
                <div className="overlay">
                    <h1 className="animate">Upgrade Your Knowledge</h1>
                    <p className="animate" style={{ color: "white" }}>Transform your career with expert-led courses in various fields.</p>
                    <button className="cta-button" onClick={() => {
                        navigate('/')
                    }}>OUR COURSES</button>
                </div>
            </header>


            <div style={{ marginTop: "0px" }}>

                <div style={{ height: "120vh", justifyContent: "center", backgroundColor: "black",marginBottom:"-20px" }}><CourseCarousel /></div>
            </div>


            <div >




                <FeaturesCourse />
            </div>

            {/* <div style={{backgroundColor:"black",height:"100vh"}}> */}
            <div className="testimonials-section">
                <h2 className="animate" style={{ marginTop: "5%", fontSize: "2rem", color: "white" }}>WHAT OUR STUDENT SAY </h2>
                <div className="testimonials">
                    <div className="testimonial animate">
                        <img src="../dist/images/p1.jpg" alt="Sarah Lee" className="testimonial-img" />
                        <p>"This platform is a game-changer! Courses are detailed and easy to follow."</p>
                        <p>- Sarah Lee, Web Developer</p>
                    </div>
                    <div className="testimonial animate">
                        <img src="../dist/images/p2.jpg" alt="David Brown" className="testimonial-img" />
                        <p>"I transitioned into a new field thanks to these courses. Highly recommend!"</p>
                        <p>- David Brown, Graphic Designer</p>
                    </div>
                    <div className="testimonial animate">
                        <img src="../dist/images/p3.jpg" alt="David Brown" className="testimonial-img" />
                        <p>"These courses provided me with the skills and confidence to excel in my career. Absolutely worth it!"</p>
                        <p>- Sarah Johnson, Web Developer</p>
                    </div>

                </div>
                <div className="testimonials">
                    <div className="testimonial animate">
                        <img src="../dist/images/p4.jpg" alt="Emily Carter" className="testimonial-img" />
                        <p>"The courses are well-structured and super engaging. I learned so much in a short time!"</p>
                        <p>- Emily Carter, UX Designer</p>
                    </div>
                    <div className="testimonial animate">
                        <img src="../dist/images/p5.jpg" alt="James Wilson" className="testimonial-img" />
                        <p>"I was able to land my first job in tech thanks to these amazing courses. Best decision ever!"</p>
                        <p>- James Wilson, Software Engineer</p>
                    </div>
                    <div className="testimonial animate">
                        <img src="../dist/images/p6.jpg" alt="Olivia Martinez" className="testimonial-img" />
                        <p>"The instructors are top-notch, and the material is easy to digest. Highly recommended!"</p>
                        <p>- Olivia Martinez, Digital Marketer</p>
                    </div>


                </div>
            </div>




            {/* FOOTER */}
            {/* <footer className="footer-section"> */}


            {/* <div className="footer-content animate">
                    <div className="footer-links">
                        <a href="/about">About Us</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="fab fa-facebook"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                    <p>Contact us: support@yourwebsite.com</p>
                </div> */}
            {/* </footer> */}
        </div>   </>
    );
};

export default HomePage;