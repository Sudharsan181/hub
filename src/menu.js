import React, { useState } from "react";
import "./internal.css";

const Menu = () => {
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [showIncomeDetails, setShowIncomeDetails] = useState(false);
  const [showExpenseDetails, setShowExpenseDetails] = useState(false);

  const handleEmployeeDetailsClick = () => {
    setShowEmployeeDetails(!showEmployeeDetails);
  };
  const handleIncomeDetailsClick = () => {
    setShowIncomeDetails(!showIncomeDetails);
  };
  const handleExpenseDetailsClick = () => {
    setShowExpenseDetails(!showExpenseDetails);
  };
  

  return (
    <div className="menu">
      <div className="menu-logo">SK Farms & Stockers</div>
      <nav className="menu-nav">
        <div className="menu-nav-item">
          <a href="#">Home</a>
        </div>
        <div className="menu-nav-item">
          <a href="#">Data</a>
          <div className="menu-nav-dropdown">
            <a href="#" onClick={handleEmployeeDetailsClick}>
              Employee Details
            </a>
            <a href="#" onClick={handleIncomeDetailsClick}>Income Details</a>
            <a href="#" onClick={handleExpenseDetailsClick}>Expenses Details</a>
          </div>
        </div>
        <div className="menu-nav-item">
          <a href="#">Services</a>
          <div className="menu-nav-dropdown">
            <a href="#">Farming</a>
            <a href="#">Stockers</a>
            <a href="#">Exports</a>
          </div>
        </div>
        <div className="menu-nav-item">
          <a href="#">Contact</a> 
        </div>
      </nav>
      <div className="menu-search">
        <input type="text" placeholder="Search" />
        <button>Go</button>
      </div>
      {showEmployeeDetails && (
        <div className="employee-details-container">
          <div className="employee-details-title">Employee Details</div>
          <form className="employee-details-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Employee Name"/>
            <label htmlFor="date-of-join">Date of Join</label>
            <input type="date" id="date-of-join" name="date-of-join" />
            <label htmlFor="salary">Salary</label>
            <input type="text" id="salary" name="salary" placeholder="Salary" />
            <label htmlFor="appeared">Appeared</label>
            <input type="text" id="appeared" name="appeared" placeholder="Days Appeared"/>
            <div className="employee-details-actions">
              <button type="submit">Save</button>
              <button type="button" onClick={handleEmployeeDetailsClick}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
       {showIncomeDetails && (
        <div className="employee-details-container">
          <div className="employee-details-title">Income Details</div>
          <form className="employee-details-form">
            <label htmlFor="name">Income</label>
            <input type="text" id="name" name="name" placeholder="Income"/>
            <label htmlFor="date-of-join\">Date of Entry</label>
            <input type="date" id="date-of-join" name="date-of-join" />
            <label htmlFor="salary">Profit Percentage</label>
            <input type="text" id="salary" name="salary" placeholder="Profit Percentage" />
            <label htmlFor="appeared">Days In Count</label>
            <input type="text" id="appeared" name="appeared" placeholder="Days In Count"/>
            <div className="employee-details-actions">
              <button type="submit">Save</button>
              <button type="button" onClick={handleIncomeDetailsClick}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
       {showExpenseDetails && (
        <div className="employee-details-container">
          <div className="employee-details-title">Expenses Details</div>
          <form className="employee-details-form">
            <label htmlFor="name">Expenses</label>
            <input type="text" id="name" name="name" placeholder="Expenses"/>
            <label htmlFor="date-of-join">Date of Entry</label>
            <input type="date" id="date-of-join" name="date-of-Entry" />
            <label htmlFor="salary">Expenses Percentage</label>
            <input type="text" id="salary" name="salary" placeholder="Expenses Percentage" />
            <label htmlFor="appeared">Days In Count</label>
            <input type="text" id="appeared" name="appeared" placeholder="Days In Count"/>
            <div className="employee-details-actions">
              <button type="submit">Save</button>
              <button type="button" onClick={handleExpenseDetailsClick}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Menu;
