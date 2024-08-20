import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import StarsCanvas from "../components/canvas/Stars";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const validateForm = () => {
    const errors = {};
    if (!form.name) errors.name = "Name is required";
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid";
    }
    if (!form.message) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    emailjs.send(
      'service_edxi3zr',
      'template_ne9wh4b',
      {
        from_name: form.name,
        to_name: 'Art',
        from_email: form.email,
        to_email: 'arthalimi989@gmail.com',
        message: form.message,
      },
      '-NWp731-hJ2KBhmcB'
    ).then(() => {
      setLoading(false);
      setResponseMessage('Thank you for your message, I will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      setResponseMessage('Something went wrong. Please try again.');
    });
  };

  return (
    <div className="relative w-full h-full">
      <StarsCanvas />
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden relative z-10">
        <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className="flex-[0.75] bg-transparent backdrop-blur-md p-8 rounded-2xl border border-white"
        >
          <p className={styles.sectionSubText}> Get in touch </p>
          <h3 className={styles.sectionHeadText}> Contact.</h3>

          {responseMessage && (
            <div className="bg-blue-500 text-white p-4 mb-4 rounded">
              {responseMessage}
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className={`bg-gray-500 bg-opacity-50 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your Email?"
                className={`bg-gray-500 bg-opacity-50 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="9"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's your message?"
                className={`bg-gray-500 bg-opacity-50 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${errors.message ? 'border-red-500' : ''}`}
              />
              {errors.message && <span className="text-red-500">{errors.message}</span>}
            </label>

            <button
              className="bg-black py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl green-pink-gradient p-[4px]"
              type="submit"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] z-20"
        />
      </div>
      
    </div>
  );
}

export default SectionWrapper(Contact, "contact");