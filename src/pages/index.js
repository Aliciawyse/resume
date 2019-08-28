import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
          </h1>
          <div className="subheading mb-5">
            {config.address}
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I'm a software engineer and WomenWhoCode Atlanta lead member.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Recent Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Support Engineer</h3>
              <div className="subheading mb-3">SalesLoft</div>
              <p>
                I spend my days answering support tickets and building custom reports for our top customers. I also pair program with full stack engineers to fix bugs or add new behavior to the codebase.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Ruby Apprentice</h3>
              <div className="subheading mb-3">RubyMe</div>
              <p>
                Contributed to open source Ruby projects with the help of a mentor.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2019 - August 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Front end intern</h3>
              <div className="subheading mb-3">Juice Analytics</div>
              <p>
                Fixed bugs and implemented enhancements for the core UI features within the product.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2018 - May 2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Recent Projects</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Ruby for Good: Babywearing</h3>
              <p>
                A lending library built with Ruby on Rails, so that members can try different types of carriers and find what works best for their family. This open source project will help the Mid-Atlantic Babywearing organization save $600 in annual software costs. Check out <a href="https://github.com/rubyforgood/babywearing/pulls?q=is%3Apr+is%3Aclosed+author%3AAliciawyse" target="blank">my contributions</a>.
              </p>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Refactr.tech</h3>
              <p>
                A GatsbyJS version of the Refactr.tech website. I doubled performance of site, turned it into a Progressive Web App (PWA) and increased accessibility. Check out the <a href="https://github.com/Aliciawyse/refactr_web_app" target="blank">GitHub repository</a> for this project.
              </p>
            </div>
          </div>
        </div>
      </section>


      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="writing"
      >
        <div className="w-100">
          <h2 className="mb-5">Writing</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="https://medium.com/@OptimistAlicia/learning-about-the-fundamentals-of-good-code-e2c5488c4402" target="blank">Learning About the Fundamentals of Good Code</a>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="https://code.likeagirl.io/how-do-you-handle-diving-into-an-existing-codebase-6510b22b3c07" target="blank">How do you handle diving into an existing codebase?</a>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="https://medium.com/@OptimistAlicia/my-first-hackathon-4356ce8974f8" target="blank">My first hackathon</a>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="talks"
      >
        <div className="w-100">
          <h2 className="mb-5">Talks</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="https://slides.com/aliciabarrett/gatsbyjs-refactr#/" target="blank">Rebuilding refactr.tech with GatsbyJS</a>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Georgia Tech Coding Boot Camp</h3>
              <div className="subheading mb-3">Web Development Certificate</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2017 - February 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">University of California Irvine</h3>
              <div className="subheading mb-3">B.A. Anthropology and Political Science</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2012</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
