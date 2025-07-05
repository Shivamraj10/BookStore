import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { FaCreditCard, FaUniversity, FaMobileAlt } from "react-icons/fa";

const PaymentPage = () => {
  const { id } = useParams();
  const [paymentDone, setPaymentDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
    bank: "",
    userId: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSimulatePayment = () => {
    let isValid = false;

    if (paymentMethod === "card") {
      const { cardNumber, expiry, cvv } = formData;
      isValid = cardNumber && expiry && cvv;
    } else if (paymentMethod === "upi") {
      isValid = formData.upiId;
    } else if (paymentMethod === "netbanking") {
      const { bank, userId, password } = formData;
      isValid = bank && userId && password;
    }

    if (!isValid) {
      setError("Please fill out all required fields.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setPaymentDone(true);
      setLoading(false);
    }, 2000);
  };

  if (paymentDone) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-100 to-blue-100 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">✅ Payment Successful!</h1>
          <p className="text-lg">
            Thank you for purchasing <span className="font-semibold">Book ID: {id}</span>
          </p>
          <Link to="/">
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-blue-100 px-4">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Checkout for Book ID: {id}
        </h2>

        {/* Payment Method Tabs */}
        <div className="flex justify-between gap-4 mb-6">
          {[
            { key: "card", label: "Card", icon: <FaCreditCard /> },
            { key: "upi", label: "UPI", icon: <FaMobileAlt /> },
            { key: "netbanking", label: "Net Banking", icon: <FaUniversity /> },
          ].map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setPaymentMethod(key)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition-all ${
                paymentMethod === key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>

        {/* Payment Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {paymentMethod === "card" && (
            <>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.cardNumber}
                onChange={handleChange}
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.expiry}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.cvv}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {paymentMethod === "upi" && (
            <input
              type="text"
              name="upiId"
              placeholder="yourname@upi"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.upiId}
              onChange={handleChange}
            />
          )}

          {paymentMethod === "netbanking" && (
            <>
              <select
                name="bank"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.bank}
                onChange={handleChange}
              >
                <option value="">-- Choose Your Bank --</option>
                <option value="SBI">SBI</option>
                <option value="HDFC">HDFC</option>
                <option value="ICICI">ICICI</option>
                <option value="Axis">Axis Bank</option>
              </select>

              {formData.bank && (
                <>
                  <input
                    type="text"
                    name="userId"
                    placeholder="User ID"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={formData.userId}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </>
              )}
            </>
          )}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="button"
            onClick={handleSimulatePayment}
            disabled={loading}
            className={`w-full py-3 rounded-md font-semibold transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {loading ? "Processing Payment..." : "Pay"}
          </button>
        </form>

        <div className="text-center mt-6">
          <Link to="/">
            <button className="text-blue-600 hover:underline text-sm">← Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
