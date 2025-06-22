import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Jhonson',
      role: 'Product Manager',
      img:  require('../assets/T4.jpg'),
    },
    {
      name: 'Walter White',
      role: 'Chief Executive Officer',
      img: require('../assets/T1.jpg'),
    },
    {
      name: 'William Anderson',
      role: 'CTO',
      img: require('../assets/T3.jpg'),
    },
    {
      name: 'Amanda Jepson',
      role: 'Accountant',
      img: require('../assets/T2.jpg'),
    }
  ];

  return (
    <div className="team-section">
      <div className="team-header">
        <h2>Team</h2>
        <div className="underline"></div>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((person, index) => (
          <div className="team-card" key={index}>
            <img src={person.img} alt={person.name} className="team-img" />
            <div className="team-info">
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;