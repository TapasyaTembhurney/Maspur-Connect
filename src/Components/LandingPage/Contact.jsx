import React, { useState } from "react";
import { contactData } from "../../database/db";

function Contact() {
const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();
alert("Thank you for contacting us!");

```
setFormData({
  name: "",
  email: "",
  subject: "",
  message: "",
});
```

};

return ( <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-12">
{/* Header */} <div className="mx-auto mb-10 max-w-3xl text-center"> <h1 className="mb-3 text-3xl font-bold text-green-800 sm:text-4xl">
{contactData.title} </h1>

```
    <p className="text-sm text-gray-600 sm:text-base">
      {contactData.subtitle}
    </p>
  </div>

  {/* Main Container */}
  <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">

    {/* Contact Information */}
    <div className="bg-green-800 p-6 text-white sm:p-10">
      <h2 className="mb-4 text-2xl font-semibold">
        {contactData.heading}
      </h2>

      <p className="mb-8 text-sm leading-7 text-green-100 sm:text-base">
        {contactData.description}
      </p>

      <div className="space-y-7">
        <div>
          <h3 className="mb-1 font-semibold">📍 Address</h3>
          <p className="text-sm text-green-100">
            {contactData.address}
          </p>
        </div>

        <div>
          <h3 className="mb-1 font-semibold">📧 Email</h3>
          <p className="break-all text-sm text-green-100">
            {contactData.email}
          </p>
        </div>

        <div>
          <h3 className="mb-1 font-semibold">📞 Phone</h3>
          <p className="text-sm text-green-100">
            {contactData.phone}
          </p>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <div className="p-6 sm:p-10">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Your Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Message
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="5"
            required
            className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-green-800 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>

);
}

export default Contact;
