import { useState } from "react";

export default function Book() {
  const [submitted, setSubmitted] = useState(false);

const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    roomType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  setSubmitted(true);

  setForm({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    roomType: "",
    message: "",
  });
};

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-28 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="text-center">
          <p className="uppercase tracking-[0.2em] text-sm">
            Reservation Request
          </p>

          <h1 className="mt-4 font-serif text-4xl md:text-6xl">
            Book Your Stay
          </h1>

          <p className="mt-6 text-[#3A3A3A]/70">
            Fill in your details and we'll confirm
            availability shortly.
          </p>
        </div>

        {submitted && (
  <div
    className="
      fixed inset-0 z-[100]
      flex items-center justify-center
      bg-black/40
      px-6
    "
  >
    <div
      className="
        w-full max-w-md
        bg-[#FAF7F2]
        rounded-3xl
        p-8
        text-center
        shadow-xl
      "
    >
      <h3 className="text-2xl font-serif text-[#3A3A3A]">
        Booking Request Sent
      </h3>

      <p className="mt-3 text-[#3A3A3A]/70">
        Your booking request has been submitted successfully.
      </p>

      <p className="mt-1 text-sm text-[#3A3A3A]/60">
        We will get back to you shortly.
      </p>

      <button
        onClick={() => setSubmitted(false)}
        className="
          mt-6
          px-6
          py-3
          rounded-xl
          bg-[#3A3A3A]
          text-[#FAF7F2]
        "
      >
        Close
      </button>
    </div>
  </div>
)}
        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Guest Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-2xl bg-[#F3EFE7]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-2xl bg-[#F3EFE7]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-[#F3EFE7]"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              required
              className="p-4 rounded-2xl bg-[#F3EFE7]"
            />

            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              required
              className="p-4 rounded-2xl bg-[#F3EFE7]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
  <div>
    <label
      htmlFor="adults"
      className="block mb-2 text-sm text-[#3A3A3A]/70"
    >
      Adults
    </label>

    <input
      id="adults"
      type="number"
      name="adults"
      min="1"
      value={form.adults}
      onChange={handleChange}
      className="w-full p-4 rounded-2xl bg-[#F3EFE7]"
    />
  </div>

  <div>
    <label
      htmlFor="children"
      className="block mb-2 text-sm text-[#3A3A3A]/70"
    >
      Children
    </label>

    <input
      id="children"
      type="number"
      name="children"
      min="0"
      value={form.children}
      onChange={handleChange}
      className="w-full p-4 rounded-2xl bg-[#F3EFE7]"
    />
  </div>
</div>
          <select
            name="roomType"
            value={form.roomType}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-[#F3EFE7]"
          >
            <option value="">Select Room Type</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Executive">Executive</option>
            <option value="Suite">Suite</option>
          </select>

          <textarea
            rows="5"
            name="message"
            placeholder="Special Requests"
            value={form.message}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-[#F3EFE7]"
          />

          <button
            type="submit"
            className="
              w-full
              py-4
              rounded-2xl
              bg-[#3A3A3A]
              text-[#FAF7F2]
              font-medium
            "
          >
            Send Booking Request
          </button>
        </form>

      </div>
    </section>
  );
}