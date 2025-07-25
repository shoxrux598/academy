import React, { useState } from 'react';
import './contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    if (form.phone.length < 13) {
      setError("Telefon raqami kamida 13 ta belgidan iborat bo'lishi kerak. (+998 bilan birga)");
      return;
    }


    setError('');
    alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");

    setForm({
      name: '',
      phone: ''
    });
  };

  return (
    <div className="registration-container">
      <h2>Seminarda qatnashish uchun ro'yxatdan o'ting</h2>
      <form className="form-box" onSubmit={handleSubmit}>
        {error && <p className="form-error">{error}</p>}

        <label>Ismingiz</label>
        <input
          type="text"
          name="name"
          placeholder="Ubaydullo"
          value={form.name}
          onChange={handleChange}
        />

        <label>Raqamingiz</label>
        <input
          type="tel"
          name="phone"
          placeholder="+998940580276"
          value={form.phone}
          onChange={handleChange}
        />

        <p className="info-text">
          Ma’lumotlaringiz sir saqlanadi. Siz bilan faqat kurs bo‘yicha aloqaga chiqamiz
        </p>

        <button type="submit" className="submit-btn">Davom etish...</button>
      </form>

      <div className="note">
        <strong>Diqqat!</strong> <br />
        Faqat 1 ta guruh qabul qilinadi. Guruhda 12 ta o‘quvchi bo‘ladi. Shoshiling, guruhga qo‘shilishga ulgurib qoling!
      </div>

      <div className="status-boxes">
        <div className="status-card">
          <p className="title">Guruh joylar soni:</p>
          <div className="group-status">
            <span className="filled">To‘ldi</span>
            <span className="count">45 × 18</span>
          </div>
          <div className="group-status">
            <span className="available">Bo'sh</span>
            <span className="count">10 ta</span>
          </div>
        </div>
        <div className="status-card">
          <p className="title">Seminarga ro’yxatdan o’tdi</p>
          <span className="count total">22 ta</span>
        </div>
      </div>
    </div>
  );
}
