export class Slider{
 
  private sliderElement: HTMLElement;
  private sliderContentWrapper?: HTMLElement;
  private sliderPrevButton?: HTMLElement;
  private sliderNextButton?: HTMLElement;
  private sliderElementsHolder?: HTMLElement;
  private sliderElements?: NodeListOf<HTMLElement>;
  private totalElements?: number;

  private index = 0;
  // Active Class for Elements = slider__element--active

  constructor(sliderEl: HTMLElement) {
    this.sliderElement = sliderEl;

    if(this.sliderElement){
      this.sliderContentWrapper = this.sliderElement.querySelector(".slider__wrapper")!;
      this.sliderPrevButton = this.sliderElement.querySelector(".slider__prev")!;
      this.sliderNextButton = this.sliderElement.querySelector(".slider__next")!;
      this.sliderElementsHolder = this.sliderElement.querySelector(".slider__elements")!;
      this.sliderElements = this.sliderElementsHolder.querySelectorAll(".slider__element")!;
      
      this.totalElements = this.sliderElements.length;
      
      this.init();
    }
  }
  
  init() {
    // start by showing the first element in the slider by default
    this.sliderElements![this.index].classList.add("slider__element--active");
    this.controlButtons();

    this.sliderPrevButton!.addEventListener("click", () => {
      this.prev();
      this.setup();
    });
    this.sliderNextButton!.addEventListener("click", () => {
      this.next();
      this.setup();
    });
  }

  private setup() {
    this.controlButtons();
    this.showUpElement();
  }

  private controlButtons() {
    this.index === 0 ? this.disablePrev() : this.enablePrev();
    this.index === this.totalElements! - 1 ? this.disableNext() : this.enableNext();
  }

  private showUpElement() {
    this.sliderElements!.forEach(el => {
      el.classList.remove("slider__element--active");
    });
    this.sliderElements![this.index].classList.add("slider__element--active");
  }

  private prev() {
    if(this.index != 0){
      this.index--;
    } 
  }
  private next() {
    if(this.index != this.totalElements! - 1){
      this.index++;
    } 
  }

  private disablePrev() {
    this.sliderPrevButton!.classList.add("disabled");
  }
  private disableNext() {
    this.sliderNextButton!.classList.add("disabled");
  }
  private enablePrev() {
    this.sliderPrevButton!.classList.remove("disabled");
  }
  private enableNext() {
    this.sliderNextButton!.classList.remove("disabled");
  }
}