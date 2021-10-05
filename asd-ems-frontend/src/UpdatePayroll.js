import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useRouteMatch } from 'react-router-dom';
import WebLayout from './components/WebLayout';
import payrollService from './services/Payroll';
import './style.css';

const Content = () => {
  const match = useRouteMatch('/UpdatePayroll/:id');
  const [payroll, setPayroll] = useState({
    fname: '', lname: '', amount: '',
    bonus: '', paydate: '', paymethod: '',
    description: '',
  });

  const showPayroll = () => {
    return payroll !== undefined ? payroll : "";
  }

 const { fname, lname, amount, bonus, paydate, paymethod, description } = payroll;
 
 useEffect(() => {
    payrollService.get(match.params.id).then(e => setPayroll(e))
  }, [])

  console.log("payroll test: ", payroll)
  console.log("match params id type", typeof match.params.id)

  const onInputChange = e => {
    setPayroll({...payroll, [e.target.name]: e.target.value})
  }

  const onSubmit = async e => {
    await axios.put(`http://localhost:3001/payrolldb/${match.params.id}`, payroll)
    window.location = "/PayrollList"
  }

  function goBack(e) {
    e.preventDefault();
    var option = window.confirm("Do you want leave the page?\n\nSelect OK to go back and data will not be saved\n\nSelect CANCEL to remain on the page")
    if (option === true) { window.history.back(); }
  }

  function handleSubmit(e) {
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
    function isText(text) { return (/^[A-Za-z]+$/).test(text) }

    e.preventDefault();
    var s = window.confirm("Do you wish to update the payroll details with the entered information?\n\nSelect OK to proceed\n\nSelect CANCEL to remain on the page");
    if (s === true) {
      console.log(document.forms)
      var fname = document.forms["payrollform"]["fname"].value;
      var lname = document.forms["payrollform"]["lname"].value;
      var amount = document.forms["payrollform"]["amount"].value;
      var bonus = document.forms["payrollform"]["bonus"].value;
      var paydate = document.forms["payrollform"]["paydate"].value;
      var description = document.forms["updateform"]["description"].value;

      if (fname === "" || isText(fname) === false) { alert("First Name field is empty or invalid format input"); }
      else if (lname === "" || isText(lname) === false) { alert("Last Name field is empty or invalid format input"); }
      else if (amount === "" || isNumber(amount) === false) { alert("Amount field is empty or invalid format input"); }
      else if (bonus === "" || isNumber(bonus) === false) { alert("Contact Number field is empty or invalid format input"); }
      else if (description === "") { alert("Provide payment reason for this payroll"); }
      else if ((new Date().getFullYear() - new Date(paydate).getFullYear()) >= 3) { alert("Payment cannot exceed 3 years"); }
      else { onSubmit() }
    }
    else {document.getElementById("payrollform").reset()}
  }

  return (
  <>
      <div>
        <form id='payrollform' name='payrollform' onSubmit={e => onSubmit(e)}>
          <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Update Payroll Details </h1>
          <p style={{ textAlign: 'center' }}> {' '} Please fill out the payroll details{' '} </p>
          <label> First Name: </label>
          <small>Up to 255 Characters </small> <p> </p>
          <input
            type="text"
            defaultValue={showPayroll().fname}
            name="fname"
            className="formtextfield"
            value={fname}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Last Name: </label> <small>Up to 255 Characters </small> <p></p>
          <input
            type="text"
            name="lname"
            defaultValue={showPayroll().lname}
            className="formtextfield"
            value={lname}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Amount: ($) </label> <small> Up to 15 Digits </small> <p />
          <input
            type="text"
            defaultValue={showPayroll().amount}
            maxLength="15"
            name="amount"
            className="formtextfield"
            value={amount}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <label> Bonus: ($) </label> <small> Up to 6 Digits </small> <p />
          <input
            type="text"
            defaultValue={showPayroll().bonus}
            name="pcode" maxLength="6"
            className="formtextfield"
            value={bonus}
            onChange={e => onInputChange(e)}
          />{' '}
          <p />

          <label> Pay Date: </label>{' '}
          <small> Use the calendar on the right </small> <p />
          <input
            type="date"
            defaultValue={showPayroll().paydate}
            name="paydate"
            value={paydate}
            className="formtextfield"
            onChange={e => onInputChange(e)} />{' '}
          <p />

          <label> Payment Method: </label> <br />
          <select name="paymethod" className="formtextfield" value={paymethod} defaultValue={showPayroll().paymethod} onChange={e => onInputChange(e)} required>
            <option value="select"> -- Select one -- </option>
            <option value="cash"> Cash </option>
            <option value="cheque"> Cheque </option>
            <option value="eftpos"> EFTPOS </option>
            <option value="others"> Other </option>
          </select>{' '}
          <p />

          <label> Description: </label> <small> Up to 500 Characters </small> <p />
          <input
            type="text"
            defaultValue={showPayroll().description}
            name="state" maxLength="500"
            className="formtextfield"
            value={description}
            onChange={e => onInputChange(e)}
          />{' '}
          <br />

          <div style={{ textAlign: 'center', paddingTop: 10 }}>
            <button type="submit" id="submit" className="button" onClick={handleSubmit} > Update <b>{showPayroll().fname}</b> </button>{' '}
          </div>
        </form>
      </div>
    </> 
  );
};

const UpdatePayroll = () => {
  return <WebLayout content={Content()} />;
}

export default UpdatePayroll;