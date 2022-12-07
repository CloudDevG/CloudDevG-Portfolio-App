import { createStyles, makeStyles } from '@material-ui/core/styles';
import { DiCode, DiMysql } from 'react-icons/di';
import { MdEmail} from 'react-icons/md';
import { SiJava, SiApachemaven, SiFramer, SiSpring, SiSpringboot, SiReact, SiDocker, SiGooglecloud, SiMaterialui, SiSwagger, SiSpringsecurity, SiJsonwebtokens, SiReactrouter, SiThymeleaf, SiVimeo, SiYoutube, SiSwiper, SiScrollreveal } from 'react-icons/si';

  const useStyles = makeStyles((theme) =>
  createStyles({
    icon: {
        height: ".75rem",
        width: ".75rem",
        marginRight: "5px",
      },
    }),
  );
  
export default function GetTechnologyIcon(technology) {
    const classes = useStyles();
    
    switch(technology) {
      case "JAVA":
        return <SiJava className={classes.icon}/>;
      case "MAVEN":
        return <SiApachemaven className={classes.icon}/>;
      case "SPRING-BOOT":
        return <SiSpringboot className={classes.icon}/>;
      case "SPRING-DATA-JPA":
        return <SiSpring className={classes.icon}/>;
      case "SPRING-SECURITY":
        return <SiSpringsecurity className={classes.icon}/>;
      case "JWT":
        return <SiJsonwebtokens className={classes.icon}/>;
      case "MYSQL":
        return <DiMysql className={classes.icon}/>;
      case "SWAGGER":
        return <SiSwagger className={classes.icon}/>;
      case "THYMELEAF":
        return <SiThymeleaf className={classes.icon}/>;
      case "REACT":
        return <SiReact className={classes.icon}/>;
      case "REACT-ROUTER":
      case "REACT-HASH-LINK-ROUTER":
        return <SiReactrouter className={classes.icon}/>;
      case "REACT-REVEAL":
        return <SiScrollreveal className={classes.icon}/>;
      case "MATERIAL-UI":
        return <SiMaterialui className={classes.icon}/>;
      case "FRAMER-MOTION":
        return <SiFramer className={classes.icon}/>;
      case "EMAIL-JS":
        return <MdEmail className={classes.icon}/>;
      case "SWIPER":
        return <SiSwiper className={classes.icon}/>;
      case "VIMEO":
        return <SiVimeo className={classes.icon}/>;
      case "REACT-YOUTUBE":
        return <SiYoutube className={classes.icon}/>;
      case "DOCKER":
        return <SiDocker className={classes.icon}/>;
      case "GCP":
        return <SiGooglecloud className={classes.icon}/>;
      default:
        return <DiCode className={classes.icon}/>
    }
  }