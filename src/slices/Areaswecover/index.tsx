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
        <span className="section-label">Areas We Cover</span>
        <h2 className="section-title">Serving Leeds & Surrounding Areas</h2>
        <p className="section-subtitle">Based in Leeds, we cover the city and nearby parts of West Yorkshire. Not sure if we reach you? Just ask — we&apos;ll do our best.</p>

        <div className="flex flex-wrap gap-3 mt-8">
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Leeds City Centre</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Headingley</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Roundhay</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Chapel Allerton</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Horsforth</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Moortown</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Meanwood</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Kirkstall</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Armley</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Beeston</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Morley</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Pudsey</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Bramley</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Wetherby</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Bradford</span>
            <span className="bg-white px-[0.6rem] py-[1.2rem] rounded-[100px] text-[0.9rem] font-medium text-(clr-text) border border-[rgb(255,255,255,0.7)]">Wakefield</span>
        </div>
    </div>
</section>
  );
};

export default Areaswecover;
