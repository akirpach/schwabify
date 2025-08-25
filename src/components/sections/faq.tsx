"use client";

import { useState } from "react";

export function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleAccordion = (faqIndex: number) => {
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ # 1  */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4" data-orientation="vertical">
            <div
              data-state={openFAQ === 1 ? "open" : "closed"}
              data-orientation="vertical"
              className="border-b bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <h3
                data-state={openFAQ === 1 ? "open" : "closed"}
                data-orientation="vertical"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-r3-faq1"
                  aria-expanded={openFAQ === 1}
                  data-state={openFAQ === 1 ? "open" : "closed"}
                  data-orientation="vertical"
                  id="radix-r2-faq1"
                  onClick={() => toggleAccordion(1)}
                  className="flex flex-1 items-center justify-between text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180 px-6 py-4 hover:no-underline"
                  data-radix-collection-item=""
                >
                  <span className="text-lg font-semibold">
                    {" "}
                    How does Schwabify work with Schwab data?
                  </span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m4.93179 0.814107 5.23382 5.23382-5.23382 5.23383"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </h3>
              {openFAQ === 1 && (
                <div
                  data-state="open"
                  id="radix-r3-faq1"
                  role="region"
                  aria-labelledby="radix-r2-faq1"
                  data-orientation="vertical"
                  className="text-sm px-6 pb-4 text-gray-600"
                >
                  <p>
                    API Products are organized by Charles Schwab internal Line
                    of Business (LOB). API Products are created, maintained and
                    owned by Administrators from each LOB. Schwabify connects to
                    these APIs to fetch your data securely and display it in an
                    easy-to-understand format.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ # 2  */}
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4" data-orientation="vertical">
                <div
                  data-state={openFAQ === 2 ? "open" : "closed"}
                  data-orientation="vertical"
                  className="border-b bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <h3
                    data-state={openFAQ === 2 ? "open" : "closed"}
                    data-orientation="vertical"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-r3-faq2"
                      aria-expanded={openFAQ === 2}
                      data-state={openFAQ === 2 ? "open" : "closed"}
                      data-orientation="vertical"
                      id="radix-r2-faq2"
                      onClick={() => toggleAccordion(2)}
                      className="flex flex-1 items-center justify-between text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180 px-6 py-4 hover:no-underline"
                      data-radix-collection-item=""
                    >
                      <span className="text-lg font-semibold">
                        {" "}
                        What's included in the Free Plan?
                      </span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m4.93179 0.814107 5.23382 5.23382-5.23382 5.23383"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </h3>
                  {openFAQ === 2 && (
                    <div
                      data-state="open"
                      id="radix-r3-faq2"
                      role="region"
                      aria-labelledby="radix-r2-faq2"
                      data-orientation="vertical"
                      className="text-sm px-6 pb-4 text-gray-600"
                    >
                      <p>
                        The Free Plan is a 7-day trial plant that allows you to
                        connect to all of your Schwab's investing accounts and
                        pull its data into a tabular format.{" "}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* FAQ # 3  */}
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4" data-orientation="vertical">
                <div
                  data-state={openFAQ === 3 ? "open" : "closed"}
                  data-orientation="vertical"
                  className="border-b bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <h3
                    data-state={openFAQ === 3 ? "open" : "closed"}
                    data-orientation="vertical"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-r3-faq2"
                      aria-expanded={openFAQ === 3}
                      data-state={openFAQ === 3 ? "open" : "closed"}
                      data-orientation="vertical"
                      id="radix-r2-faq2"
                      onClick={() => toggleAccordion(3)}
                      className="flex flex-1 items-center justify-between text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180 px-6 py-4 hover:no-underline"
                      data-radix-collection-item=""
                    >
                      <span className="text-lg font-semibold">
                        {" "}
                        What's included in the Unlimited Plan?
                      </span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m4.93179 0.814107 5.23382 5.23382-5.23382 5.23383"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </h3>
                  {openFAQ === 3 && (
                    <div
                      data-state="open"
                      id="radix-r3-faq2"
                      role="region"
                      aria-labelledby="radix-r2-faq2"
                      data-orientation="vertical"
                      className="text-sm px-6 pb-4 text-gray-600"
                    >
                      <p>
                        The Unlimited Plan unlocks all features and allows you to acess data your full data and grants you
                        the ability to use custom functions similar to Excel's or Google Sheets'.
                        Additionally, you're NOT bound by the 7-day trial and can use Schwabify with unlimited data pulls.
                        On top of that you will receive a free template for option tracking catalog.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>



            {/* FAQ # 4  */}
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4" data-orientation="vertical">
                <div
                  data-state={openFAQ === 4 ? "open" : "closed"}
                  data-orientation="vertical"
                  className="border-b bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <h3
                    data-state={openFAQ === 4 ? "open" : "closed"}
                    data-orientation="vertical"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-r3-faq2"
                      aria-expanded={openFAQ === 4}
                      data-state={openFAQ === 4 ? "open" : "closed"}
                      data-orientation="vertical"
                      id="radix-r2-faq2"
                      onClick={() => toggleAccordion(4)}
                      className="flex flex-1 items-center justify-between text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180 px-6 py-4 hover:no-underline"
                      data-radix-collection-item=""
                    >
                      <span className="text-lg font-semibold">
                        {" "}
                        How accurate are the data pulls?
                      </span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m4.93179 0.814107 5.23382 5.23382-5.23382 5.23383"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </h3>
                  {openFAQ === 4 && (
                    <div
                      data-state="open"
                      id="radix-r3-faq2"
                      role="region"
                      aria-labelledby="radix-r2-faq2"
                      data-orientation="vertical"
                      className="text-sm px-6 pb-4 text-gray-600"
                    >
                      <p>
                        It's a 1:1 representation of the data available in your investing accounts. 
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>


            {/* FAQ # 5  */}
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4" data-orientation="vertical">
                <div
                  data-state={openFAQ === 5 ? "open" : "closed"}
                  data-orientation="vertical"
                  className="border-b bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <h3
                    data-state={openFAQ === 5 ? "open" : "closed"}
                    data-orientation="vertical"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-r3-faq2"
                      aria-expanded={openFAQ === 5}
                      data-state={openFAQ === 5 ? "open" : "closed"}
                      data-orientation="vertical"
                      id="radix-r2-faq2"
                      onClick={() => toggleAccordion(5)}
                      className="flex flex-1 items-center justify-between text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180 px-6 py-4 hover:no-underline"
                      data-radix-collection-item=""
                    >
                      <span className="text-lg font-semibold">
                        {" "}
                        Do I need to create a Schwab Developer account?
                      </span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m4.93179 0.814107 5.23382 5.23382-5.23382 5.23383"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </h3>
                  {openFAQ === 5 && (
                    <div
                      data-state="open"
                      id="radix-r3-faq2"
                      role="region"
                      aria-labelledby="radix-r2-faq2"
                      data-orientation="vertical"
                      className="text-sm px-6 pb-4 text-gray-600"
                    >
                      <p>
                        No, Schwabify handles all of that for you. We route your request through Schwab's LMS service to authenticate and authorize your data pulls. 
                        Then, you have a total control over your data.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>


            {/* FAQ # 6  */}
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4" data-orientation="vertical">
                <div
                  data-state={openFAQ === 6 ? "open" : "closed"}
                  data-orientation="vertical"
                  className="border-b bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <h3
                    data-state={openFAQ === 6 ? "open" : "closed"}
                    data-orientation="vertical"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-r3-faq6"
                      aria-expanded={openFAQ === 6}
                      data-state={openFAQ === 6 ? "open" : "closed"}
                      data-orientation="vertical"
                      id="radix-r2-faq6"
                      onClick={() => toggleAccordion(6)}
                      className="flex flex-1 items-center justify-between text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180 px-6 py-4 hover:no-underline"
                      data-radix-collection-item=""
                    >
                      <span className="text-lg font-semibold">
                        {" "}
                        Can I cancel mysubscription anytime?
                      </span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m4.93179 0.814107 5.23382 5.23382-5.23382 5.23383"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </h3>
                  {openFAQ === 6 && (
                    <div
                      data-state="open"
                      id="radix-r3-faq6"
                      role="region"
                      aria-labelledby="radix-r2-faq6"
                      data-orientation="vertical"
                      className="text-sm px-6 pb-4 text-gray-600"
                    >
                      <p>
                        Yes! You can cancel your subscription anytime with no questions asked. When you cancel, you'll retain access to Unlimited features until the end of your current billing period. 
                        After that, your account will automatically switch to the Free plan, and you can continue using basic features without any charge.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}
