const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="flex gap-4 p-4 border-b">
            <img
                src={restaurant.imgUrl}
                alt={restaurant.name}
                className="w-40 h-40 object-cover rounded"
            />
            <div className="flex-1">
                <h2 className="text-4xl font-semibold">{restaurant.name}</h2>
                {/* <p className="text-gray-600">{restaurant.cuisine} {restaurant.price}</p> */}
                <p className="text-gray-400 text-sm mt-1">📍{restaurant.location}</p>
                <p className="text-gray-500 text-sm mt-1">{restaurant.description}</p>
             
                <div className="flex text-yellow-400 mt-2">
                  Rating: {restaurant.rating}
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;