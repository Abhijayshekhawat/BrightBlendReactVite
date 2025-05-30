import React from 'react';
import '../styles/AdmissionSteps.css';
import iconArrow from '../assets/react.svg'; // put your arrow SVG in src/assets/

const steps = [
  {
    label: 'STEP ONE',
    title: 'Inquiry Form',
    description:
      'Fill out the online inquiry student form to express your interest in our school.',
  },
  {
    label: 'STEP TWO',
    title: 'Campus Tour',
    description:
      'Make a schedule and attend a tour of our campus with other parents and students.',
  },
  {
    label: 'STEP THREE',
    title: 'Application',
    description:
      'Complete and submit the online application form by the due date stated.',
  },
  {
    label: 'STEP FOUR',
    title: 'Acceptance',
    description:
      'Receive your student’s acceptance letter and join the BrightBlend family.',
  },
];

export default function AdmissionSection() {
  return (
    <section id="admission" className="admission-section">
      {/* Title */}
      <div className="admission-section__header">
        <h2 className="admission-section__heading">
          Simple steps to join us
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="admission-section__steps">
        {steps.map(({ label, title, description }) => (
          <div key={label} className="admission-section__step">
            <div className="step-icon">
              <img src={iconArrow} alt="" />
            </div>
            <span className="step-label">{label}</span>
            <h3 className="step-title">{title}</h3>
            <p className="step-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
