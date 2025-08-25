"use client";

import { ChevronDown, Timer, FileText, Search } from "lucide-react";
import { AgGridTable } from "../ag-grid-table";
import { Button } from "../ui/button";
import { FeatureCard } from "../ui/feature-card";
import { FeatureGrid } from "../ui/feature-grid";
import { EmailCapture } from "../ui/email-capture";

export function Hero() {
  return (
    <section id="ag grid">
      <section className="py-24 pt-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-35">
          <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
            <div className="mx-auto block h-[600px] rounded-2xl max-sm:h-100 overflow-hidden">
              <div className="flex size-full items-center justify-center">
                <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
                  <div
                    style={{
                      transform:
                        "rotateX(50deg) rotateY(-5deg) rotateZ(-45deg)",
                    }}
                    className="relative top-5 left-1/2 -translate-x-1/2 flex justify-evenly w-full h-full hero-card-grid gap-2"
                  >
                    {/* COLUMN 1 (was FIRST COLUMN) */}
                    <div className="flex flex-col items-start gap-1">
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/AMD.png"
                          alt="AMD"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/VKTX.png"
                          alt="VKTX"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/TSLA.png"
                          alt="TSLA"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/MP.png"
                          alt="MP"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/NIO.png"
                          alt="NIO"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/SRPT.png"
                          alt="SRPT"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                    </div>

                    {/* COLUMN 2 (was SECOND COLUMN) */}
                    <div className="flex flex-col items-start gap-1">
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/NVDA.png"
                          alt="NVDA"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/QBTS.png"
                          alt="QBTS"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/MSFT.png"
                          alt="MSFT"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/CAT.png"
                          alt="CAT"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/PLTR.png"
                          alt="PLTR"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/RBLX.png"
                          alt="RBLX"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/KLAC.png"
                          alt="KLAC"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                    </div>

                    {/* COLUMN 3 (was THIRD COLUMN) */}
                    <div className="flex flex-col items-start gap-1">
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/REGN.png"
                          alt="REGN"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/OPEN.png"
                          alt="OPEN"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/UNH.png"
                          alt="UNH"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/NIO.png"
                          alt="NIO"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/CHWY.png"
                          alt="CHWY"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/BBAI.png"
                          alt="BBAI"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/REGN.png"
                          alt="REGN"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                    </div>

                    {/* COLUMN 4 (was FOURTH COLUMN) */}
                    <div className="flex flex-col items-start gap-1">
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/RIOT.png"
                          alt="RIOT"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/OSCR.png"
                          alt="OSCR"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/RKLB.png"
                          alt="RKLB"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/HIMS.png"
                          alt="HIMS"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/OKLO.png"
                          alt="OKLO"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/ARWR.png"
                          alt="ARWR"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                    </div>

                    {/* COLUMN 5 */}
                    <div className="flex flex-col items-start gap-1">
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/GLOB.png"
                          alt="GLOB"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/RDDT.png"
                          alt="RDDT"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/FSLR.png"
                          alt="FSLR"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/NBIS.png"
                          alt="NBIS"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/SPOT.png"
                          alt="SPOT"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/MDB.png"
                          alt="MDB"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/KLAC.png"
                          alt="KLAC"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/CRWV.png"
                          alt="CRWV"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/NEE.png"
                          alt="NEE"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                      <div className="relative z-50 mb-1 hero-card">
                        <img
                          src="/cards/NVO.png"
                          alt="NVO"
                          className="max-w-none max-h-none rounded-lg object-contain ring ring-gray-950/5 bg-white shadow-lg select-none"
                          style={{ transformStyle: "preserve-3d" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proxy Container */}
        <div className="absolute inset-0 z-10" />

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-20 mb-16">
          <div className="text-center mb-12">
            <div className="flex flex-col items-center justify-center flex-wrap mb-6 gap-2">
              <div className="flex flex-col items-center justify-center flex-wrap mb-6 gap-2">
                <div className="text-black text-4xl md:text-8xl font-bold whitespace-nowrap tracking-tight drop-shadow-2xl">
                  Take {" "}
                  <span className="bg-gray-50/90 rounded-xl px-2 py-0 drop-shadow-2xl">
                    Full Control
                  </span>{" "}
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-8xl font-bold whitespace-nowrap tracking-tight drop-shadow-2xl">
                    of your{" "}
                    <span
                      className="drop-shadow-2xl"
                      style={{ 
                        color: "#009DDB",
                        textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 10px #009DDB, 0 0 20px #009DDB, 0 0 30px #009DDB"
                      }}
                    >
                      Schwab {""}
                    </span>
                    Data.
                    {/* <p className="mt-4 text-4xl md:text-8xl font-bold whitespace-nowrap tracking-tight ml-4 drop-shadow-2xl">
                      With a <span className="underline">few clicks.</span>
                    </p> */}
                    <div className="text-4xl md:text-8xl font-bold whitespace-nowrap tracking-tight drop-shadow-2xl mt-4">
                      Join the{" "}
                      <span className="bg-gray-50/90 rounded-xl px-2 py-0 drop-shadow-2xl">
                        Waitlist
                      </span>{" "}
                      for free
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-black max-w-4xl mx-auto font-bold drop-shadow-xl mb-8">
              Streamline your trading & investment data interactions with our
              intelligent wrapper platform. Get more insights from equity,
              options, and futures trades.
            </p>

            {/* Waitlist Form */}
            <div id="email-signup-form">
              <EmailCapture 
                source="hero-page"
              />
            </div>
          </div>

          {/* AG Grid Data Table Section */}
          <div
            id="ag-grid-section"
            className="max-w-full mx-auto px-4 relative z-30 mt-38"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div
                  className="flex flex-col items-center justify-center cursor-pointer group transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById("ag-grid-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    See How It Works
                  </h2>
                  <ChevronDown className="h-8 w-8 text-foreground/60 group-hover:text-primary transition-all duration-300 group-hover:translate-y-1" />
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-2 shadow-lg">
                <AgGridTable />
              </div>
            </div>
          </div>

          {/* Button ref to Email Signup Form */}
          <div className="text-center mt-8 relative z-30">
            <Button
              size="lg"
              onClick={() => {
                const emailForm = document.getElementById('ag grid');
                if (emailForm) {
                  emailForm.scrollIntoView({ behavior: 'smooth' });
                  // Add emphasis animation to the email input after scrolling
                  setTimeout(() => {
                    const emailInput = emailForm.querySelector('input[type="email"]') as HTMLElement;
                    if (emailInput) {
                      emailInput.classList.add('animate-pulse');
                      emailInput.style.transform = 'scale(1.05)';
                      emailInput.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.5)';
                      emailInput.style.transition = 'all 0.3s ease';
                      
                      // Remove animation after 2 seconds
                      setTimeout(() => {
                        emailInput.classList.remove('animate-pulse');
                        emailInput.style.transform = 'scale(1)';
                        emailInput.style.boxShadow = '';
                      }, 2000);
                    }
                  }, 500); // Wait for scroll to complete
                }
              }}
              className="text-secondary-foreground hover:secondary-foreground-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Start Building
            </Button>
            <p className="mt-3 text-sm text-primary">
              Instant Access • No limits
            </p>
          </div>

          <FeatureGrid>
            <FeatureCard
              icon={<Timer className="w-6 h-6" />}
              title="95% Time Savings"
              description="Reduce data organization time from hours to minutes. Focus on trading, not data wrangling."
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Multiformat Support"
              description="Export your data to JSON, CSV + more in a ready to use format designed by you."
            />
            <FeatureCard
              icon={<Search className="w-6 h-6" />}
              title="2x Insights"
              description="Scale your strategy with 100% data accuracy by analyzing your trading performance"
            />
          </FeatureGrid>
        </div>
      </section>
    </section>
  );
}
