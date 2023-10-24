const Contact = () => {
  return (
    <div className="p-10 pt-20 bg-primary">
      <p className='text-4xl mt-8 font-bold text-center'>Contact Us</p>
      <div className="container mx-auto p-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary shadow-md rounded-md p-4">
            <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
            <p className="text-textcolor mb-4">
              If you have any questions or feedback, feel free to get in touch with us using the contact form or the contact information below.
            </p>
            <ul className="text-textcolor mb-4">
              <li>Email: example@example.com</li>
              <li>Phone: +1 (123) 456-7890</li>
            </ul>
          </div>
          <div>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1 text-textcolor">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 text-textcolor">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-600 invalid:text-red-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1 text-textcolor">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
