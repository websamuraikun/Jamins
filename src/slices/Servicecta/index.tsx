import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      className="bg-(--clr-white)" id="services"
    >
    <div className="max-w-[1100px] my-0 mx-auto ">
        <span className="inline-block text-[0.8rem] font-bold tracking-[2px] uppercase text-(--clr-forest) mb-[0.8rem]">What We Do</span>
        <h2 className="section-title fservont-[--font-display] text-(--clr-deep)  leading-[1.2]">Cleaning Services That Make a Difference</h2>
        <p className="text-[1.05rem] text-(--clr-muted) leading-[1.7] max-w-[600px]">From a single rug to an entire office floor, we bring the same level of care and attention to every job.</p>

        <div className="services-grid">
            <div className="service-card">
                <div className="service-icon">
                    <svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2" fill="none" stroke="white" stroke-width="1.5"/><line x1="6" y1="10" x2="6" y2="14" stroke="white" stroke-width="1.5"/><line x1="10" y1="10" x2="10" y2="14" stroke="white" stroke-width="1.5"/><line x1="14" y1="10" x2="14" y2="14" stroke="white" stroke-width="1.5"/><line x1="18" y1="10" x2="18" y2="14" stroke="white" stroke-width="1.5"/></svg>
                </div>
                <h3>Carpet Cleaning</h3>
                <p>Deep extraction cleaning that removes embedded dirt, allergens, and stubborn stains. Your carpets will look, feel, and smell fresh — guaranteed.</p>
            </div>

            <div className="service-card">
                <div className="service-icon">
                    <svg viewBox="0 0 24 24"><path d="M4 16V8a4 4 0 014-4h8a4 4 0 014 4v8" fill="none" stroke="white" stroke-width="1.5"/><rect x="2" y="16" width="20" height="4" rx="2" fill="none" stroke="white" stroke-width="1.5"/><line x1="8" y1="4" x2="8" y2="16" stroke="white" stroke-width="1.2" opacity="0.5"/><line x1="16" y1="4" x2="16" y2="16" stroke="white" stroke-width="1.2" opacity="0.5"/></svg>
                </div>
                <h3>Upholstery Cleaning</h3>
                <p>Sofas, armchairs, and dining chairs restored to their best. We treat every fabric with care, lifting away years of wear and everyday grime.</p>
            </div>

            <div className="service-card">
                <div className="service-icon">
                    <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="1" fill="none" stroke="white" stroke-width="1.5"/><line x1="3" y1="8" x2="21" y2="8" stroke="white" stroke-width="1"/><line x1="3" y1="16" x2="21" y2="16" stroke="white" stroke-width="1"/><line x1="7" y1="4" x2="7" y2="20" stroke="white" stroke-width="0.8" opacity="0.4"/><line x1="12" y1="4" x2="12" y2="20" stroke="white" stroke-width="0.8" opacity="0.4"/><line x1="17" y1="4" x2="17" y2="20" stroke="white" stroke-width="0.8" opacity="0.4"/></svg>
                </div>
                <h3>Rug Cleaning</h3>
                <p>Whether it&apos;s a delicate Persian rug or a modern area rug, we provide specialist cleaning that protects the fibres and revives the colour.</p>
            </div>

            <div className="service-card">
                <div className="service-icon">
                    <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" fill="none" stroke="white" stroke-width="1.5"/><rect x="8" y="6" width="3" height="3" fill="white" opacity="0.6"/><rect x="13" y="6" width="3" height="3" fill="white" opacity="0.6"/><rect x="8" y="11" width="3" height="3" fill="white" opacity="0.6"/><rect x="13" y="11" width="3" height="3" fill="white" opacity="0.6"/><rect x="10" y="17" width="4" height="5" fill="none" stroke="white" stroke-width="1.2"/></svg>
                </div>
                <h3>Commercial Cleaning</h3>
                <p>Offices, retail spaces, and commercial properties. We work around your schedule to keep your business looking professional with minimal disruption.</p>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Servicecta;
