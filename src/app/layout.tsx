import "./globals.css";

import { Inter, DM_Serif_Display, DM_Sans } from "next/font/google";
import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <body className="overflow-x-hidden antialiased">
        <Header />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink
          href="/"
          className="text-xl font-semibold tracking-tight"
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navigation.data?.links.map((item) => (
              <li
                key={asText(item.label)}
                className="font-semibold tracking-tight text-slate-800"
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}

async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <footer className="bg-(--clr-deep) text-[rgba(255,255,255,0.5)] text-center py-10 px-8">
        {footer.data.text && (
          <p className="text-(--clr-gold) decoration-none">{footer.data.text}</p>
        )}
        <div className="flex flex-wrap gap-6">
          {footer.data.email && (
            <a
              href={`mailto:${footer.data.email}`}
              className="text-(--clr-gold) decoration-none hover:text-slate-900"
            >
              {footer.data.email}
            </a>
          )}
          {footer.data.phone_number && (
            <a
              href={`tel:${footer.data.phone_number}`}
              className="text-(--clr-gold) decoration-none hover:text-slate-900"
            >
              {footer.data.phone_number}
            </a>
          )}
        </div>
        <p>
          &copy; {new Date().getFullYear()} Jamin&apos;s Carpet & Upholstery
          Cleaning. Leeds & West Yorkshire.
          <br />
          {footer.data.phone_number && (
            <a
              href={`tel:${footer.data.phone_number}`}
              className="text-(--clr-gold) decoration-none hover:text-slate-900"
            >
              {footer.data.phone_number}
            </a>
          )}{" "}
          &nbsp;·&nbsp;{" "}
          <a href={`mailto:${footer.data.email}`}>{footer.data.email}</a>
        </p>
    </footer>
  );
}
