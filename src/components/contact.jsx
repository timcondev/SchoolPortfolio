/*
Contact Component
Tim Conway
301495941
September 21st, 2024
 */
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    navigate("/");
    event.preventDefault();
  };
  return (
    <div>
      <div className="content">
        <h1>Contact me</h1>
        <h3>
          Please contact me directly at{" "}
          <a href="mailto:timconwaydev@outlook.com">Tim@TimConway.Dev</a> or
          through this form.
        </h3>
      </div>
      <br />
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div>
              <label>First Name:</label>
              <input type="text" />
            </div>
            <div>
              <label>Last Name:</label>
              <input type="text" />
            </div>
            <div>
              <label>Contact Number:</label>
              <input type="text" />
            </div>
            <div>
              <label>Email:</label>
              <input type="text" />
            </div>
            <div>
              <label>Message:</label>
              <textarea />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
