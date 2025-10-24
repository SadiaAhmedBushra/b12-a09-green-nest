import React from "react";

const greenExperts = [
  {
    expertId: 1,
    expertName: "Sue Biggs",
    expertSpecialization: "Ornamental Horticulture",
    expertImage:
      "https://i.ibb.co.com/prdRnqvn/Press-PDB-7-3-18-1112-2a20b4b-scaled.webp",
  },
  {
    expertId: 2,
    expertName: "Tim Richardson",
    expertSpecialization: "Garden Expert",
    expertImage: "https://i.ibb.co.com/3Xym4zF/Tim-Richardson-2-efc432c.webp",
  },
  {
    expertId: 3,
    expertName: "Alys Fowler",
    expertSpecialization: "Horticulture",
    expertImage: "https://i.ibb.co.com/3yrrvNsP/Alys-Fowler-new-3cbfec7.webp",
  },
];

const MeetOurGreenExperts = () => {
  return (
    <section className="my-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Meet Our Green Experts
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {greenExperts.map((expert) => (
          <div
            className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center bg-[#ECFFDC] px-2 py-4 rounded-lg"
            key={expert.expertId}
          >
            <img
              src={expert.expertImage}
              alt=""
              className="w-50 h-50 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold text-center">{expert.expertName}</h2>
            <p className="text-[#355E3B] text-center">
              {expert.expertSpecialization}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurGreenExperts;
