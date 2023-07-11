import React, { useState } from 'react';
import ReportingForm from './ReportingForm';

const Post = ({ post, onReport }) => {
  const [isReporting, setIsReporting] = useState(false);

  const handleReport = (postId, report) => {
    onReport(postId, report);
    setIsReporting(false);
  };

  return (
    <div>
      <p>{post.content}</p>
      {!isReporting && (
        <button onClick={() => setIsReporting(true)}>Report</button>
      )}
      {isReporting && (
        <ReportingForm postId={post.id} onReport={handleReport} />
      )}
    </div>
  );
};

export default Post;
