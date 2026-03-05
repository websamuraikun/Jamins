import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <>
    {/* <section className="relative bg-slate-900 text-white">
      {isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}
      <Bounded yPadding="lg" className="relative">
        <div className="grid justify-items-center gap-8">
          <div className="max-w-2xl text-center">
            <PrismicRichText
              field={slice.primary.text}
              components={components}
            />
          </div>
          {isFilled.link(slice.primary.buttonLink) && (
            <PrismicNextLink
              field={slice.primary.buttonLink}
              className="rounded-sm bg-white px-5 py-3 font-medium text-slate-800"
            >
              {slice.primary.buttonText || "Learn More"}
            </PrismicNextLink>
          )}
        </div>
      </Bounded>
    </section> */}

    <section className="bg-hero min-h-screen flex items-center justify-center text-center pt-24 pr-8 pb-16 relative overflow-hidden before:bg-grad before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0" id="home">
    <div className="relative z-10 max-w-[800px]">
        <div className="inline-block border border-solid border-yellow px-2 py-[1.2rem] rounded-[100px] text-[0.85rem] bg-gold-15 text-(--clr-gold) 
        font-semibold tracking-[1px] uppercase mb-6">Leeds & West Yorkshire</div>
        <h1 className="  font-(--font-display) title-text text-(--clr-white) mb-6"> Carpets & Upholstery That Look <em className="text-(--clr-gold) font-normal">Brand New</em> Again</h1>
        <p className="text-2xl text-[rgba(255,255,255,0.7)] leading-[1.7] max-w-[580px] mt-0 mx-auto mb-10"> Professional deep cleaning for homes, offices, and commercial spaces. Jamin&apos;s delivers results you can see and feel — no shortcuts, just spotless.</p>
        <div className=" flex gap-4 justify-center flex-wrap">
            <a href="#contact" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Get a Free Quote
            </a>
            <a href="#services" className="btn btn-outline">View Our Services</a>
        </div>
        <div className="mt-12 flex gap-8 justify-center flex-wrap">
            <div className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.5)] text-[0.85rem]">
                <svg className="w-[18px] h-[18px] fill-(--clr-gold) shrink-0" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>
                5-Star Rated
            </div>
            <div className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.5)] text-[0.85rem]">
                <svg className="w-[18px] h-[18px] fill-(--clr-gold) shrink-0" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Fully Insured
            </div>
            <div className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.5)] text-[0.85rem]">
                <svg className="w-[18px] h-[18px] fill-(--clr-gold) shrink-0" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3" fill="none" stroke="currentColor" stroke-width="2"/></svg>
                Professional Grade Equipment
            </div>
        </div>
    </div>
</section>
</>
  )
};

export default Hero;
