import { createStyles, makeStyles } from '@material-ui/core/styles';
import { RiDeviceLine } from 'react-icons/ri';
import { IoCodeSlashSharp} from 'react-icons/io5';
import { GrMysql } from 'react-icons/gr';
import { MdApi, MdEmail, MdAlternateEmail, MdOutlineRestorePage} from 'react-icons/md';
import { 
  SiJava, 
  SiApachemaven,
  SiFramer,
  SiSpring,
  SiSpringboot,
  SiReact,
  SiDocker,
  SiGooglecloud,
  SiMaterialui,
  SiPagekit,
  SiSwagger,
  SiSpringsecurity,
  SiJsonwebtokens,
  SiReactrouter,
  SiThymeleaf,
  SiVimeo,
  SiYoutube,
  SiSwiper,
  SiNginx } from 'react-icons/si';
import { ImCheckmark } from 'react-icons/im';

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
        return <SiJava className={classes.icon} />;
      case "MAVEN":
        return <SiApachemaven className={classes.icon} />;
      case "SPRING":
      case "SPRING-BOOT":
        return <SiSpringboot className={classes.icon} />;
      case "SPRING-DATA-JPA":
        return <SiSpring className={classes.icon} />;
      case "LOMBOK":
        return <MdAlternateEmail className={classes.icon} />;
      case "SPRING-SECURITY":
        return <SiSpringsecurity className={classes.icon} />;
      case "JWT":
        return <SiJsonwebtokens className={classes.icon} />;
      case "MYSQL":
        return <GrMysql className={classes.icon} />;
      case "VALIDATION":
        return <ImCheckmark className={classes.icon} />;
      case "REST":
        return <MdApi className={classes.icon} />;
      case "SWAGGER":
        return <SiSwagger className={classes.icon} />;
      case "THYMELEAF":
        return <SiThymeleaf className={classes.icon} />;
      case "REACT":
        return <SiReact className={classes.icon} />;
      case "REACT-ROUTER":
      case "REACT-ROUTER-HASH-LINK":
        return <SiReactrouter className={classes.icon} />;
      case "MATERIAL-UI":
        return <SiMaterialui className={classes.icon} />;
      case "R-W-D":
        return <RiDeviceLine className={classes.icon} />;
        case "S-P-A":
          return <SiPagekit className={classes.icon} />;
      case "FRAMER-MOTION":
        return <SiFramer className={classes.icon} />;
      case "EMAIL-JS":
        return <MdEmail className={classes.icon} />;
      case "SWIPER":
        return <SiSwiper className={classes.icon} />;
      case "VIMEO-PLAYER":
        return <SiVimeo className={classes.icon} />;
      case "REACT-YOUTUBE":
        return <SiYoutube className={classes.icon} />;
      case "NGINX":
        return <SiNginx className={classes.icon} />
      case "DOCKER":
        return <SiDocker className={classes.icon} />;
      case "GCP":
        return <SiGooglecloud className={classes.icon} />;
      default:
        return <IoCodeSlashSharp className={classes.icon} />
    }
  }