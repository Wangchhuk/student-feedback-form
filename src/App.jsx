import { useState } from "react";
import "./App.css"; // Ensure this matches the filename
import FeedbackForm from "./FeedbackForm";
import FeedbackDisplay from "./FeedbackDisplay";

export default function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFeedbackSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="app-container">
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      
      {/* Conditionally render the display component only after submission */}
      {submittedData && <FeedbackDisplay data={submittedData} />}
    </div>
  );
}