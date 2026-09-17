import { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    course: "",
    subject: "",
    rating: "",
    feedback: "",
  });

  const [error, setError] = useState("");

  const ratingsWithLabels = [
    { num: 1, label: "1 (Poor)" },
    { num: 2, label: "2 (Poor)" },
    { num: 3, label: "3 (Good)" },
    { num: 4, label: "4 (Good)" },
    { num: 5, label: "5 (Excellent)" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.feedback.trim()) {
      setError("Please enter your feedback.");
      return;
    }
    setError("");
    onSubmit(formData);
  };

  return (
    <div className="card-style feedback-form">
      <h3 className="card-title">Student Feedback Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label-text" htmlFor="studentName">Student Name</label>
          <input
            id="studentName"
            className="input-field"
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="label-text" htmlFor="course">Course</label>
          <input
            id="course"
            className="input-field"
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="label-text" htmlFor="subject">Subject</label>
          <input
            id="subject"
            className="input-field"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="label-text">Rating</label>
          <div className="rating-group">
            {ratingsWithLabels.map((item) => (
              <label key={item.num} className="rating-label">
                <input
                  type="radio"
                  name="rating"
                  value={item.num}
                  checked={formData.rating === String(item.num)}
                  onChange={handleChange}
                  required
                />
                {item.label}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="label-text" htmlFor="feedback">
            Feedback <span className="feedback-required">*</span>
          </label>
          <textarea
            id="feedback"
            className="feedback-textarea"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="5"
          />
          {error && <div className="validation-error">{error}</div>}
        </div>

        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;