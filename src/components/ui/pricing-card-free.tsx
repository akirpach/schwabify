import { Check } from "lucide-react";

export function PricingCardFree() {
  return (
    <div className="w-full max-w-[350px] relative">
      <div className="rounded-xl bg-gradient-to-br from-white/80 via-white/60 to-gray-50/70 text-card-foreground shadow-lg backdrop-blur-md shadow-gray-200/80 transition-all duration-300 ease-out hover:shadow-xl hover:scale-[1.01] dark:from-zinc-900/60 dark:via-zinc-800/40 dark:to-zinc-900/70 dark:border-zinc-700/40 dark:shadow-zinc-900/25 dark:hover:shadow-zinc-800/40 h-full relative overflow-hidden flex flex-col border border-gray-200 p-8">
        <div className="flex flex-col space-y-1.5 p-6 relative z-10 bg-transparent">
          <h3 className="dark:text-gray-100 transition-colors duration-200 text-2xl tracking-tight text-gray-900 relative">
            <span className="ralative z-10">Free</span>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-20 flex items-baseline gap-2 mt-2 relative z-10">
            <span
              className="text-4xl font-bold"
              style={{ color: "#000" }}
            >$0</span>
            <span className="text-gray-600">/month</span>
          </p>
        </div>
        <div className="p-6 pt-0 flex-grow relative z-10 bg-transparent">
          <ul className="space-y-3 mt-4">
            <li className="flex items-start text-sm">
              <Check className="lucide lucide-check w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 relative z-10 flex items-center gap-2">
                Pull down your trading data
              </span>
            </li>
            <li className="flex items-start text-sm">
              <Check className="lucide lucide-check w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 relative z-10 flex items-center gap-2">
                5 custom templates
              </span>
            </li>
            <li className="flex items-start text-sm">
              <Check className="lucide lucide-check w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 relative z-10 flex items-center gap-2">
                Community support
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center p-6 relative mt-auto pt-6 z-10 bg transparent">
          <div className="w-full py-3 px-6 text-base font-medium bg-gray-100 text-gray-400 rounded-full text-center">
            Current Plan
          </div>
        </div>
      </div>
    </div>
  );
}