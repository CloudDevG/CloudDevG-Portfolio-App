import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import { motion } from 'framer-motion';
import { FadeIn } from '../../theme/AnimationVariants';
import { AnimatePresence } from 'framer-motion';
import GetTechnologyIcon from '../../util/GetTechnologyIcon';
import { project_data } from '../../data/projectData';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import './Projects.css';

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 100 })
  }, [])

  const [modalOpen, setModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  let projects  = project_data;

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  // let show = (e) => {
  //   if (e.target.technology.toLowerCase() === 'all') {
  //     setProjects(project_data);
  //     return
  //   }
  //   const newProjects = project_data.filter(
  //     (element) => element.category === e.target.technology,
  //   )
  //   setProjects(newProjects);
  // };

  return (
    <div className="work" onClick={close}>
      <motion.div
        className="project_top_container"
        variants={FadeIn('down')}
        initial="hidden"
        animate="visible"
      >
        <div className="first_title">My<span className="second_title">Projects</span></div>
      </motion.div>
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
