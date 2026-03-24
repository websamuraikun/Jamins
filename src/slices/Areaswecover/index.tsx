import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Areaswecover`.
 */
export type AreaswecoverProps = SliceComponentProps<Content.AreaswecoverSlice>;

/**
 * Component for "Areaswecover" Slices.
 */
const Areaswecover: FC<AreaswecoverProps> = ({ slice }) => {
  return (
    <section className="bg-(--clr-cream)"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    id="areas">
    <div className="container">
        <span className="section-label">{slice.primary.subheader}</span>
        <h2 className="section-title">{slice.primary.title}</h2>
        <p className="section-subtitle">{slice.primary.subtitle}</p>

        <div className="flex flex-wrap gap-3 mt-8">
          {slice.primary.areas.map((item,index) => (
              <span key={index} className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Leeds City Centre</span>
          ))}
        </div>
    </div>
</section>
  );
};

export default Areaswecover;
