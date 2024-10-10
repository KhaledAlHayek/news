import { Slider } from "./classes/Slider";

const sliders = document.querySelectorAll(".slider");
sliders.forEach(slider => {
  new Slider(slider as HTMLElement);
})