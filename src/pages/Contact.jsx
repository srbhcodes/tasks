// src/pages/Contact.jsx
import "./Contact.css"; // Update this path if necessary

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with us for support or inquiries!</p>
      <p>Email: support@servicebookingapp.com</p>
      <p>Phone: +1-800-123-4567</p>
      <p>Address: 123 Service Lane, City, Country</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            aria-label="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            aria-label="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            aria-label="Your Message"
          />
        </div>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
}
