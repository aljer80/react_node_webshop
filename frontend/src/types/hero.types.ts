/**
 * Interface representing a slide in a slideshow or carousel.
 * @interface Slide
 * @property {string} src - The source URL of the slide's image.
 * @property {string} text - The text or description associated with the slide.
 */
export interface Slide {
    src: string;
    text: string;
}