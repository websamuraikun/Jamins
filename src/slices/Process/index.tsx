import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Process`.
 */
export type ProcessProps = SliceComponentProps<Content.ProcessSlice>;

/**
 * Component for "Process" Slices.
 */
const Process: FC<ProcessProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    className="bg-(--clr-deep) text-(--clr-white)" id="process">
    <div className="container text-center" >
        <span className="section-label text-(--clr-gold)">How It Works</span>
        <h2 className="section-title text-(--clr-white)">Fresh Carpets in 3 Simple Steps</h2>
        <p className="section-subtitle my-0 mx-auto text-[rgba(255,255,255,0.6)]">No hassle, no stress. Just get in touch and we&apos;ll handle the rest.</p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 mt-12">
            <div className="text-center p-6">
                <div className="font-(--font-display) text-[3rem]  text-(--clr-gold) opacity-[0.3] mb-2">1</div>
                <h3 className="text-[1.1rem] font-bold mb-2.5">Get in Touch</h3>
                <p className="text-[0.9rem] text-[rgba(255,255,255,0.6)] leading-[1.6]">Call or message us for a free, no-obligation quote. Tell us what needs cleaning and we&apos;ll give you an honest price.</p>
            </div>
            <div className="text-center p-6">
                <div className="font-(--font-display) text-[3rem]  text-(--clr-gold) opacity-[0.3] mb-2">2</div>
                <h3 className="text-[1.1rem] font-bold mb-2.5">We Get to Work</h3>
                <p className="text-[0.9rem] text-[rgba(255,255,255,0.6)] leading-[1.6]">We&apos;ll arrive at a time that suits you, fully equipped and ready to go. Our deep cleaning process takes care of everything.</p>
            </div>
            <div className="text-center p-6">
                <div className="font-(--font-display) text-[3rem]  text-(--clr-gold) opacity-[0.3] mb-2">3</div>
                <h3 className="text-[1.1rem] font-bold mb-2.5">Enjoy the Results</h3>
                <p className="text-[0.9rem] text-[rgba(255,255,255,0.6)] leading-[1.6]">Sit back and enjoy carpets and upholstery that look and feel like new. It really is that simple.</p>
            </div>
        </div>
    </div>
</section>
  );
};

export default Process;
