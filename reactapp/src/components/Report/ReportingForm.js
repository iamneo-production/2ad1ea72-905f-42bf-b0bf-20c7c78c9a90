import React, { useState } from 'react';

const ReportingForm = ({ postId, onReport }) => {
  const [reason, setReason] = useState('');

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const report = {
      reason: reason
    };
    onReport(postId, report);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Reason:
        <input type="text" value={reason} onChange={handleReasonChange} />
      </label>
      <button type="submit">Report</button>
    </form>
  );
};

export default ReportingForm;
