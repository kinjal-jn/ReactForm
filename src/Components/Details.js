import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { formState } = location.state || {};

  if (!formState) {
    return <div>No details available. Please submit the form first.</div>;
  }

  return (
    <div className="details">
      <h3>Thanks for signing up, find your details below:</h3>
      <div>First Name: {formState.firstName}</div>
      <div>Last Name: {formState.lastName}</div>
      <div>Username: {formState.username}</div>
      <div>Email: {formState.email}</div>
      <div>Phone Number: {formState.phoneNo}</div>
      <div>Country: {formState.country}</div>
      <div>City: {formState.city}</div>
      <div>PAN Number: {formState.panNo}</div>
      <div>Aadhar Number: {formState.aadharNo}</div>
    </div>
  );
};

export default Details;
