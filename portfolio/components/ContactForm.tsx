import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_ngo1mf7",
          "template_xzsqkwn",
          form.current,
          "HGtSpJeRz61MWwuVc"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col basis-1/2">
      <input
        type="text"
        name="user_name"
        className="form_input"
        placeholder="Name"
      />
      <input
        type="email"
        name="user_email"
        className="form_input"
        placeholder="Email"
      />
      <textarea
        name="message"
        placeholder="Message"
        className="form_textarea"
      />
      <button
        type="submit"
        className="self-start text-2xl text-white pl-3 hover:text-[var(--gold)] hover:scale-105 duration-200"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
