import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getRange = (hexColor) => {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
};

const getScales = (hexColor, numOfColors) => {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numOfColors);
};

const getPalette = (starterPalette) => {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };
  for (const level of levels) {
    newPalette.colors[level] = [];
  }
  for (const color of starterPalette.colors) {
    let scale = getScales(color.color, 10).reverse();
    for (const i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
};

const getShades = (colors, colorId) => {
  const shades = [];
  for (let c in colors) {
    shades.push(colors[c].find((c) => c.id === colorId));
  }
  return shades.slice(1);
};

export { getPalette, getShades };
