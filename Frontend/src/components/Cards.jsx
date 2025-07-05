import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Cards({ item }) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate(`/payment/${item.id}`);
  };

  const handleAddToCart = () => {
    let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyAdded = existingCart.some((book) => book.id === item.id);
    if (!isAlreadyAdded) {
      existingCart.push(item);
      localStorage.setItem("cart", JSON.stringify(existingCart));
      toast.success("Added to Cart!");
    } else {
      toast("Already in Cart");
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 dark:bg-slate-900 dark:text-white dark:border border-gray-200">

        {/* Fixed height with object-contain to show full image */}
        <figure className="w-full h-[220px] bg-white flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
            onError={(e) => (e.target.src = "/default-book.png")} // Optional fallback
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-lg font-semibold">
            {item.name}
            <div className="badge bg-blue-500 text-white ml-2">
              {item.category}
            </div>
          </h2>
          <p className="text-sm">{item.title}</p>

          <div className="card-actions justify-between items-center mt-2">
            <div className="badge text-white bg-red-500 p-2">${item.price}</div>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 px-4 py-2 rounded-full border-2 border-pink-500 hover:bg-pink-500 hover:text-white transition-all text-sm"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 px-4 py-2 rounded-full border-2 border-pink-500 hover:bg-pink-500 hover:text-white transition-all text-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
