"use client";

import { EmailCapture } from "../../components/ui/email-capture";

export default function WaitlistPage() {
  return (
    <section id="waitlist">
      <section className="py-24 pt-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
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
                    {/* COLUMN 1 */}
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

                    {/* COLUMN 2 */}
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
                    </div>

                    {/* COLUMN 3 */}
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
                          src="/cards/INTL.png"
                          alt="INTL"
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
                    </div>

                    {/* COLUMN 4 */}
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
        <div className="container mx-auto px-4 relative z-20 mb-6 flex items-center justify-center min-h-[600px]">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center flex-wrap mb-6 gap-2">
              <div className="flex flex-col items-center justify-center flex-wrap mb-6 gap-2">
                <div className="text-black text-4xl md:text-6xl font-bold whitespace-nowrap tracking-tight drop-shadow-2xl">
                  No More <span className="bg-gray-50/90 rounded-xl px-2 py-0 drop-shadow-2xl">Copy-Pasting</span> Trading Data
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-2xl md:text-6xl font-bold whitespace-nowrap tracking-tight drop-shadow-2xl mt-4">
                    <span
                      className="drop-shadow-2xl"
                      style={{
                        color: "#009DDB",
                        textShadow:
                          "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 10px #009DDB, 0 0 20px #009DDB, 0 0 30px #009DDB",
                      }}
                    >
                      Schwabify
                    </span>{" "}
                    does it for you.
                  </div>
                  <div className="text-4xl md:text-6xl font-bold whitespace-nowrap tracking-tight drop-shadow-2xl mt-4">
                    Join the{" "}
                    <span className="bg-gray-50/90 rounded-xl px-2 py-0 drop-shadow-2xl">
                      Waitlist
                    </span>{" "}
                    for free
                  </div>
                </div>
              </div>
            </div>

            {/* Waitlist Form */}
            <EmailCapture 
              source="waitlist-page"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto text-center font-medium my-8">
            Get notified when we launch <a href="/" style={{ color: "#009DDB" }} className="hover:underline transition-all duration-200">Schwabify</a>. Early access includes
            exclusive template and priority support.
          </p>
        </div>
      </section>
    </section>
  );
}
