//! Imported Libraries --------------------------
import { useState } from "react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  // setActice takes in index, sets activce
  // If services__card key == active index, display modal
  // closeModal set activceIndex = 0
  function openModal(index) {
    setActiveIndex(index);
  }

  function closeModal() {
    setActiveIndex(null);
  }

  return (
    <section className="services section">
      <h2 className="section__title">
        {`The Services
          I offer`}
      </h2>

      <div className="services__container container grid">
        <article className="services__card">
          <i className="ri-code-s-slash-line services__icon"></i>
          <h2 className="services__title">Front-End Development Specialist</h2>
          <p className="services__description">
            Crafting captivating user experiences with precision and creativity
          </p>
          <button
            className="services__button button"
            onClick={() => openModal(1)}
          >
            Know More
          </button>

          <div
            className={`services__modal ${
              activeIndex === 1 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <i
                onClick={() => closeModal()}
                className="ri-close-line services__modal-close"
              ></i>
              <h2 className="services__modal-title">
                Front-End Development Specialist
              </h2>

              <ul className="services__modal-list grid">
                <li className="services__modal-item">
                  Designing visually stunning and intuitive user interfaces
                  using HTML, CSS, and JavaScript
                </li>
                <li className="services__modal-item">
                  Leveraging frameworks like React and Bootstrap for efficient
                  front-end development
                </li>
                <li className="services__modal-item">
                  Implementing responsive design principles for seamless
                  functionality across devices.
                </li>
                <li className="services__modal-item">
                  Optimizing website performance and load times for enhanced
                  user satisfaction
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="services__card">
          <i className="ri-database-2-line services__icon"></i>
          <h2 className="services__title">Back-End Engineering Expert</h2>
          <p className="services__description">
            Building robust and scalable server-side solutions for dynamic web
            applications
          </p>
          <button
            className="services__button button"
            onClick={() => openModal(2)}
          >
            Know More
          </button>

          <div
            className={`services__modal ${
              activeIndex === 2 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <i
                onClick={() => closeModal()}
                className="ri-close-line services__modal-close"
              ></i>
              <h2 className="services__modal-title">
                Back-End Engineering Expert
              </h2>

              <ul className="services__modal-list grid">
                <li className="services__modal-item">
                  Developing server logic and database architectures with
                  Node.js and Express.js
                </li>
                <li className="services__modal-item">
                  Designing efficient APIs for seamless communication between
                  front-end and back-end systems
                </li>
                <li className="services__modal-item">
                  Utilizing relational databases like PostgreSQL for secure data
                  storage and retrieval
                </li>
                <li className="services__modal-item">
                  Implementing authentication and authorization mechanisms to
                  ensure data integrity and user privacy
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="services__card">
          <i className="ri-layout-line services__icon"></i>
          <h2 className="services__title">Full-Stack Solutions Architect</h2>
          <p className="services__description">
            Bridging the gap between front-end elegance and back-end
            functionality
          </p>
          <button
            className="services__button button"
            onClick={() => openModal(3)}
          >
            Know More
          </button>
          <div
            className={`services__modal ${
              activeIndex === 3 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <i
                onClick={() => closeModal()}
                className="ri-close-line services__modal-close"
              ></i>
              <h2 className="services__modal-title">
                Full-Stack Solutions Architect
              </h2>

              <ul className="services__modal-list grid">
                <li className="services__modal-item">
                  Creating end-to-end web solutions combining front-end and
                  back-end technologies
                </li>
                <li className="services__modal-item">
                  Architecting database schemas and designing API endpoints for
                  comprehensive data management
                </li>
                <li className="services__modal-item">
                  Implementing client-server communication and real-time updates
                  using WebSocket protocols
                </li>
                <li className="services__modal-item">
                  Ensuring cross-functional team collaboration and adherence to
                  project timelines and milestones
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="services__card">
          <i className="ri-service-line services__icon"></i>
          <h2 className="services__title">
            Technical Leadership and Collaboration
          </h2>
          <p className="services__description">
            Guiding teams towards excellence through effective communication and
            mentorship
          </p>
          <button
            className="services__button button"
            onClick={() => openModal(4)}
          >
            Know More
          </button>
          <div
            className={`services__modal ${
              activeIndex === 4 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <i
                onClick={() => closeModal()}
                className="ri-close-line services__modal-close"
              ></i>
              <h2 className="services__modal-title">
                Technical Leadership and Collaboration
              </h2>

              <ul className="services__modal-list grid">
                <li className="services__modal-item">
                  Leading development projects with a focus on clear goals,
                  efficient processes, and collaborative problem-solving
                </li>
                <li className="services__modal-item">
                  Mentoring junior developers and fostering a culture of
                  continuous learning and professional growth
                </li>
                <li className="services__modal-item">
                  Facilitating cross-functional teamwork and communication
                  between design, development, and QA teams
                </li>
                <li className="services__modal-item">
                  Providing technical expertise and strategic guidance to drive
                  project success and client satisfaction
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="services__card">
          <i className="ri-money-dollar-circle-line services__icon"></i>
          <h2 className="services__title">
            Customer-Centric Solutions Specialist
          </h2>
          <p className="services__description">
            Delivering tailored solutions that prioritize user needs and
            business objectives
          </p>
          <button
            className="services__button button"
            onClick={() => openModal(5)}
          >
            Know More
          </button>
          <div
            className={`services__modal ${
              activeIndex === 5 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <i
                onClick={() => closeModal()}
                className="ri-close-line services__modal-close"
              ></i>
              <h2 className="services__modal-title">
                Customer-Centric Solutions Specialist
              </h2>

              <ul className="services__modal-list grid">
                <li className="services__modal-item">
                  Understanding client requirements and translating them into
                  actionable technical specifications
                </li>
                <li className="services__modal-item">
                  Engaging with stakeholders to gather feedback and iterate on
                  solutions for optimal outcomes
                </li>
                <li className="services__modal-item">
                  Prioritizing user experience enhancements and accessibility
                  features to maximize usability
                </li>
                <li className="services__modal-item">
                  Providing responsive support and proactive maintenance to
                  ensure long-term client satisfaction
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="services__card">
          <i className="ri-shake-hands-line services__icon"></i>
          <h2 className="services__title">
            Strategic Management and Leadership
          </h2>
          <p className="services__description">
            Providing strategic direction and effective leadership to drive
            organizational success and team excellence.
          </p>
          <button
            className="services__button button"
            onClick={() => openModal(6)}
          >
            Know More
          </button>
          <div
            className={`services__modal ${
              activeIndex === 6 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <i
                onClick={() => closeModal()}
                className="ri-close-line services__modal-close"
              ></i>
              <h2 className="services__modal-title">
                Strategic Management and Leadership
              </h2>

              <ul className="services__modal-list grid">
                <li className="services__modal-item">
                  Providing strategic vision and direction to align team efforts
                  with organizational objectives and deliver impactful results
                </li>
                <li className="services__modal-item">
                  Developing and executing strategic plans and initiatives to
                  achieve business objectives and maintain competitive advantage
                </li>
                <li className="services__modal-item">
                  Leading by example and inspiring team members to perform at
                  their best through motivation, empowerment, and mentorship
                </li>
                <li className="services__modal-item">
                  Orchestrating team dynamics and workflows to maximize
                  efficiency and productivity while fostering a culture of
                  collaboration and innovation
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
