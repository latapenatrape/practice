import React, { useState } from 'react';
import Modal from './modal.js';
import './jobpage.css';

function JobPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setModalOpen(false);
    setCompleted(true);
  };

  return (
    <div className="job">
      <h1>Название вакансии</h1>
      <div className="job__map">
        <div className="job__checkpoint">
          <button onClick={() => setModalOpen(true)}>Посмотреть задание</button>
        </div>
        {/* Add more checkpoints as needed */}
      </div>
      {completed && (
        <div className="job__congratulations">
          <h2>Поздравляем вы завершили обучение!</h2>
          <p>Давайте закрепим знания итоговым тестированием</p>
        </div>
      )}
      {modalOpen && <Modal onComplete={handleComplete} />}
    </div>
  );
}

export default JobPage;
