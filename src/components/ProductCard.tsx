export default function ProductCard({ img, badge, name, price, oldPrice }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-pink-500 shadow-lg">
      <div className="relative">
        <img src={badge} className="absolute top-0 left-0 w-10" alt="" />
        <img src={img} className="mx-auto w-32 h-32 object-contain" alt={name} />
      </div>

      <p className="text-white font-semibold text-sm mt-2 leading-tight">{name}</p>

      <div className="flex items-end justify-between mt-2">
        <span className="text-yellow-300 text-lg font-bold">${price}</span>
        <span className="text-white/70 text-xs line-through">${oldPrice}</span>
      </div>
    </div>
  );
}
