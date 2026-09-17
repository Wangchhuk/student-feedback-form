const FeedbackDisplay = ({ data }) => {
  // Map the rating number to the full descriptive label for display
  const ratingMap = {
    1: "1 (Poor)",
    2: "2 (Poor)",
    3: "3 (Good)",
    4: "4 (Good)",
    5: "5 (Excellent)",
  };

  return (
    <div className="card-style feedback-display">
      <h3 className="card-title">FeedbackDisplay Component</h3>
      <div className="success-banner">Feedback Submitted Successfully!</div>

      <div className="display-field">
        <span className="display-label">Student Name:</span>
        <span className="display-value">{data.studentName}</span>
      </div>
      <div className="display-field">
        <span className="display-label">Course:</span>
        <span className="display-value">{data.course}</span>
      </div>
      <div className="display-field">
        <span className="display-label">Subject:</span>
        <span className="display-value">{data.subject}</span>
      </div>
      <div className="display-field">
        <span className="display-label">Rating:</span>
        <span className="display-value">{ratingMap[data.rating]}</span>
      </div>
      <div className="display-field">
        <span className="display-label">Submitted Feedback:</span>
        <span className="display-value">{data.feedback}</span>
      </div>
    </div>
  );
};

export default FeedbackDisplay;