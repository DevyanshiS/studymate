"use strict"


const links = document.querySelectorAll('nav ul li a');
const mainContent = document.querySelector('main');
const footerContent = document.querySelector('footer');


function loadHomePage(){
    mainContent.innerHTML = `
   <section class="welcomeSection">
        <img src="imgs/girl-6028307_1280.png" alt="girl studying" width="600px" height="600px">
        <div class="welcomeSectionText">
            <h1>Welcome To StudyMate</h1>
            <p>Your all-in-one platform to organize your study materials, books, notes, and schedules.</p>
        </div>
   </section>
   `;
   footerContent.innerHTML=`
   <div class="info row">
            <div class="col-4 logo">
                <img src="imgs/studying.png" alt="" width="20px" height="20px">
                <h3>Studymate</h3>
            </div>
            <div class="col-4">
                <h4>More</h4>
                <p>About us</p>
                <p>FAQs</p>
            </div>
            <div class="col-4">
                <h4>Information</h4>
                <p>Privacy</p>
                <p>Contact Us</p>
                <p>Terms of Use</p>
                <p>Copyright</p>
                <p>Terms and Conditions</p>
            </div>
        </div>
        <p class="reserved">&copy; 2024 StudyMate. All rights reserved.</p>
   `;
}

document.getElementById("homePage").addEventListener("click", (e) => {
    e.preventDefault();
    loadHomePage();
});
window.onload = loadHomePage;
