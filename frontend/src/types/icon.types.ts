/**
 * Interface representing an icon used in the application.
 * @interface Icon
 * @property {string} src - The source URL of the icon image.
 * @property {string} alt - The alt text for the icon image.
 * @property {string} title - The title or description of the icon.
 * @property {string} href - The hyperlink associated with the icon.
 */
export interface Icon {
    src: string,
    alt: string, 
    title: string,
    href: string
}