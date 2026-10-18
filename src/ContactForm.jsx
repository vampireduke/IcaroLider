import { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import logo from "./assets/output-onlinepngtools.png";
import "./ContactForm.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xyzabcde");
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`contact-form ${visible ? "contact-form--visible" : ""}`}>
      {/* LEFT: info */}
      <div className="contact-form__info">
        <img src={logo} alt="Contact us" className="contact-form__image" />
        <h2>Contact Us!</h2>
        <ul className="contact-form__details">
          <li>📞 +52 55 1234 5678</li>
          <li>✉️ hello@example.com</li>
        </ul>
      </div>

      {/* RIGHT: form */}
      <div className="contact-form__right">
        <h2 className="contact-form__title">Get in Touch!</h2>
      {state.succeeded ? (
        <p className="contact-form__success">Thanks! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form__inner">
          <label>
            <span>Subject</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span>Your Email</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={6} required />
          </label>
          <ValidationError prefix="Error" field="form" errors={state.errors} />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
    </div>
  );
};

export default ContactForm;