export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <p>Contact me</p>

      <p>
        Please contact me directly at{" "}
        <a href="mailto:timconwaydev@outlook.com">tim@timconway.dev</a> or
        through this form.
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          First Name: <input type="text" />
        </label>
        <label>
          Last Name: <input type="text" />
        </label>
        <label>
          Contact Number: <input type="text" />
        </label>
        <label>
          Email: <input type="text" />
        </label>
        <label>
          Message:
          <textarea />
        </label>
      </form>
    </div>
  );
}
