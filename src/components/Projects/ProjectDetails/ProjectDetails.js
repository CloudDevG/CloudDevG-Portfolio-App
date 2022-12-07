import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { IoClose } from 'react-icons/io5';
import Backdrop from '../../Backdrop/Backdrop';
import GetTechnologyIcon from '../../../util/GetTechnologyIcon';

import { project_data, project_detail } from '../../../data/projectData';
import './ProjectDetails.css';

function ProjectDetails({ modalClose, handleClose, project_name }) {

  let detailedProjectData = '';
  detailedProjectData = project_detail.filter((e) => e.name === project_name);
  detailedProjectData = detailedProjectData[0];

  let techProjectData = '';
  techProjectData = project_data.filter((e) => e.name === project_name);
  techProjectData = techProjectData[0];

  let website_url = detailedProjectData.website_url;
  let code_url = detailedProjectData.code_url;
  let name = detailedProjectData.name;
  let description = detailedProjectData.description;

  const dropIn = {
    hidden: {
      y: '-100vh',
    },
    visible: {
      y: '0vh',
      transition: {
        duration: 0.2,
        type: 'spring',
        damping: 25,
        stiffness: 400,
      },
    },
    exit: {
      y: '100vh',
    },
  };
  
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="detail_project_container"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <IoClose className="close-button" onClick={handleClose} />
        <div className="right_container">
          <h1 className="heading">{detailedProjectData.name}</h1>
          <div className="tech_icon_container">
          {techProjectData.technologies_used.map((tech) => {
            return <div>{GetTechnologyIcon(tech)}</div>
          })}
          </div>
          <p className="description">{description}</p>
          <div className="right-button-container">

            {detailedProjectData.website_url ?
              <a
              href={website_url}
              target="_blank"
              rel="noreferrer"
              className="preview left_buttons"
              >
              Live Site
             </a>
            :
             <></>
            }
          {detailedProjectData.code_url ?
            <a 
              href={code_url} 
              target="_blank" 
              rel="noreferrer"
              className="code left_buttons"
            >
              GitHub Repo
            </a>
            :
            <></>
            }
          </div>
        </div>
        <div className="left_container">
          <div className="slider">
              <Swiper
              id="swiper-color"
              slidesPerView={1}
              spaceBetween={5}
              autoplay={{
                  delay: 3250,
                  disableOnInteraction: true,
              }}
              loop={true}
              pagination={{
                  clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              >
              {detailedProjectData.screenshots.map((screenshot, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img className="hero_image" src={screenshot} alt={name} />
                  </SwiperSlide>
                )
              })}
              </Swiper>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  )
}
export default ProjectDetails;
