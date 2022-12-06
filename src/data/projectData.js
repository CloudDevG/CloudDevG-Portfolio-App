import { SiJava, SiApachemaven, SiSpringboot, SiReact, SiDocker, SiGooglecloud } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
// import itaLogin from '../assets/imgs/ita/ita-login.png';
// import itaSignup from '../assets/imgs/ita/ita-signup.png';
import itaDashboardHome from '../assets/imgs/ita/ita-dashboard-home.png';
import robinRapsHomeOne from '../assets/imgs/robin-raps/robinraps-home-1.png';

export let buttons_data = [
    {
        id: 1,
        technology: 'All'
    },
    {
        id: 2,
        technology: 'Java',
        logo: <SiJava size={12.5} />

    },
    {
        id: 3,
        technology: 'Maven',
        logo: <SiApachemaven size={12.5} />

    },
    {
        id: 4,
        technology: 'Spring Framework',
        logo: <SiSpringboot size={12.5} />

    },
    {
        id: 5,
        technology: 'MySQL',
        logo: <DiMysql size={12.5} />

    },
    {
        id: 6,
        technology: 'React',
        logo: <SiReact size={12.5} />

    },
    {
        id: 7,
        technology: 'Docker',
        logo: <SiDocker size={12.5} />

    },
    {
        id: 8,
        technology: 'Google Cloud Platform',
        logo: <SiGooglecloud size={12.5} />

    },
    
]

export let project_data = [
    {
        id: 1,
        show: true,
        category: 'Java',
        image: itaDashboardHome,
        description: 'Intergalactic Travel Agency',
        technologies_used: ['JAVA', 'MAVEN', 'SPRING FRAMEWORK', 'MYSQL', 'DOCKER']
    },
    {
        id: 2,
        show: true,
        category: 'React',
        image: robinRapsHomeOne,
        description: 'RobinRaps.com',
        technologies_used: ['REACT', 'MATERIAL-UI', 'EMAILJS', 'DOCKER', 'GCP']
    },
    {
        id: 3,
        show: true,
        category: 'Spring Framework',
        image: 'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1597957737%2FChallenges%2Fbflu1myynk7j8quyezyc.jpg&w=828&q=75',
        description: 'CloudDevG.io',
        technologies_used: ['REACT', 'MATERIAL-UI', 'FRAMER MOTION', 'DOCKER', 'GCP']
    },
    
]
export const project_detail = [
    {
        id: 1,
        desktop_image:'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/ax9kvjgksws1lz8vrlim.jpg',
        tablet_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/fs0rui2wbalhkdwyqioc.jpg',
        mobile_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/gxtyjhbeafr8d33dotya.jpg',
        name: 'Intergalactic Travel Agency',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic. A dolores saepe ipsam omnis esse facere quaerat blanditiis! Beatae id molestiae minima hic veritatis alias consectetur eum quaerat facilis ducimus? Distinctio fugiat dolores odit iste quis esse repudiandae doloremque. Aliquid repudiandae atque odit nam, eos sint, mollitia quibusdam magni ex consequuntur vel odio. Officiis quos eius quo recusandae molestiae unde dolorum aliquam nulla porro inventore dolore optio velit, consequuntur, minima voluptatum. Praesentium in accusantium expedita nam maiores ratione sequi voluptas. Iste, ab!',
        website_url: 'http://e-commerce-website-five.vercel.app/',
        code_url: 'https://github.com/KrishnaDhingra/e-commerce-website'
        
    },
    {
        id: 2,
        desktop_image:'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/blitjo9cbnmtbaybeiys.jpg',
        tablet_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/vxurb02lt2qpiblhtmbk.jpg',
        mobile_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/zgwgbisw8ucmwqoq7ndg.jpg',
        name: 'RobinRaps.com',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic. A dolores saepe ipsam omnis esse facere quaerat blanditiis! Beatae id molestiae minima hic veritatis alias consectetur eum quaerat facilis ducimus? Distinctio fugiat dolores odit iste quis esse repudiandae doloremque. Aliquid repudiandae atque odit nam, eos sint, mollitia quibusdam magni ex consequuntur vel odio. Officiis quos eius quo recusandae molestiae unde dolorum aliquam nulla porro inventore dolore optio velit, consequuntur, minima voluptatum. Praesentium in accusantium expedita nam maiores ratione sequi voluptas. Iste, ab!',
        website_url: 'http://e-commerce-website-five.vercel.app/',
        code_url: 'https://github.com/KrishnaDhingra/e-commerce-website'
        
    },
    {
        id: 3,
        desktop_image:'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/bflu1myynk7j8quyezyc.jpg',
        tablet_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/uuyclmcbnu6oh7wefyia.jpg',
        mobile_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/jwsakoruxd53bqlkbham.jpg',
        name: 'CloudDevG.io',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic. A dolores saepe ipsam omnis esse facere quaerat blanditiis! Beatae id molestiae minima hic veritatis alias consectetur eum quaerat facilis ducimus? Distinctio fugiat dolores odit iste quis esse repudiandae doloremque. Aliquid repudiandae atque odit nam, eos sint, mollitia quibusdam magni ex consequuntur vel odio. Officiis quos eius quo recusandae molestiae unde dolorum aliquam nulla porro inventore dolore optio velit, consequuntur, minima voluptatum. Praesentium in accusantium expedita nam maiores ratione sequi voluptas. Iste, ab!',
        website_url: 'http://e-commerce-website-five.vercel.app/',
        code_url: 'https://github.com/KrishnaDhingra/e-commerce-website'
        
    },
]