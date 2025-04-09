import React from 'react'
import about from '../images/about.jpeg1.png'
import Title from './Title'

const About = () => {
  return (
    <div>
      <section className="section" id="about">
        <Title title='about' subtitle='us'/>
      

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={about}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference with Giwus</h3>
          <p>
          What is it we want out of travel? Is it to take snapshots of ourselves in front of famous monuments, surrounded by other tourists? To eat unfamiliar food chosen from unintelligible menus? To earn frequent-flier miles? No. It's to glimpse what life is like somewhere else.
          </p>
          <p>
          We are all tourists in history, and irony is what we win in wars.
          </p>
          <a href="#" className="btn">read more</a>
        </article>
      </div>
    </section>
    </div>
  )
}

export default About
