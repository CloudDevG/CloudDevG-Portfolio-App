import cloudDevGHome from '../assets/imgs/clouddevg/clouddevg-home.png';
import cloudDevGNavBar from '../assets/imgs/clouddevg/clouddevg-navbar.png';
import cloudDevGProjects from '../assets/imgs/clouddevg/clouddevg-projects.png';
import cloudDevGProjectDetail from '../assets/imgs/clouddevg/clouddevg-projectdetail.png';
import cloudDevGContact from '../assets/imgs/clouddevg/clouddevg-contact.png';
import itaDashHome from '../assets/imgs/ita/ita-dashboard-home.png';
import itaPostmanExample from '../assets/imgs/ita/ita-postman-example.png';
import itaLogin from '../assets/imgs/ita/ita-login.png';
import itaSignup from '../assets/imgs/ita/ita-signup.png';
import itaDashPilot from '../assets/imgs/ita/ita-dashboard-pilot.png';
import itaDashSpacecraft from '../assets/imgs/ita/ita-dashboard-spacecraft.png';
import itaDashFlights from '../assets/imgs/ita/ita-dashboard-flights.png';
import itaDashProfile from '../assets/imgs/ita/ita-dashboard-profile.png';
import robinRapsHomeOne from '../assets/imgs/robin-raps/robinraps-home-1.png';
import robinRapsHomeTwo from '../assets/imgs/robin-raps/robinraps-home-2.png';
import robinRapsNavBar from '../assets/imgs/robin-raps/robinraps-navbar.png';
import robinRapsAbout from '../assets/imgs/robin-raps/robinraps-about.png';
import robinRapsMusic from '../assets/imgs/robin-raps/robinraps-music.png';
import robinRapsVideos from '../assets/imgs/robin-raps/robinraps-videos.png';
import robinRapsYouTubePlayer from '../assets/imgs/robin-raps/robinraps-youtubeplayer.png';
import robinRapsScheduleContact from '../assets/imgs/robin-raps/robinraps-schedule-contact.png';

export let buttons_data = [
    {
        id: 1,
        technology: 'All'
    },
    {
        id: 2,
        technology: 'Java',
    },
    {
        id: 3,
        technology: 'Spring',
    },
    {
        id: 4,
        technology: 'React',
    },
    {
        id: 5,
        technology: 'Docker',
    },
    {
        id: 6,
        technology: 'GCP',
    },
    
]

export let project_data = [
    {
        id: 1,
        show: true,
        category: 'Java',
        image: itaDashHome,
        name: 'Intergalactic Travel Agency',
        technologies_used: ['JAVA', 'MAVEN', 'SPRING-BOOT','MYSQL', 'SPRING-DATA-JPA', 'LOMBOK', 'VALIDATION', 'SPRING-SECURITY', 'JWT', 'REST', 'THYMELEAF', 'SWAGGER', 'DOCKER']
    },
    {
        id: 2,
        show: true,
        category: 'React',
        image: robinRapsHomeOne,
        name: 'RobinRaps.com',
        technologies_used: ['REACT', 'REACT-ROUTER-HASH-LINK', 'MATERIAL-UI', 'R-W-D', 'S-P-A', 'REACT-YOUTUBE', 'EMAIL-JS', 'SWIPER', 'VIMEO-PLAYER', 'NGINX', 'DOCKER', 'GCP']
    },
    {
        id: 3,
        show: true,
        category: 'Spring Framework',
        image: cloudDevGHome,
        name: 'CloudDevG.io',
        technologies_used: ['REACT', 'REACT-ROUTER', 'MATERIAL-UI', 'FRAMER-MOTION', 'R-W-D', 'S-P-A', 'EMAIL-JS', 'SWIPER', 'NGINX', 'DOCKER', 'GCP']
    },
    
]
export const project_detail = [
    {
        id: 1,
        name: 'Intergalactic Travel Agency',
        description: 'A fictional RESTful web-service that allows "Users" to sign up for an account and complete a variety of requests to look up + book Flights on legendary Spacecraft aboard with their favorite sci-fi heroes as their pilots through the RESTful web service. "Pilot" users are able to add Spacecraft to their fleet and specify route/"Flights" for "Users" to book interstellar passage on.',
        code_url: 'https://github.com/CloudDevG/Intergalactic-Travel-Agency',
        screenshots: [itaDashHome, itaPostmanExample, itaLogin, itaSignup, itaDashPilot, itaDashSpacecraft, itaDashFlights, itaDashProfile]
        
    },
    {
        id: 2,
        name: 'RobinRaps.com',
        description: 'An aritst portfolio S.P.A. application featuring a home component landing video loop via Vimeo, a built-in YouTube music-video player, music carousel via Swiper, functional contact form via Email.js, and more.',
        website_url: 'https://robinraps.com/',
        screenshots: [robinRapsHomeOne, robinRapsHomeTwo, robinRapsNavBar, robinRapsAbout, robinRapsMusic, robinRapsVideos, robinRapsYouTubePlayer, robinRapsScheduleContact]
        
    },
    {
        id: 3,
        name: 'CloudDevG.io',
        description: 'My personal portfolio S.P.A. application that you are currently visiting featuring Framer-Motion, functional contact form via Email.js, and more.',
        website_url: 'https://clouddevg.io',
        code_url: 'https://github.com/CloudDevG/CloudDevG-Portfolio-App',
        screenshots: [cloudDevGHome, cloudDevGNavBar, cloudDevGProjects, cloudDevGProjectDetail, cloudDevGContact]
    },
]