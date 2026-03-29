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
      className="bg-(--clr-deep) text-(--clr-white)"
      id="process"
    >
      <div className="container text-center">
        <span className="section-label text-(--clr-gold)">
          {slice.primary.smallheader}
        </span>
        <h2 className="section-title text-(--clr-white)">
          {slice.primary.main_title}
        </h2>
        <p className="section-subtitle my-0 mx-auto text-[rgba(255,255,255,0.6)]">
          {slice.primary.sub_title}
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 mt-12">
          {slice.primary.item_step.map((item, index) => (
            <div key={index} className="text-center p-6">
              <div className="font-(--font-display) text-[3rem]  text-(--clr-gold) opacity-[0.3] mb-2">
                {item.step_number}
              </div>
              <h3 className="text-[1.1rem] font-bold mb-2.5">{item.title}</h3>
              <p className="text-[0.9rem] text-[rgba(255,255,255,0.6)] leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
