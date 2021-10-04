import { Button, Divider, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import WebLayout from './components/WebLayout';
import complaintService from "./services/Complaint";

const { Column } = Table;

const Content = () => {
  const [filecomplaint, setComplaint] = useState([]);

  useEffect(() => {
    complaintService.getAll().then(filecomplaint => {
      setComplaint(filecomplaint)
    })
  }, [])

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', }}> All File Complaints </h1>
        <input type="number" placeholder="File ID" name="requestedid" class="textfield" />
        <input type="textfield" placeholder="Type" name="requestedtype" class="textfield" />
        <input type="date" name="requesteddate" class="textfield" />
        <button className="button" name="searchbtn" type="submit">
          {' '}
          Search{' '}
        </button>{' '}
        <p />
      </div>

      <div style={{ paddingTop: 10 }}>
        <Table dataSource={filecomplaint}>
          <Column title="Complaint ID" dataIndex="id" key="id" />
          <Column title="First Name" dataIndex="fname" key="firstName" />
          <Column title="Last Name" dataIndex="lname" key="lastName" />
          <Column title="Type" dataIndex="complainttype" key="complainttype" />
          <Column title="Description" dataIndex="complaintdescription" key="complaintdescription" />
          <Column title="Date Submitted" dataIndex="complaintdate" key="complaintdate" />
          <Column title="Status" dataIndex="status" key="status" />
          <Column title="Options" key="id" render={(p) => (
            <>
              <Space split={<Divider type="vertical" />}>
                <Button> Solved </Button>
              </Space>
            </>
          )} />
        </Table>
      </div>
    </>
  );
};

const ComplaintList = () => {
  return <WebLayout content={Content()} />;
};

export default ComplaintList;