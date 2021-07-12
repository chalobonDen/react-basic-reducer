import React from 'react';
import PropTypes from 'prop-types';
import DataContext from '../data/DataContext';
import { useContext } from 'react';
import './ReportComponent.css';

const ReportComponent = ({ formatNumber }) => {
  const { income, expense } = useContext(DataContext);
  return (
    <div>
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h1>฿{formatNumber((income - expense).toFixed(2))}</h1>
      <div className="report-container">
        <div>
          <h4>ยอดรายรับ</h4>
          <p className="report plus">฿{formatNumber(income)}</p>
        </div>
        <div>
          <h4>ยอดรายจ่าย</h4>
          <p className="report minus">฿{formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  );
};

ReportComponent.propTypes = {
  formatNumber: PropTypes.func,
};

export default ReportComponent;
