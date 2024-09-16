import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { getAllcomplaintApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { Link } from 'react-router-dom';

Chart.register(CategoryScale, LinearScale, BarElement, Title);

function Complaintdiagram() {
  const [complaints, setComplaints] = useState([]);

  // Fetch complaints
  const getAllcomplaints = async () => {
    const reqHeader = {
      "Content-Type": "application/json",
    };
    const result = await getAllcomplaintApi(reqHeader);
    if (result.status === 200) {
      setComplaints(result.data);
    }
  };

  useEffect(() => {
    getAllcomplaints();
  }, []);

  // Prepare data for chart (count complaints by status)
  const countByStatus = complaints.reduce(
    (acc, complaint) => {
      const status = complaint.status || 'Pending'; // Default to 'Pending'
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    },
    { Pending: 0, Accepted: 0, Rejected: 0 }
  );

  // Chart data and options
  const data = {
    labels: ['Pending', 'Accepted', 'Rejected'], // Status categories
    datasets: [
      {
        label: 'Complaints by Status',
        data: [countByStatus.Pending, countByStatus.Accepted, countByStatus.Rejected], // Complaint counts by status
        backgroundColor: ['#f0ad4e', '#5cb85c', '#d9534f'], // Colors for the bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Complaint Status Distribution',
      },
    },
  };

  return (
    <>
    <div >
    <Link to={'/admindashboard'}><FontAwesomeIcon icon={faArrowLeft} beat className='me-3 text-info ms-5 py-5 mt-5' size='2x' /></Link>
    </div>
    <div style={{ maxWidth: '700px', margin: '0 auto' }} className='p-5'>
      <h2>Complaint Status Chart</h2>
      <Bar data={data} options={options} />
    </div>
    </>
  );
}

export default Complaintdiagram;
