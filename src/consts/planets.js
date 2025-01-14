export default {
  mercury: {
    name: "mercury",
    radius: 0.03,
    orbitSpeed: 1.6,
    rotationSpeed: 0.016,
    texture: "./textures/mercury.webp",
  },
  venus: {
    name: "venus",
    radius: 0.095,
    orbitSpeed: 1.17,
    rotationSpeed: 0.004,
    texture: "./textures/venus/venus.webp",
    atmosphereTexture: "./textures/venus/venus_atmosphere.webp",
  },
  earth: {
    name: "earth",
    radius: 0.1,
    orbitSpeed: 1,
    rotationSpeed: 1,
    textures: {
      day: "./textures/earth/day.webp",
      night: "./textures/earth/night.webp",
      specularClouds: "./textures/earth/specularClouds.webp",
    },
  },
  mars: {
    name: "mars",
    radius: 0.053,
    orbitSpeed: 0.8,
    rotationSpeed: 1.03,
    texture: "./textures/mars.webp",
  },
  jupiter: {
    name: "jupiter",
    radius: 1.12,
    orbitSpeed: 0.43,
    rotationSpeed: 2.4,
    texture: "./textures/jupiter.webp",
  },
  saturn: {
    name: "saturn",
    radius: 0.945,
    orbitSpeed: 0.32,
    rotationSpeed: 2.3,
    texture: "./textures/saturn/saturn.webp",
    hasRings: true,
    ringTexture: "./textures/saturn/saturn_ring.png",
  },
  uranus: {
    name: "uranus",
    radius: 0.4,
    orbitSpeed: 0.23,
    rotationSpeed: 1.4,
    texture: "./textures/uranus.webp",
  },
  neptune: {
    name: "neptune",
    radius: 0.39,
    orbitSpeed: 0.18,
    rotationSpeed: 1.5,
    texture: "./textures/neptune.webp",
  },
};
