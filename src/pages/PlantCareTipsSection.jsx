import React from "react";

const careTips = [
  {
    tipId: 1,
    tipTitle: "Watering",
    tipDescription:
      "Ensure your plants are watered regularly but avoid overwatering. Check the soil moisture before watering to keep roots healthy.",
    tipImage: "https://i.ibb.co.com/LXL2SjWv/watering.jpg",
  },
  {
    tipId: 2,
    tipTitle: "Sunlight",
    tipDescription:
      "Most indoor plants thrive in bright, indirect sunlight. Avoid placing them in direct harsh sunlight as it may burn the leaves.",
    tipImage: "https://i.ibb.co.com/ZRgGtgpV/sunlight.webp",
  },
  {
    tipId: 3,
    tipTitle: "Fertilizing",
    tipDescription:
      "Feed your plants with a balanced fertilizer during the growing season. This helps promote healthy growth and vibrant leaves.",
    tipImage: "https://i.ibb.co.com/1YShY0ss/f.jpg",
  },
  {
  tipId: 4,
  tipTitle: "Pruning",
  tipDescription: "Regularly trim dead or yellowing leaves to encourage healthy growth and prevent disease. Pruning helps maintain your plant's shape and size.",
  tipImage: "https://i.ibb.co.com/C5fXL0L1/pruning.webp",
}
];

const PlantCareTipsSection = () => {
  return (
    <div className=" my-15 ">
      <h2 className="text-3xl font-bold  mb-2 text-center">
        Plant Care Tips
      </h2>

      <section className="py-3 rounded-2xl flex flex-col lg:flex-row gap-5 ">
        {careTips.map((tips) => (
          <div
            key={tips.tipId}
            className="transform transition-transform duration-300 hover:scale-105 flex flex-row items-center w-full rounded-r-full shadow-2xl p-5 justify-between gap-3 mb-4"
          >
            <img
              src={tips.tipImage}
              alt={tips.tipTitle}
              className="w-30 h-40 object-cover rounded-2xl"
            />
            <div className="mr-2">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-xl text-base-300 font-semibold">
                  {tips.tipTitle}
                </h3>
              </div>
              <p className=" text-accent">{tips.tipDescription}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PlantCareTipsSection;
