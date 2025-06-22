// components/Services.js
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fa-box',
      title: 'Lorem Ipsum',
      text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
    },
    {
      icon: 'fa-file-alt',
      title: 'Dolor Sitema',
      text: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata'
    },
    {
      icon: 'fa-chart-line',
      title: 'Sed ut perspiciatis',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur voluptate velit esse cillum'
    },
    {
      icon: 'fa-globe',
      title: 'Magni Dolores',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      icon: 'fa-sun',
      title: 'Nemo Enim',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
    },
    {
      icon: 'fa-calendar-check',
      title: 'Eiusmod Tempor',
      text: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi'
    }
  ];

  return (
    <section className="services-section">
      <div className="container-services">
        <div className="text-center mb-5">
          <h2 className="services-title text-white fw-bold">SERVICES</h2>
          <p className="text-light">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="row row-cols-2 row-cols-sm-2 g-4">
          {services.map((service, index) => (
            <div className="col" key={index}>
              <div className="service-box d-flex">
                <div className="service-icon"><i className={`fas ${service.icon}`}></i></div>
                <div>
                  <h5 className="fw-bold">{service.title}</h5>
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
