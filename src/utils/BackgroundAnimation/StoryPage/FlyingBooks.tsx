import React from 'react';
import './FlyingBooks.css';
import book from '../../../assets/favicon/favicon-96x96.png';

const FlyingBooks: React.FC = () => {
  const books = Array.from({ length: 6 }).map((_, i) => {
    const style: React.CSSProperties = {
      '--random': Math.random(),
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
    } as React.CSSProperties;

    return (
      <div key={i} className="flying-books__book" style={style}>
        <img className="flying-books__page flying-books__left" src={book} alt="Кот Баюн" />
        <div className="flying-books__page flying-books__right">
          <span>С</span>казки
          <p> и рассказы</p>
        </div>
      </div>
    );
  });

  return <div className="flying-books__scene">{books}</div>;
};

export default FlyingBooks;
