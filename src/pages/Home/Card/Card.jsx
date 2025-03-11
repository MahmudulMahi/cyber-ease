import card1 from "../../../assets/card/card1.png";
import card2 from "../../../assets/card/card2.png";
import card3 from "../../../assets/card/card3.png";

const latestPosts = [
  {
    id: 1,
    image: card1,
    date: "24 Nov 2024",
    title: "Future of Space Flights",
  },
  {
    id: 2,
    image: card2,
    date: "24 Nov 2024",
    title: "New Era of Transportation",
  },
  {
    id: 3,
    image: card3,
    date: "24 Nov 2024",
    title: "Generation Based AI",
  },
];

const Card = () => {
  return (
    <div className="w-[90%] mx-auto px-1 md:px-6 py-12 mt-7">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Latest from CyberEase
      </h2>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {latestPosts.map((post) => (
          <div key={post.id} className="relative rounded-xl overflow-hidden shadow-lg">
            {/* Image Section */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 sm:h-72 lg:h-80 object-cover"
            />

            {/* Content Card */}
            <div className="absolute bottom-0 left-3 md:left-2 lg:left-4 2xl:left-5  right-4 transform bg-white w-11/12  py-4 px-6 rounded-t-lg text-center shadow-md">
              <p className="text-sm text-gray-500">{post.date}</p>
              <h3 className="text-lg font-semibold">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow Button */}
      <div className="flex justify-center mt-12">
        <button className="border border-black rounded-full w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white transition">
          ➜
        </button>
      </div>
    </div>
  );
};

export default Card;
