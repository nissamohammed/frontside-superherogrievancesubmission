import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './admindashboard.css';
import { getAllcomplaintApi } from '../services/allApi';


function Admindashboard() {
  const [complaints, setComplaints] = useState([]);
  // State for filters
  const [statusFilter, setStatusFilter] = useState('');
  const [urgencyFilter, setUrgencyFilter] = useState('');
  const [characterFilter, setCharacterFilter] = useState('');

  // Fetch complaints
  const getAllcomplaints = async () => {
    const reqHeader = {
      "Content-Type": "application/json"
    };
    const result = await getAllcomplaintApi(reqHeader);
    if (result.status === 200) {
      const complaintsWithStatus = result.data.map(complaint => ({
        ...complaint,
        status: complaint.status || 'Pending' // Ensure "Pending" is the default status
      }));
      setComplaints(complaintsWithStatus);
      console.log(complaintsWithStatus
      );
      
    }
  };

  useEffect(() => {
    getAllcomplaints();
  }, []);

  // Handle accepting a complaint (update only the complaint with the matching id)
  const acceptComplaint = (email) => {
    const updatedComplaints = complaints.map((complaint) =>
      complaint.email === email ? { ...complaint, status: 'Accepted' } : complaint
    );
    setComplaints(updatedComplaints);
  };

  // Handle rejecting a complaint (update only the complaint with the matching id)
  const rejectComplaint = (email) => {
    const updatedComplaints = complaints.map((complaint) =>
      complaint.email === email ? { ...complaint, status: 'Rejected' } : complaint
    );
    setComplaints(updatedComplaints);
  };

  // Filter complaints based on the selected filters
  const filteredComplaints = complaints.filter((complaint) => {
    return (
      (statusFilter === '' || complaint.status === statusFilter) &&
      (urgencyFilter === '' || complaint.urgency === urgencyFilter) &&
      (characterFilter === '' || complaint.character === characterFilter)
    );
  });

  return (
    <>
      <Header />
      <div className='adminbg'>
        <div className="admin-dashboard">
          <h2>Admin Complaint Dashboard</h2>
          {/* Filter Section */}
          <div className="filters py-3">
            <label>Status: </label>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
            </select>

            <label className='ms-3'>Urgency: </label>
            <select value={urgencyFilter} onChange={(e) => setUrgencyFilter(e.target.value)}>
              <option value="">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <label className='ms-3'>Character: </label>
            <select value={characterFilter} onChange={(e) => setCharacterFilter(e.target.value)}>
              <option value="">All</option>
              <option value="Naruto Uzumaki">Naruto Uzumaki</option>
              <option value="Sasuke Uchiha">Sasuke Uchiha</option>
              <option value="Kakashi Hatake">Kakashi Hatake</option>
            </select>
          </div>

          {/* Complaints Table */}
          <table className="complaint-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Character</th>
                <th>Complaint</th>
                <th>Urgency</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              
              {filteredComplaints.map((complaint,index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{complaint.fullName}</td>
                  <td>{complaint.email}</td>
                  <td>{complaint.character}</td>
                  <td>{complaint.complaint}</td>
                  <td>{complaint.urgency}</td>
                  <td>{complaint.status}</td> {/* Show current status */}
                  <td>
                    {complaint.status === 'Pending' ? (
                      <>
                        <button
                          onClick={() => acceptComplaint(complaint.email)}
                          className="accept-btn"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => rejectComplaint(complaint.email)}
                          className="reject-btn"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span>{complaint.status}</span> // Show final status if not pending
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </>
  );
}

export default Admindashboard;
