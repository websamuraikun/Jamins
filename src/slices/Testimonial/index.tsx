import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonial: FC<TestimonialProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    className="bg-(--clr-white)" id="reviews">
    <div className="container">
        <span className="section-label">What Our Customers Say</span>
        <h2 className="section-title">Don&lsquo;t Just Take Our Word for It</h2>
        <p className="section-subtitle">Here&apos;s what real customers across Leeds have to say about Jamin&apos;s.</p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-12">
            <div className="bg-(--clr-cream) rounded-(16px) p-8 relative before:content-[''] before:absolute before:text-(--clr-forest) before:font-(--font-display) before:text-[5rem] before:opacity-[0.12] before:top-2 before:left-6">
                <div className="text-(--clr-gold) text-[1rem] mb-4 tracking-[2px]">★★★★★</div>
                <blockquote className="text-[0.95rem] text-(--clr-text) leading-[1.7] mb-[1.2rem] italic">&quot;Absolutely brilliant job on our living room carpet. It had stains we thought were permanent — completely gone. Can&apos;t recommend Jamin&apos;s enough.&quot;</blockquote>
                <div className="text-[0.85rem] font-bold text-(--clr-deep)">Sarah T.</div>
                <div className="text-[0.8rem] text-(--clr-muted)">Headingley, Leeds</div>
            </div>
            <div className="bg-(--clr-cream) rounded-(16px) p-8 relative before:content-[''] before:absolute before:text-(--clr-forest) before:font-(--font-display) before:text-[5rem] before:opacity-[0.12] before:top-2 before:left-6">
                <div className="text-(--clr-gold) text-[1rem] mb-4 tracking-[2px]">★★★★★</div>
                <blockquote className="text-[0.95rem] text-(--clr-text) leading-[1.7] mb-[1.2rem] italic">&quot;We use Jamin&apos;s for our office carpets every quarter. Always reliable, always professional, and the results speak for themselves.&#34;</blockquote>
                <div className="text-[0.85rem] font-bold text-(--clr-deep)">Mark D.</div>
                <div className="text-[0.8rem] text-(--clr-muted)">Leeds City Centre</div>
            </div>
            <div className="bg-(--clr-cream) rounded-(16px) p-8 relative before:content-[''] before:absolute before:text-(--clr-forest) before:font-(--font-display) before:text-[5rem] before:opacity-[0.12] before:top-2 before:left-6">
                <div className="text-(--clr-gold) text-[1rem] mb-4 tracking-[2px]">★★★★★</div>
                <blockquote className="text-[0.95rem] text-(--clr-text) leading-[1.7] mb-[1.2rem] italic">&quot;Had our sofa and rugs done before Christmas. The difference was incredible — they looked brand new. Fantastic service from start to finish.&quot;</blockquote>
                <div className="text-[0.85rem] font-bold text-(--clr-deep)">Priya K.</div>
                <div className="text-[0.8rem] text-(--clr-muted)">Roundhay, Leeds</div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Testimonial;
