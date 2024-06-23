import React from 'react';
import './vacancy.css';

const Vacancy = () => {
  return (
    <div className="container">
      <header>
        <button className="back-button">&larr;</button>
        <h1>Вакансия</h1>
        <div className="icons">
          <button className="icon-button home"></button>
          <button className="icon-button profile"></button>
        </div>
      </header>
      <main>
        <h2>Название вакансии</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className="timeline">
          <div className="timeline-item completed">
            <div className="dot"></div>
            <div className="content">
              <h3>Название задания</h3>
              <p>Задание выполнено</p>
              <button className="task-button">Посмотреть задание</button>
            </div>
          </div>
          <div className="timeline-item checking">
            <div className="dot"></div>
            <div className="content">
              <h3>Название задания</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <button className="task-button red">Задание проверяется</button>
            </div>
          </div>
          <div className="timeline-item">
            <div className="dot"></div>
            <div className="content">
              <h3>Название задания</h3>
              <button className="task-button">Посмотреть задание</button>
            </div>
          </div>
          <div className="timeline-item">
            <div className="dot"></div>
            <div className="content">
              <h3>Название задания</h3>
              <button className="task-button">Посмотреть задание</button>
            </div>
          </div>
          <div className="timeline-item">
            <div className="dot"></div>
            <div className="content">
              <h3>Название задания</h3>
              <button className="task-button">Посмотреть задание</button>
            </div>
          </div>
          <div className="timeline-item">
            <div className="dot"></div>
            <div className="content">
              <h3>Название задания</h3>
              <button className="task-button">Посмотреть задание</button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>© Цукрович. Все права защищены.</p>
        <button className="social-button vk"></button>
      </footer>
    </div>
  );
};

export default Vacancy;
