import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Whysection`.
 */
export type WhysectionProps = SliceComponentProps<Content.WhysectionSlice>;

/**
 * Component for "Whysection" Slices.
 */
const Whysection: FC<WhysectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-(--clr-cream)"
      id="why"
    >
      <div className="container">
        <span className="section-label">
          {slice.primary.ttile_header} Why Jamin&apos;s
        </span>
        <h2 className="section-title">
          {slice.primary.title} The Difference Is in the Detail
        </h2>
        <p className="section-subtitle">
          {slice.primary.subtitle}We don&apos;t cut corners. Every clean is done
          properly, with professional equipment and genuine care for your home
          or business.
        </p>

        <div className="grid gap-2 mt-12 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {slice.primary.iitem.map((item, index) => (
            <div key={index} className="flex gap-[1.2rem] items-start">
              <div className="text-[2.5rem] text-[rgba(45,92,62,0.15)] shrink-0 leading-1 font-(--font-display)">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-[1.05rem] font-bold text-(--clr-deep) mb-[0.4rem]">
                  {item.service_title}
                </h3>
                <p className="text-[0.92rem] text-(--clr-muted) leading-[1.6]">
                  {item.item_description}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Whysection;
