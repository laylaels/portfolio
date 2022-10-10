module "image-compare-viewer" {
  class ImageCompare {
    constructor(element: HTMLElement, options?: Partial<Options>);
    mount();
  }
  export interface Options {
    // UI
    controlColor: string;
    controlShadow: boolean;
    addCircle: boolean;
    addCircleBlur: boolean;
    // Labels
    showLabels: boolean;
    labelOptions: {
      before: string;
      after: string;
      onHover: boolean;
    };
    // Smoothing
    smoothing: boolean;
    smoothingAmount: number;
    // Other
    hoverStart: boolean;
    verticalMode: boolean;
    startingPoint: number;
    fluidMode: boolean;
  }
  export default ImageCompare;
}
