import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Servicecta`.
 */
export type ServicectaProps = SliceComponentProps<Content.ServicectaSlice>;

/**
 * Component for "Servicecta" Slices.
 */
const Servicecta: FC<ServicectaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-(--clr-white)"
      id="services"
    >
      <div className="max-w-[1100px] my-0 mx-auto ">
        <span className="inline-block text-[0.8rem] font-bold tracking-[2px] uppercase text-(--clr-forest) mb-[0.8rem]">
          {slice.primary.subtitle}
        </span>
        <h2 className="section-title fservont-[--font-display] text-(--clr-deep)  leading-[1.2]">
          {slice.primary.title}
        </h2>
        <p className="text-[1.05rem] text-(--clr-muted) leading-[1.7] max-w-[600px]">
          {slice.primary.subheader}
        </p>

        <div className="grid gap-6 mt-12 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {slice.primary.cta.map((item, index) => (
            <div
              key={index}
              className="bg-(--clr-cream) rounded-2xl p-9 relative overflow-hidden transition-all duration-300 ease-[ease] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-(--clr-forest) before:scale-x-0 before:transition-all before:duration-300 before:ease-[ease] origin-left hover:before:scale-x-[1] hover:-translate-y-1 hover:hadow-[0_12px_32px_rgba(0,0,0,0.08)]"
            >
              <div className="w-14 h-14 bg-(--clr-forest) flex items-center justify-center mb-6">
               <PrismicNextImage className="w-7 h-7 brightness-0 invert"  field={item.svg_image} />
              </div>
              <h3 className="text-(--clr-deep) font-(--font-display) text-[1.3rem] mb-[0.8rem]">
                {item.title}
              </h3>
              <p className="text-[0.95rem] text-(--clr-muted) ">
                <PrismicRichText field={item.description} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicecta;
