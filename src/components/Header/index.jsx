// import React from 'react'
import './index.css';
function Header() {
  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <div className="header-logo"></div>
          <div className="header-nav">
            <ul className="header-list">
              <li>
                <a href="#">Vakansiyalar</a>
              </li>
              <li>
                <a href="#">Kandidatlar</a>
              </li>
              <li>
                <a href="#">Kompaniyalar</a>
              </li>
              <li>
                <a href="#">Xizmatlar</a>
              </li>
              <li>
                <a href="#">Ta’lim</a>
              </li>
            </ul>
          </div>
          <div className="header-end">
            <select className="select">
              <option>Ozb</option>
              <option>russian</option>
            </select>
            <button className="btn">Boshlash</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
