import React from 'react';
import WebLayout from './components/WebLayout';
// import { Link } from 'react-router-dom';

const content = () => {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> Welcome, "Name" </h1>
                <h2> <a href="#applicationsubmit"> Application Submitted </a> | <a href="#complaintsubmit"> Complaint Submitted </a> | <a href="#logtime"> Logtime </a> | <a href="#payhistory"> Pay History </a> </h2>
            </div>

            <div id='personal'>
                <h2 style={{ textAlign: 'left', fontSize: 20, textDecorationLine: 'overline', paddingBottom: 15, }}> Personal Information </h2>
                <button style={{ float: 'right' }} type='submit' className="update"> Update Information </button>
                <h3> Employee ID: </h3>
                <h3> Full Name: </h3>
                <h3> Date of Birth: </h3>
                <h3> Address: </h3>
                <h3> Bank Details </h3>
                <h3> Department: </h3>
                <h3> Employment Date: </h3>
                <h3> Username: </h3>
                <h3> Password: </h3>
                <h3> Bank Details: </h3>
            </div>

            <div id='applicationsubmit'>
                <h2 style={{ textAlign: 'left', fontSize: 20, textDecorationLine: 'overline', paddingTop: 15, paddingBottom: 15, }}> Application Submitted </h2>
                <table className="table">
                    <tr>
                        <th> Application ID </th>
                        <th> Date Submitted </th>
                        <th> Name </th>
                        <th> Description </th>
                        <th> Status </th>
                        <th> Option </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> today </td>
                        <td> apply leave </td>
                        <td> description </td>
                        <td> pending <br /> approved <br /> declined <br /> </td>
                        <td> <a href="#"> View </a> </td>
                    </tr>
                </table>
            </div>

            <div id='complaintsubmit'>
                <h2 style={{ textAlign: 'left', fontSize: 20, textDecorationLine: 'overline', paddingTop: 15, paddingBottom: 15, }}> Complaints Submitted </h2>
                <table className="table">
                    <tr>
                        <th> Complaint ID </th>
                        <th> Date Submitted </th>
                        <th> Name </th>
                        <th> Description </th>
                        <th> Status </th>
                        <th> Option </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> today </td>
                        <td> apply leave </td>
                        <td> description </td>
                        <td> pending <br /> solved <br /> </td>
                        <td> <a href="#"> View </a> </td>
                    </tr>
                </table>
            </div>

            <div id='logtime'>
                <h2 style={{ textAlign: 'left', fontSize: 20, textDecorationLine: 'overline', paddingTop: 15, paddingBottom: 15, }}> Logtime </h2>
                <table className="table">
                    <tr>
                        <th>Date</th>
                        <th>Login Time</th>
                        <th>Logout Time</th>
                        <th>Total Duration (mins) </th>
                    </tr>
                    <tr>
                        <td> today </td>
                        <td> 10 am </td>
                        <td> 10 pm </td>
                        <td> 720 </td>
                    </tr>
                </table>
            </div>

            <div id='payhistory'>
                <h2 style={{ textAlign: 'left', fontSize: 20, textDecorationLine: 'overline', paddingTop: 15, }}> Pay History </h2>
                <table className="table">
                    <tr>
                        <th> Date </th>
                        <th> Bank Number </th>
                        <th> Amount </th>
                        <th> Bonus </th>
                        <th> Total Salary </th>
                    </tr>
                    <tr>
                        <td> today </td>
                        <td> 123 </td>
                        <td>70000</td>
                        <td>5000</td>
                        <td>75000</td>
                    </tr>
                </table>
            </div>
        </>
    );
};

const Personal = () => {
    return <WebLayout content={content()} />;
};

export default Personal;