import React, {  useState } from 'react';
import student from "./student.jpg"
import book from "./Slogo.jpg"
import Study from "./student.jpg"
import visaul from "./studentvisual.jpg"
const FeatureData = () => {
  const [features, setFeatures] = useState([
    {
      icon: student,
      title: 'Nursery Search',
      description: 'Find the best nurseries near you, tailored to your child\'s needs.',
    },
    {
      icon:book,
      title: 'School Comparison',
      description: 'Compare schools based on ratings, features, and parental feedback.',
    },
    {
      icon: visaul,
      title: 'Parent Reviews',
      description: 'Read reviews from other parents to make informed decisions about schools.',
    },
    {
      icon:Study,
      title: 'Ofsted Reports',
      description: 'Access detailed performance reports for schools and nurseries.',
    },
  ]);

  return (
    <section className="container my-5" style={{ marginTop: "100px", padding: '50px' }}>
      <h2 className="text-center mb-4">Features</h2>
      <div className="row">
        {features.map((feature, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card text-center shadow-sm">
          <img src={feature.icon} alt={`${feature.title} icon`} className="card-img-top" style={{ height: '100px', objectFit: 'cover' }} />
              <div className="card-body">
            <h5 className="card-title">{feature.title}</h5>
          <p className="card-text">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureData;
