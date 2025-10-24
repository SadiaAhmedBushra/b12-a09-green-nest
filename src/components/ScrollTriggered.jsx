// import * as motion from "motion/react-client"
// import type { Variants } from "motion/react"

import plant1 from "../assets/plant11.jpg";
import plant2 from "../assets/plant1.jpg";
import plant3 from "../assets/plant2.jpg";

import { motion } from "framer-motion";

export default function ScrollTriggered() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px"  }}>
      <h2
        style={{
          fontSize: "48px",
          fontWeight: "600",
          marginBottom: "0px",
          color: "#228B22",
        }}
      >
        GreenNest: Nurture Nature, Nurture You 
      </h2>
      <div style={container}>
        {food.map(([imgSrc, hueA, hueB], i) => (
          <Card i={i} imgSrc={imgSrc} hueA={hueA} hueB={hueB} key={i} />
        ))}
      </div>
    </div>
  );
}

function Card({ imgSrc, hueA, hueB, i }) {
  const background = `linear-gradient(306deg, ${hueA}, ${hueB})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <img
          src={imgSrc}
          alt="plant"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container = {
  margin: "100px auto",
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  flexWrap: "wrap",
  padding: "50px 0",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 0,
  marginBottom: 0,
  width: 400,
  height: 430,
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
  fontSize: 164,
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};

/**
 * ==============   Data   ================
 */

const food = [
  [plant1, "#9FE2BF", "#009E60"],
  [plant2, "#008080", "#4CBB17"],
  [plant3, "#40B5AD", "#4CBB17"],
];
