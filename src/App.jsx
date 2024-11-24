import React, { useState } from "react";
import MainPage from "./MainPage.jsx";
import PaymentPage from "./PaymentPage.jsx";
import ProfilePage from './ProfilePage.jsx';
import Signup from "./Signup.jsx";
import './App.css'; // Импортируйте стили, если необходимо

function App() {
  const [currentPage, setCurrentPage] = useState("Main"); // Состояние для отслеживания текущей страницы

  // Функция для смены страниц
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Определяем, какой компонент отображать
  const renderPage = () => {
    switch (currentPage) {
      case "MainPage":
        return <MainPage onPageChange={handlePageChange} />;
      case "PaymentPage":
        return <PaymentPage onPageChange={handlePageChange} />;
      case "ProfilePage":
        return <ProfilePage onPageChange={handlePageChange} />;
      case "Signup":
        return <Signup onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="App">
        {renderPage()}
    </div>
  );
}

export default App;
