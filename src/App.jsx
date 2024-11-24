import './App.css';
import Header from './components/Header';
import icon1 from './assets/header-icon.svg';
import icon from './assets/form-icon.svg';
import { useState, useRef } from 'react';

function App() {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('998');
  const [residence, setResidence] = useState('');
  const [employees, setEmployees] = useState(0);
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);

  // Inputlarga murojaat qilish uchun useRef
  const companyNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const residenceRef = useRef(null);
  const employeesRef = useRef(null);
  const descriptionRef = useRef(null);

  function validate() {
    if (companyName.length < 3 || companyName.length > 50) {
      alert(
        "Kompaniya nomi kamida 3 ta va eng ko'pi bilan 50 ta belgidan iborat bo'lishi kerak"
      );
      companyNameRef.current.focus(); // Fokusni kompaniya nomi inputiga qo'yish
      return false;
    }

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      alert("Email noto'g'ri! Faqat @gmail.com bilan tugashi kerak.");
      emailRef.current.focus(); // Fokusni email inputiga qo'yish
      return false;
    }

    const phonePattern = /^998\d{9}$/;
    if (!phonePattern.test(phone)) {
      alert(
        "Telefon raqam 998 dan boshlanib, 9 ta raqamdan iborat bo'lishi kerak!"
      );
      phoneRef.current.focus(); // Fokusni telefon inputiga qo'yish
      return false;
    }

    if (residence.length < 12) {
      alert('Yashash joy nomi kamida 12 ta belgi');
      residenceRef.current.focus(); // Fokusni yashash joyi inputiga qo'yish
      return false;
    }

    if (employees < 1000) {
      alert('Hodimlar soni hato');
      employeesRef.current.focus(); // Fokusni hodimlar soni inputiga qo'yish
      return false;
    }

    if (description.length < 10) {
      alert("Izoh kamida 10 ta harf bo'lishi kerak");
      descriptionRef.current.focus(); // Fokusni izoh inputiga qo'yish
      return false;
    }

    return true;
  }

  function handleSave(event) {
    event.preventDefault();

    const isValid = validate();
    if (!isValid) {
      return;
    }
    const user = {
      name: companyName,
      email: email,
      phone: phone,
      residence: residence,
      employees: employees,
      description: description,
      id: Date.now(),
    };
    const copiedData = [...data];
    copiedData.push(user);
    setData(copiedData);
  }

  return (
    <div>
      <Header />
      <div className="form container">
        <img src={icon1} alt="" />
        <h1>Kompaniya ma’lumotlari</h1>
        <h3>Kompaniya haqidagi ma’lumotlarni kiriting</h3>
        <div className="form-images">
          <img width={84} height={84} src={icon} alt="" />
          <label>
            Yuklash
            <input className="file" type="file" />
          </label>
        </div>

        <form className="form-two">
          <label>
            <div className="form-two-div">
              <span className="form-two-div-title">Kompaniya nomi *</span>
            </div>
            <input
              ref={companyNameRef}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              className="form-input"
              type="text"
              placeholder="Kompaniya nomi"
            />
          </label>
        </form>

        <form className="form-three">
          <label>
            <div className="form-email">
              <span className="form-two-email-title">Email *</span>
            </div>
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
            <div className="form-phone-div">
              <span className="phone-div-title">Telefon raqami *</span>
            </div>
            <input
              ref={phoneRef}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="phone-input"
              required
              type="tel"
              placeholder="UZ +998"
            />
          </label>

          <label>Davlat *</label>
          <div className="select">
            <select className="dav">
              <option>Davlat</option>
              <option>Shahar</option>
            </select>
          </div>

          <label>
            <div className="form-residence">
              <span className="form-two-residence-title">Yashash joyi *</span>
            </div>
            <input
              ref={residenceRef}
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
              className="form-input"
              type="text"
              placeholder="Joy"
            />
          </label>

          <label>
            <div className="form-employees">
              <span className="form-two-employees-title">Hodimlar soni *</span>
            </div>
            <input
              ref={employeesRef}
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
              className="form-input"
              type="number"
              placeholder="Hodimlar soni"
            />
          </label>

          <div className="footer">
            <label>Izoh</label>
            <input
              ref={descriptionRef}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="desc"
              type="text"
              placeholder="Kompaniya haqida izoh qoldiring"
            />
          </div>
        </form>

        <div className="buttons">
          <button className="first-btn">Ortga</button>
          <button onClick={handleSave} type="submit" className="two-bnt">
            Keyingisi
          </button>
        </div>
      </div>

      <div>
        {data.length > 0 &&
          data.map((user) => (
            <div className="container card" key={user.id}>
              <h3 className="company">{user.name}</h3>
              <h3 className="email">{user.email}</h3>
              <h3>{user.phone}</h3>
              <h3>{user.residence}</h3>
              <h3>{user.employees}</h3>
              <h3>{user.description}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
