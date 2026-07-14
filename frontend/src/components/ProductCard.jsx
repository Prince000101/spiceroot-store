import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../hook/CartHook";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const Wishlisted = isInWishlist(product._id);

  return (
    <div className="recipe-card p-6">
      <img src={product.image} alt={product.name} className="h-48 w-full rounded-xl object-cover" />
      <h2 className="text-xl font-playfair mt-4 text-forest dark:text-cream">{product.name}</h2>
      <p className="text-saffron dark:text-spice-orange font-nunito text-sm">{product.category}</p>
      <p className="text-saffron dark:text-spice-orange font-bold font-nunito mt-2">₹{product.price}</p>
      <p className="text-yellow-500">⭐ {product.rating}</p>
      <p className="text-forest/70 dark:text-cream/70 font-nunito mt-3 text-sm">{product.description}</p>
      <div className="flex gap-3 mt-4">
        <button onClick={() => toggleWishlist(product._id, product)} className={`p-2 rounded-full transition ${Wishlisted ? "bg-saffron text-white" : "bg-sand/30 text-forest dark:bg-forest-light/30 dark:text-cream"}`}>
          <Heart size={18} />
        </button>
        <button onClick={() => addToCart(product)} className="bg-saffron hover:bg-spice-orange text-white p-2 rounded-full transition">
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
