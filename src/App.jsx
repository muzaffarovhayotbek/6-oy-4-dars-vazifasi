import './App.css';
import Header from './components/Header';
import icon1 from './assets/header-icon.svg';
import icon from './assets/form-icon.svg';
import { useState, useRef } from 'react';

function App() {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+998');
  const [residence, setResidence] = useState('');
  const [employees, setEmployees] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);

  const companyNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const residenceRef = useRef(null);
  const employeesRef = useRef(null);
  const descriptionRef = useRef(null);

  function validate() {
    if (companyName.length < 3 || companyName.length > 20) {
      alert("Kompaniya nomi 3-20 belgi oralig'ida bo'lishi kerak");
      companyNameRef.current.focus();
      return false;
    }

    const gmailPattern = /^[a-zA-Z0-9._%+-]{6,}@gmail\.com$/;
    if (!gmailPattern.test(email)) {
      alert("Email noto'g'ri. '@gmail.com' bilan tugashi kerak!");
      emailRef.current.focus();
      return false;
    }

    const phonePattern = /^\+998\d{9}$/;
    if (!phonePattern.test(phone)) {
      alert("Telefon raqam noto'g'ri. '+998' bilan boshlanib, 9 ta raqam kiritilishi kerak!");
      phoneRef.current.focus();
      return false;
    }

    if (residence.length < 8) {
      alert('Yashash joy nomi kamida 8 ta belgi bo‘lishi kerak');
      residenceRef.current.focus();
      return false;
    }

    if (isNaN(employees) || employees < 1 || employees > 1000) {
      alert("Hodimlar soni 1 dan 1000 gacha bo‘lishi kerak");
      employeesRef.current.focus();
      return false;
    }

    if (description.length < 10) {
      alert("Izoh kamida 10 ta belgi bo‘lishi kerak");
      descriptionRef.current.focus();
      return false;
    }

    return true;
  }

  function handleSave(event) {
    event.preventDefault();

    if (!validate()) return;

    const user = {
      name: companyName,
      email,
      phone,
      residence,
      employees: parseInt(employees),
      description,
      id: Date.now(),
    };

    setData((prevData) => [...prevData, user]);

    // Formni tozalash
    setCompanyName('');
    setEmail('');
    setPhone('+998');
    setResidence('');
    setEmployees('');
    setDescription('');
  }

  return (
    <div>
      <Header />
      <div className="form container">
        <img src={icon1} alt="Header Icon" />
        <h1>Kompaniya ma’lumotlari</h1>
        <h3>Kompaniya haqidagi ma’lumotlarni kiriting</h3>
        <div className="form-images">
          <img width={84} height={84} src={icon} alt="Form Icon" />
          <label>
            Yuklash
            <input className="file" type="file" />
          </label>
        </div>

        <form onSubmit={handleSave} className="form-content">
          <label>
            Kompaniya nomi *
            <input
              ref={companyNameRef}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="form-input"
              type="text"
              placeholder="Kompaniya nomi"
            />
          </label>

          <label>
            Email *
            <input
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              type="email"
              placeholder="Email"
            />
          </label>

          <label>
            Telefon raqami *
            <input
              ref={phoneRef}
              value={phone}
              onChange={(e) => {
                const input = e.target.value.replace(/[^\d+]/g, '');
                if (input.startsWith('+998') && input.length <= 13) setPhone(input);
              }}
              className="form-input"
              type="tel"
              placeholder="UZ +998"
            />
          </label>

          <label>
            Yashash joyi *
            <input
              ref={residenceRef}
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
              className="form-input"
              type="text"
              placeholder="Yashash joyi"
            />
          </label>

          <label>
            Hodimlar soni *
            <input
              ref={employeesRef}
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
              className="form-input"
              type="number"
              placeholder="Hodimlar soni"
            />
          </label>

          <label>
            Izoh
            <input
              ref={descriptionRef}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-input"
              type="text"
              placeholder="Kompaniya haqida izoh"
            />
          </label>

          <div className="buttons">
            <button type="reset" className="first-btn">
              Ortga
            </button>
            <button type="submit" className="two-bnt">
              Keyingisi
            </button>
          </div>
        </form>
      </div>

      <div className="data-display">
        {data.length > 0 &&
          data.map((user) => (
            <div className="card" key={user.id}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Telefon: {user.phone}</p>
              <p>Joylashuv: {user.residence}</p>
              <p>Hodimlar soni: {user.employees}</p>
              <p>Izoh: {user.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
