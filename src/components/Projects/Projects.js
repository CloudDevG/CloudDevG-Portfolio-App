import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import { motion } from 'framer-motion';
import { FadeIn } from '../../theme/AnimationVariants';
import { AnimatePresence } from 'framer-motion';
// import { DiMysql } from 'react-icons/di';
// import { SiJava, SiApachemaven, SiFramer, SiSpring, SiSpringboot, SiReact, SiDocker, SiGooglecloud, SiMaterialui, SiSwagger, SiSpringsecurity, SiJsonwebtokens, SiReactrouter } from 'react-icons/si';
import GetTechnologyIcon from '../../util/GetTechnologyIcon';
import { buttons_data, project_data } from '../../data/projectData';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import './Projects.css';

const useStyles = makeStyles((theme) => ({
  icon: {
    height: "12.5px",
    width: "12.5px",
    marginRight: "5px"
  },
}));

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 100 })
  }, [])

  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projects, setProjects] = useState(project_data);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  let show = (e) => {
    if (e.target.technology.toLowerCase() === 'all') {
      setProjects(project_data);
      return
    }
    const newProjects = project_data.filter(
      (element) => element.category === e.target.technology,
    )
    setProjects(newProjects);
  };

  return (
    <div className="work" onClick={close}>
      <motion.div
        className="home_top_container"
        variants={FadeIn('down')}
        initial="hidden"
        animate="visible"
      >
        <div className="first_title">My<span className="second_title">Projects</span></div>
      </motion.div>
      <div className="button_container">
        {buttons_data.map((element) => {
          return (
            <button key={element.id} onClick={(e) => show(e)} className="work_button">
              {GetTechnologyIcon(element.technology.toUpperCase())}{" "}{element.technology}
            </button>
          )
        })}
      </div>
      <div className="project_container">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="project"
              data-aos="fade-up"
              onClick={(e) => {
                e.stopPropagation()
                modalOpen ? close() : open()
                setProjectName(project.name)
              }}
            >
              <img className="project_image" src={project.image} alt="Project"/>
              <span className="project_description">{project.name}</span>
              <div className="technologies_used_container">
                {project.technologies_used.map((technology) => {
                  return <span className="technologies_used">
                    {GetTechnologyIcon(technology)}{" "}{technology}</span>
                })}
              </div>
            </div>
          )
        })}
      </div>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <ProjectDetails
            modalOpen={modalOpen}
            handleClose={close}
            project_name={projectName}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects;
