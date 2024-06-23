import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function HomePage() {
  const [city, setCity] = useState('Калининград');
  const jobs = [
    { id: 1, title: 'Женский парикмахер' },
    { id: 2, title: 'Мужской парикмахер' },
    { id: 3, title: 'Администратор' },
    { id: 4, title: 'Промоутер' },
    { id: 5, title: 'Мастер маникюра' },
  ];

  return (
    <div className="home">
      <section className="home__offer">
        <img src="owner-photo.png" alt="Владелец компании" className="home__photo"/>
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <Link to="/vacancy"><button className="start-button">Приступить к обучению</button></Link>
      </section>
      <section className="home__jobs">
        <h2>Вакансии</h2>
        <div className="home__dropdown">
          <span>{city}</span>
          <select onChange={(e) => setCity(e.target.value)}>
            <option value="Калининград">Калининград</option>
            <option value="Москва">Москва</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Новосибирск">Новосибирск</option>
            <option value="Владивосток">Владивосток</option>
          </select>
        </div>
        <div className="home__job-cards">
          {jobs.map(job => (
            <div key={job.id} className="home__job-card">
              <h3>{job.title}</h3>
              <Link to={`/job/${job.id}`} className="home__job-button">Пройти обучение</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
