import { useState, FormEvent } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/yourFormID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Refer App</h1>
      <p className="text-gray-300 mb-6">
        We're launching soon. Join the list to get early access.
      </p>

      {submitted ? (
        <p className="text-green-400 text-lg">Thanks! You'll hear from us soon. 🎉</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded text-black"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded text-white font-semibold"
          >
            Notify Me
          </button>
        </form>
      )}
    </div>
  );
}

