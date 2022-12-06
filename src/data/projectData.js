import { SiJava, SiApachemaven, SiSpringboot, SiReact, SiDocker, SiGooglecloud } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
// import itaLogin from '../assets/imgs/ita/ita-login.png';
// import itaSignup from '../assets/imgs/ita/ita-signup.png';
import itaDashboardHome from '../assets/imgs/ita/ita-dashboard-home.png';

export let buttons_data = [
    {
        id: 1,
        technology: 'All'
    },
    {
        id: 2,
        technology: 'Java',
        logo: <SiJava />

    },
    {
        id: 3,
        technology: 'Maven',
        logo: <SiApachemaven />

    },
    {
        id: 4,
        technology: 'Spring Framework',
        logo: <SiSpringboot />

    },
    {
        id: 5,
        technology: 'MySQL',
        logo: <DiMysql />

    },
    {
        id: 6,
        technology: 'React',
        logo: <SiReact />

    },
    {
        id: 7,
        technology: 'Docker',
        logo: <SiDocker />

    },
    {
        id: 8,
        technology: 'Google Cloud Platform',
        logo: <SiGooglecloud />

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
        category: 'Maven',
        image: 'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1602776662%2FChallenges%2Fblitjo9cbnmtbaybeiys.jpg&w=828&q=75',
        description: 'Designo multi page website',
        technologies_used: ['REACT', 'REACT ROUTER', 'TAILWIND', 'FRAMER MOTION']
    },
    {
        id: 3,
        show: true,
        category: 'Spring Framework',
        image: 'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1597957737%2FChallenges%2Fbflu1myynk7j8quyezyc.jpg&w=828&q=75',
        description: 'Arch multi page website',
        technologies_used: ['REACT', 'REACT ROUTER', 'TAILWIND', 'FRAMER MOTION']
    },
    {
        id: 4,
        show: true,
        category: 'SQL',
        image: 'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fq_auto%2Cw_700%2FChallenges%2Fyhq5ihanseyinzwblaw1.jpg&w=640&q=75',
        description: 'REST Countries Api',
        technologies_used: ['HTML5', 'CSS3', 'JAVASCRIPT', 'API']
    },
    {
        id: 5,
        show: true,
        category: 'React',
        image: 'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fq_auto%2Cw_700%2FChallenges%2Fbgjwz6i6nfnqngx7ae36.jpg&w=640&q=75',
        description: 'Photosnap multi page website',
        technologies_used: ['REACT', 'REACT ROUTER', 'TAILWIND', 'STYLED COMP']
    },
    {
        id: 6,
        show: true,
        category: 'Angular',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/rhg8wnn0jawmcfq3vta1.jpg',
        description: 'Clock App',
        technologies_used: ['CSS3', 'JAVASCRIPT', 'API']
    },
    {
        id: 7,
        show: true,
        category: 'React',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/ug3acx3rt7hms1renszu.jpg',
        description: 'Dine restaurant website',
        technologies_used: ['REACT', 'REACT ROUTER', 'STYLED COMP']
    },
    {
        id: 8,
        show: true,
        category: 'Google Cloud Platform',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/qjvxdujiq2594nunbhar.jpg',
        description: 'Invoice app',
        technologies_used: ['REACT', 'TAILWIND', 'REACT ROUTER', 'FRAMER MOTION']
    }
    
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
        name: 'Designo multi page website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic. A dolores saepe ipsam omnis esse facere quaerat blanditiis! Beatae id molestiae minima hic veritatis alias consectetur eum quaerat facilis ducimus? Distinctio fugiat dolores odit iste quis esse repudiandae doloremque. Aliquid repudiandae atque odit nam, eos sint, mollitia quibusdam magni ex consequuntur vel odio. Officiis quos eius quo recusandae molestiae unde dolorum aliquam nulla porro inventore dolore optio velit, consequuntur, minima voluptatum. Praesentium in accusantium expedita nam maiores ratione sequi voluptas. Iste, ab!',
        website_url: 'http://e-commerce-website-five.vercel.app/',
        code_url: 'https://github.com/KrishnaDhingra/e-commerce-website'
        
    },
    {
        id: 3,
        desktop_image:'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/bflu1myynk7j8quyezyc.jpg',
        tablet_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/uuyclmcbnu6oh7wefyia.jpg',
        mobile_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/jwsakoruxd53bqlkbham.jpg',
        name: 'Arch multi page website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic. A dolores saepe ipsam omnis esse facere quaerat blanditiis! Beatae id molestiae minima hic veritatis alias consectetur eum quaerat facilis ducimus? Distinctio fugiat dolores odit iste quis esse repudiandae doloremque. Aliquid repudiandae atque odit nam, eos sint, mollitia quibusdam magni ex consequuntur vel odio. Officiis quos eius quo recusandae molestiae unde dolorum aliquam nulla porro inventore dolore optio velit, consequuntur, minima voluptatum. Praesentium in accusantium expedita nam maiores ratione sequi voluptas. Iste, ab!',
        website_url: 'http://e-commerce-website-five.vercel.app/',
        code_url: 'https://github.com/KrishnaDhingra/e-commerce-website'
        
    },
    {
        id: 4,
        desktop_image:'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/wirxeocmd6tpnn9c5oqc.jpg',
        tablet_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/yoceoj7gmuyvk0bf0wwf.jpg',
        mobile_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/yoceoj7gmuyvk0bf0wwf.jpg',
        name: 'REST Countries Api',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic. A dolores saepe ipsam omnis esse facere quaerat blanditiis! Beatae id molestiae minima hic veritatis alias consectetur eum quaerat facilis ducimus? Distinctio fugiat dolores odit iste quis esse repudiandae doloremque. Aliquid repudiandae atque odit nam, eos sint, mollitia quibusdam magni ex consequuntur vel odio. Officiis quos eius quo recusandae molestiae unde dolorum aliquam nulla porro inventore dolore optio velit, consequuntur, minima voluptatum. Praesentium in accusantium expedita nam maiores ratione sequi voluptas. Iste, ab!',
        website_url: 'https://github.com/KrishnaDhingra/Countries-Of-The-World',
        code_url: 'http://countries-of-the-world-tawny.vercel.app/'
        
    },
    {
        id: 5,
        desktop_image:'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/zvkqvpshdas9rtdkubkx.jpg',
        tablet_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/ysdcgoki01oxpgkg0gpb.jpg',
        mobile_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/vgki5snipvebjuebvvuo.jpg',
        name: 'Photosnap multi page website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic. A dolores saepe ipsam omnis esse facere quaerat blanditiis! Beatae id molestiae minima hic veritatis alias consectetur eum quaerat facilis ducimus? Distinctio fugiat dolores odit iste quis esse repudiandae doloremque. Aliquid repudiandae atque odit nam, eos sint, mollitia quibusdam magni ex consequuntur vel odio. Officiis quos eius quo recusandae molestiae unde dolorum aliquam nulla porro inventore dolore optio velit, consequuntur, minima voluptatum. Praesentium in accusantium expedita nam maiores ratione sequi voluptas. Iste, ab!',
        website_url: 'https://photosnap-multi-page-website-delta.vercel.app/',
        code_url: 'https://github.com/KrishnaDhingra/photosnap-multi-page-website'
        
    },
    {
        id: 6,
        desktop_image:'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/rhg8wnn0jawmcfq3vta1.jpg',
        tablet_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/nzqdviljd6xqzulklj6w.jpg',
        mobile_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/pwfpwzfdf34rjxsaf5om.jpg',
        name: 'Clock App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic. A dolores saepe ipsam omnis esse facere quaerat blanditiis! Beatae id molestiae minima hic veritatis alias consectetur eum quaerat facilis ducimus? Distinctio fugiat dolores odit iste quis esse repudiandae doloremque. Aliquid repudiandae atque odit nam, eos sint, mollitia quibusdam magni ex consequuntur vel odio. Officiis quos eius quo recusandae molestiae unde dolorum aliquam nulla porro inventore dolore optio velit, consequuntur, minima voluptatum. Praesentium in accusantium expedita nam maiores ratione sequi voluptas. Iste, ab!',
        website_url: 'http://e-commerce-website-five.vercel.app/',
        code_url: 'https://github.com/KrishnaDhingra/e-commerce-website'
        
    },
    {
        id: 7,
        desktop_image:'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/ug3acx3rt7hms1renszu.jpg',
        tablet_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/btsyc0ho3mohvkzmi3pu.jpg',
        mobile_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/rdhowfxj5ib8bx9dumzx.jpg',
        name: 'Dine restaurant website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic. A dolores saepe ipsam omnis esse facere quaerat blanditiis! Beatae id molestiae minima hic veritatis alias consectetur eum quaerat facilis ducimus? Distinctio fugiat dolores odit iste quis esse repudiandae doloremque. Aliquid repudiandae atque odit nam, eos sint, mollitia quibusdam magni ex consequuntur vel odio. Officiis quos eius quo recusandae molestiae unde dolorum aliquam nulla porro inventore dolore optio velit, consequuntur, minima voluptatum. Praesentium in accusantium expedita nam maiores ratione sequi voluptas. Iste, ab!',
        website_url: 'http://e-commerce-website-five.vercel.app/',
        code_url: 'https://github.com/KrishnaDhingra/e-commerce-website'
        
    },
    {
        id: 8,
        desktop_image:'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/qjvxdujiq2594nunbhar.jpg',
        tablet_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/s26iaomtphrrakmdxcok.jpg',
        mobile_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/sp3sdjjgibontb36fhgx.jpg',
        name: 'Invoice app',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic. A dolores saepe ipsam omnis esse facere quaerat blanditiis! Beatae id molestiae minima hic veritatis alias consectetur eum quaerat facilis ducimus? Distinctio fugiat dolores odit iste quis esse repudiandae doloremque. Aliquid repudiandae atque odit nam, eos sint, mollitia quibusdam magni ex consequuntur vel odio. Officiis quos eius quo recusandae molestiae unde dolorum aliquam nulla porro inventore dolore optio velit, consequuntur, minima voluptatum. Praesentium in accusantium expedita nam maiores ratione sequi voluptas. Iste, ab!',
        website_url: 'https://github.com/KrishnaDhingra/Invoice-App',
        code_url: 'http://invoice-app-plum.vercel.app/'
        
    }
]