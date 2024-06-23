import React, { useState } from 'react';
import './modal.css';

function Modal({ onComplete }) {
  const [answer, setAnswer] = useState('');

  return (
    <div className="modal">
      <h2>Название задания</h2>
      <p>Описание задания</p>
      <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <div className="modal__actions">
        <button onClick={onComplete} className="modal__button">Отправить ответ</button>
        <button className="modal__button">Прикрепить файл</button>
      </div>
    </div>
  );
}

export default Modal;
