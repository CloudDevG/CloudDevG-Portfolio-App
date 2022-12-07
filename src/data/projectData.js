import itaDashHome from '../assets/imgs/ita/ita-dashboard-home.png';
import itaLogin from '../assets/imgs/ita/ita-login.png';
import itaSignup from '../assets/imgs/ita/ita-signup.png';
import itaDashPilot from '../assets/imgs/ita/ita-dashboard-pilot.png';
import itaDashSpacecraft from '../assets/imgs/ita/ita-dashboard-spacecraft.png';
import itaDashFlights from '../assets/imgs/ita/ita-dashboard-flights.png';
import itaDashProfile from '../assets/imgs/ita/ita-dashboard-profile.png';
import robinRapsHomeOne from '../assets/imgs/robin-raps/robinraps-home-1.png';
import robinRapsHomeTwo from '../assets/imgs/robin-raps/robinraps-home-2.png';
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
        technology: 'Maven',
    },
    {
        id: 4,
        technology: 'Spring-Boot',
    },
    {
        id: 5,
        technology: 'Spring-Security',
    },
    {
        id: 6,
        technology: 'JWT',
    },
    {
        id: 7,
        technology: 'MySQL',
    },
    {
        id: 8,
        technology: 'Swagger',
    },
    {
        id: 9,
        technology: 'React',
    },
    {
        id: 10,
        technology: 'Material-UI',
    },
    {
        id: 11,
        technology: 'Framer-Motion',
    },
    {
        id: 12,
        technology: 'Docker',
    },
    {
        id: 13,
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
        technologies_used: ['JAVA', 'MAVEN', 'SPRING-BOOT','MYSQL',  'SPRING-DATA-JPA', 'SPRING-SECURITY', 'JWT', 'THYMELEAF', 'SWAGGER', 'DOCKER']
    },
    {
        id: 2,
        show: true,
        category: 'React',
        image: robinRapsHomeOne,
        name: 'RobinRaps.com',
        technologies_used: ['REACT', 'REACT-HASH-LINK-ROUTER', 'MATERIAL-UI', 'EMAIL-JS', 'SWIPER', 'REACT-REVEAL', 'VIMEO', 'REACT-YOUTUBE', 'DOCKER', 'GCP']
    },
    {
        id: 3,
        show: true,
        category: 'Spring Framework',
        image: 'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1597957737%2FChallenges%2Fbflu1myynk7j8quyezyc.jpg&w=828&q=75',
        name: 'CloudDevG.io',
        technologies_used: ['REACT', 'REACT-ROUTER', 'MATERIAL-UI', 'FRAMER-MOTION',  'EMAIL-JS', 'SWIPER','DOCKER', 'GCP']
    },
    
]
export const project_detail = [
    {
        id: 1,
        name: 'Intergalactic Travel Agency',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic.',
        code_url: 'https://github.com/KrishnaDhingra/e-commerce-website',
        screenshots: [itaDashHome, itaLogin, itaSignup, itaDashPilot, itaDashSpacecraft, itaDashFlights, itaDashProfile]
        
    },
    {
        id: 2,
        name: 'RobinRaps.com',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic.',
        website_url: 'https://robinraps.com/',
        screenshots: [robinRapsHomeOne, robinRapsHomeTwo, robinRapsAbout, robinRapsMusic, robinRapsVideos, robinRapsYouTubePlayer, robinRapsScheduleContact]
        
    },
    {
        id: 3,
        name: 'CloudDevG.io',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic.',
        website_url: 'http://e-commerce-website-five.vercel.app/',
        code_url: 'https://github.com/KrishnaDhingra/e-commerce-website',
        screenshots: [robinRapsHomeOne, robinRapsHomeTwo, robinRapsAbout, robinRapsMusic, robinRapsVideos, robinRapsYouTubePlayer, robinRapsScheduleContact]
    },
]