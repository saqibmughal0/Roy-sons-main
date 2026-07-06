import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { CORPORATE_HOLDINGS } from "@/lib/constants";

function HoldingDivisionItem({ name, href }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center gap-3.5 border border-neutral-200 bg-white p-19 hover:border-neutral-950 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 group min-h-[110px] rounded-[3px]"
    >
      {/* <Building2
        size={28}
        strokeWidth={1.3}
        className="text-neutral-400 group-hover:text-black group-hover:scale-105 transition-all duration-300"
      /> */}
      <span className="text-[13.5px] font-extrabold tracking-[0.15em] uppercase text-center text-neutral-600 group-hover:text-black transition-colors duration-300">
        {name}
      </span>
    </Link>
  );
}

export default function SubsidiariesHoldingsGrid({
  holdings = CORPORATE_HOLDINGS,
  allCompaniesPath = "/group-companies",
}) {
  return (
    <section className="py-16 border-b border-neutral-100 bg-neutral-50/20 font-sans">
      <div className="max-w-screen-xl mx-auto px-6">


        <div className="text-center max-w-5xl mx-auto mb-12">

          {/* Sub Heading */}
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500">
            Our Companies
          </span>

          {/* Main Heading */}
          <h2 className="mt-3 text-[22px] lg:text-[30px] font-black uppercase tracking-[0.18em] text-neutral-950">
            A Diverse Group of <br></br> Industry-Leading Businesses
          </h2>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 mb-9">
          {holdings.map((entity, index) => (
            <HoldingDivisionItem
              key={index}
              name={entity.name}
              href={entity.href}
            />
          ))}
        </div>

       
      </div>
    </section >
  );
}
