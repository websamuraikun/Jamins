import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact: FC<ContactProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    className="cta-section text-center py-8 px-20" id="contact">
    <div className="container">
        <h2 className="section-title">Ready for Spotless Carpets?</h2>
        <p className="text-[rgba(255,255,255,0.7)] text-[1.1rem] mb-8">Get a free, no-obligation quote today. We&apos;ll get back to you fast.</p>
        <a href="tel:07XXXXXXXXX" className="cta-phone">07XXX XXX XXX</a>
        <div className="hero-buttons justify-center" >
            <a href="tel:07XXXXXXXXX" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Call Now
            </a>
            <a href="mailto:hello@jamins.co.uk" className="btn btn-outline text-white border-[gba(255,255,255,0.3)]" >
                Email Us
            </a>
        </div>
    </div>
</section>
  );
};

export default Contact;
