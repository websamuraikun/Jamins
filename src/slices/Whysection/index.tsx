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
    className="bg-(--clr-cream)" id="why">
    <div className="container">
        <span className="section-label">Why Jamin&apos;s</span>
        <h2 className="section-title">The Difference Is in the Detail</h2>
        <p className="section-subtitle">We don&apos;t cut corners. Every clean is done properly, with professional equipment and genuine care for your home or business.</p>

        <div className="grid gap-2 mt-12 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            <div className="flex gap-[1.2rem] items-start">
                <div className="text-[2.5rem] text-[rgba(45,92,62,0.15)] shrink-0 leading-1 font-(--font-display) ">01</div>
                <div>
                    <h3 className="text-[1.05rem] font-bold text-(--clr-deep) mb-[0.4rem]">Professional-Grade Results</h3>
                    <p className="text-[0.92rem] text-(--clr-muted) leading-[1.6]">We use industry-leading hot water extraction equipment that removes deep-set dirt domestic machines simply can&apos;t reach. The difference is visible.</p>
                </div>
            </div>
            <div className="flex gap-[1.2rem] items-start">
                <div className="text-[2.5rem] text-[rgba(45,92,62,0.15)] shrink-0 leading-1 font-(--font-display)">02</div>
                <div>
                    <h3 className="text-[1.05rem] font-bold text-(--clr-deep) mb-[0.4rem]">Trusted Across Leeds</h3>
                    <p className="text-[0.92rem] text-(--clr-muted) leading-[1.6]">Our reputation is built on word-of-mouth recommendations. We&apos;ve earned the trust of homeowners and businesses across Leeds and West Yorkshire.</p>
                </div>
            </div>
            <div className="flex gap-[1.2rem] items-start">
                <div className="text-[2.5rem] text-[rgba(45,92,62,0.15)] shrink-0 leading-1 font-(--font-display)">03</div>
                <div>
                    <h3 className="text-[1.05rem] font-bold text-(--clr-deep) mb-[0.4rem]">Honest, Upfront Pricing</h3>
                    <p className="text-[0.92rem] text-(--clr-muted) leading-[1.6]">No hidden fees, no pushy upsells. We&apos;ll give you a clear quote before we start and stick to it. Quality cleaning shouldn&apos;t come with surprise costs.</p>
                </div>
            </div>
            <div className="flex gap-[1.2rem] items-start">
                <div className="text-[2.5rem] text-[rgba(45,92,62,0.15)] shrink-0 leading-1 font-(--font-display)">04</div>
                <div>
                    <h3 className="text-[1.05rem] font-bold text-(--clr-deep) mb-[0.4rem]">Fully Insured & Reliable</h3>
                    <p className="text-[0.92rem] text-(--clr-muted) leading-[1.6]">We&apos;re fully insured for your peace of mind and we always turn up on time. Dependable service from start to finish.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Whysection;
