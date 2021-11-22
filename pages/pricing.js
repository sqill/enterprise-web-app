import Footer from "../components/Landing/Footer";
import Header from "../components/Landing/Header";

export default function PricingPage() {
  return (
    <div className="bg-gray-50">
      <Header filled />

      <main>
        <div>
          <div className="relative bg-primary-600">
            <div aria-hidden="true" className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"></div>

            <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                <span className="block lg:inline">Simple pricing,</span>
                <span className="block lg:inline">no commitment.</span>
              </h1>
              <p className="mt-4 text-xl text-primary-100">Everything you need, nothing you don&apos;t. Pick a plan that best suits your business.</p>
            </div>

            <h2 className="sr-only">Plans</h2>

            <div className="relative mt-12 flex justify-center sm:mt-16">
              <div className="bg-primary-700 p-0.5 rounded-lg flex">
                <button type="button" className="relative bg-white py-2 px-6 border-primary-700 rounded-md shadow-sm text-sm font-medium text-primary-700 whitespace-nowrap hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white focus:z-10">Monthly billing</button>
                <button type="button" className="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-primary-200 whitespace-nowrap hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white focus:z-10">Yearly billing</button>
              </div>
            </div>

            <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
              <div aria-hidden="true" className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-primary-700 rounded-tl-lg rounded-tr-lg lg:block"></div>

              <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
                <div className="bg-primary-700 lg:bg-transparent pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
                  <div>
                    <h3 className="text-white text-sm font-semibold uppercase tracking-wide">Starter</h3>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                      <div className="mt-3 flex items-center">
                        <p className="text-white text-4xl font-extrabold tracking-tight">$5</p>
                        <div className="ml-4">
                          <p className="text-white text-sm">USD / mo</p>
                          <p className="text-primary-200 text-sm">Billed yearly ($56)</p>
                        </div>
                      </div>
                      <a href="#" className="bg-white text-primary-600 hover:bg-primary-50 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">Buy Starter</a>
                    </div>
                  </div>
                  <h4 className="sr-only">Features</h4>
                  <ul className="border-primary-500 divide-primary-500 divide-opacity-75 mt-7 border-t divide-y lg:border-t-0">
                    <li className="py-3 flex items-center">
                      <svg className="text-primary-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white ml-4 text-sm font-medium">Basic invoicing</span>
                    </li>

                    <li className="py-3 flex items-center">
                      <svg className="text-primary-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white ml-4 text-sm font-medium">Easy to use accounting</span>
                    </li>

                    <li className="py-3 flex items-center">
                      <svg className="text-primary-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white ml-4 text-sm font-medium">Mutli-accounts</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white ring-2 ring-primary-700 shadow-md pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
                  <div>
                    <h3 className="text-primary-600 text-sm font-semibold uppercase tracking-wide">Scale</h3>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                      <div className="mt-3 flex items-center">
                        <p className="text-primary-600 text-4xl font-extrabold tracking-tight">$19</p>
                        <div className="ml-4">
                          <p className="text-gray-700 text-sm">USD / mo</p>
                          <p className="text-gray-500 text-sm">Billed yearly ($220)</p>
                        </div>
                      </div>
                      <a href="#" className="bg-primary-600 text-white hover:bg-primary-700 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">Buy Scale</a>
                    </div>
                  </div>
                  <h4 className="sr-only">Features</h4>
                  <ul className="border-gray-200 divide-gray-200 mt-7 border-t divide-y lg:border-t-0">
                    <li className="py-3 flex items-center">
                      <svg className="text-primary-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 ml-4 text-sm font-medium">Advanced invoicing</span>
                    </li>

                    <li className="py-3 flex items-center">
                      <svg className="text-primary-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 ml-4 text-sm font-medium">Easy to use accounting</span>
                    </li>

                    <li className="py-3 flex items-center">
                      <svg className="text-primary-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 ml-4 text-sm font-medium">Mutli-accounts</span>
                    </li>

                    <li className="py-3 flex items-center">
                      <svg className="text-primary-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 ml-4 text-sm font-medium">Tax planning toolkit</span>
                    </li>

                    <li className="py-3 flex items-center">
                      <svg className="text-primary-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 ml-4 text-sm font-medium">VAT &amp; VATMOSS filing</span>
                    </li>

                    <li className="py-3 flex items-center">
                      <svg className="text-primary-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 ml-4 text-sm font-medium">Free bank transfers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-700 lg:bg-transparent pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
                  <div>
                    <h3 className="text-white text-sm font-semibold uppercase tracking-wide">Growth</h3>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                      <div className="mt-3 flex items-center">
                        <p className="text-white text-4xl font-extrabold tracking-tight">$12</p>
                        <div className="ml-4">
                          <p className="text-white text-sm">USD / mo</p>
                          <p className="text-primary-200 text-sm">Billed yearly ($140)</p>
                        </div>
                      </div>
                      <a href="#" className="bg-white text-primary-600 hover:bg-primary-50 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">Buy Growth</a>
                    </div>
                  </div>
                  <h4 className="sr-only">Features</h4>
                  <ul className="border-primary-500 divide-primary-500 divide-opacity-75 mt-7 border-t divide-y lg:border-t-0">
                    <li className="py-3 flex items-center">
                      <svg className="text-primary-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white ml-4 text-sm font-medium">Basic invoicing</span>
                    </li>

                    <li className="py-3 flex items-center">
                      <svg className="text-primary-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white ml-4 text-sm font-medium">Easy to use accounting</span>
                    </li>

                    <li className="py-3 flex items-center">
                      <svg className="text-primary-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white ml-4 text-sm font-medium">Mutli-accounts</span>
                    </li>

                    <li className="py-3 flex items-center">
                      <svg className="text-primary-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white ml-4 text-sm font-medium">Tax planning toolkit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section aria-labelledby="mobileComparisonHeading" className="lg:hidden">
            <h2 id="mobileComparisonHeading" className="sr-only">Feature comparison</h2>

            <div className="mt-16 max-w-2xl mx-auto px-4 space-y-16 sm:px-6">
              <div className="border-t border-gray-200">
                <div className="border-transparent -mt-px pt-6 border-t-2 sm:w-1/2">
                  <h3 className="text-gray-900 text-sm font-bold">Starter</h3>
                  <p className="mt-2 text-sm text-gray-500">All your essential business finances, taken care of.</p>
                </div>
                <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

                <div className="mt-6 relative">
                  <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
                  </div>

                  <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Tax Savings</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Easy to use accounting</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Multi-accounts</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <span className="text-gray-900 text-sm font-medium">3 accounts</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Invoicing</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <span className="text-gray-900 text-sm font-medium">3 invoices</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Exclusive offers</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">6 months free advisor</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Mobile and web access</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
                  </div>
                </div>

                <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

                <div className="mt-6 relative">
                  <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
                  </div>

                  <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">24/7 customer support</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Instant notifications</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Budgeting tools</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Digital receipts</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Pots to separate money</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Free bank transfers</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Business debit card</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200">
                <div className="border-primary-600 -mt-px pt-6 border-t-2 sm:w-1/2">
                  <h3 className="text-primary-600 text-sm font-bold">Scale</h3>
                  <p className="mt-2 text-sm text-gray-500">The best financial services for your thriving business.</p>
                </div>
                <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

                <div className="mt-6 relative">
                  <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                    <div className="shadow-md absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
                  </div>

                  <div className="ring-2 ring-primary-600 shadow-md relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Tax Savings</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Easy to use accounting</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Multi-accounts</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <span className="text-primary-600 text-sm font-medium">Unlimited accounts</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Invoicing</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <span className="text-primary-600 text-sm font-medium">Unlimited invoices</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Exclusive offers</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">6 months free advisor</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Mobile and web access</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                    <div className="ring-2 ring-primary-600 absolute right-0 w-1/2 h-full rounded-lg"></div>
                  </div>
                </div>

                <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

                <div className="mt-6 relative">
                  <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                    <div className="shadow-md absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
                  </div>

                  <div className="ring-2 ring-primary-600 shadow-md relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">24/7 customer support</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Instant notifications</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Budgeting tools</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Digital receipts</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Pots to separate money</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Free bank transfers</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Business debit card</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                    <div className="ring-2 ring-primary-600 absolute right-0 w-1/2 h-full rounded-lg"></div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200">
                <div className="border-transparent -mt-px pt-6 border-t-2 sm:w-1/2">
                  <h3 className="text-gray-900 text-sm font-bold">Growth</h3>
                  <p className="mt-2 text-sm text-gray-500">Convenient features to take your business to the next level.</p>
                </div>
                <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

                <div className="mt-6 relative">
                  <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
                  </div>

                  <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Tax Savings</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Easy to use accounting</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Multi-accounts</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <span className="text-gray-900 text-sm font-medium">7 accounts</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Invoicing</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <span className="text-gray-900 text-sm font-medium">10 invoices</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Exclusive offers</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">6 months free advisor</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                        <dt className="pr-4 text-sm font-medium text-gray-600">Mobile and web access</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
                  </div>
                </div>

                <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

                <div className="mt-6 relative">
                  <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
                  </div>

                  <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">24/7 customer support</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Instant notifications</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Budgeting tools</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Digital receipts</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Pots to separate money</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Free bank transfers</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </dd>
                      </div>

                      <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">Business debit card</dt>
                        <dd className="text-center sm:px-4">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="comparisonHeading" className="hidden lg:block">
            <h2 id="comparisonHeading" className="sr-only">Feature comparison</h2>

            <div className="mt-24 max-w-7xl mx-auto px-8">
              <div className="w-full border-t border-gray-200 flex items-stretch">
                <div className="-mt-px w-1/4 py-6 pr-4 flex items-end">
                  <h3 className="mt-auto text-sm font-bold text-gray-900">Catered for business</h3>
                </div>

                <div aria-hidden="true" className="pr-4 -mt-px pl-4 w-1/4">
                  <div className="border-transparent py-6 border-t-2">
                    <p className="text-gray-900 text-sm font-bold text-gray-900">Starter</p>
                    <p className="mt-2 text-sm text-gray-500">All your essential business finances, taken care of.</p>
                  </div>
                </div>

                <div aria-hidden="true" className="pr-4 -mt-px pl-4 w-1/4">
                  <div className="border-primary-600 py-6 border-t-2">
                    <p className="text-primary-600 text-sm font-bold text-gray-900">Scale</p>
                    <p className="mt-2 text-sm text-gray-500">The best financial services for your thriving business.</p>
                  </div>
                </div>

                <div aria-hidden="true" className="-mt-px pl-4 w-1/4">
                  <div className="border-transparent py-6 border-t-2">
                    <p className="text-gray-900 text-sm font-bold text-gray-900">Growth</p>
                    <p className="mt-2 text-sm text-gray-500">Convenient features to take your business to the next level.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4"></div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow"></div>
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-md"></div>
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full bg-white rounded-lg shadow"></div>
                  </div>
                </div>

                <table className="relative w-full">
                  <caption className="sr-only">
                    Business feature comparison
                  </caption>
                  <thead>
                    <tr className="text-left">
                      <th scope="col">
                        <span className="sr-only">Feature</span>
                      </th>

                      <th scope="col">
                        <span className="sr-only">Starter plan</span>
                      </th>

                      <th scope="col">
                        <span className="sr-only">Scale plan</span>
                      </th>

                      <th scope="col">
                        <span className="sr-only">Growth plan</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr key="Tax Savings">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Tax Savings</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>
                    </tr>

                    <tr key="Easy to use accounting">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Easy to use accounting</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>
                    </tr>

                    <tr key="Multi-accounts">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Multi-accounts</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <span className="text-gray-900 text-sm font-medium">3 accounts</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <span className="text-primary-600 text-sm font-medium">Unlimited accounts</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <span className="text-gray-900 text-sm font-medium">7 accounts</span>
                        </span>
                      </td>
                    </tr>

                    <tr key="Invoicing">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Invoicing</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <span className="text-gray-900 text-sm font-medium">3 invoices</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <span className="text-primary-600 text-sm font-medium">Unlimited invoices</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <span className="text-gray-900 text-sm font-medium">10 invoices</span>
                        </span>
                      </td>
                    </tr>

                    <tr key="Exclusive offers">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Exclusive offers</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>
                    </tr>

                    <tr key="6 months free advisor">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">6 months free advisor</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>
                    </tr>

                    <tr key="Mobile and web access">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Mobile and web access</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4"></div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-2 ring-primary-600 ring-opacity-100"></div>
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
                  </div>
                </div>
              </div>

              <h3 className="mt-10 text-sm font-bold text-gray-900">Other perks</h3>

              <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4"></div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow"></div>
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-md"></div>
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full bg-white rounded-lg shadow"></div>
                  </div>
                </div>

                <table className="relative w-full">
                  <caption className="sr-only">
                    Perk comparison
                  </caption>
                  <thead>
                    <tr className="text-left">
                      <th scope="col">
                        <span className="sr-only">Perk</span>
                      </th>

                      <th scope="col">
                        <span className="sr-only">Starter plan</span>
                      </th>

                      <th scope="col">
                        <span className="sr-only">Scale plan</span>
                      </th>

                      <th scope="col">
                        <span className="sr-only">Growth plan</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr key="24/7 customer support">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">24/7 customer support</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>
                    </tr>

                    <tr key="Instant notifications">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Instant notifications</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>
                    </tr>

                    <tr key="Budgeting tools">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Budgeting tools</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>
                    </tr>

                    <tr key="Digital receipts">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Digital receipts</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>
                    </tr>

                    <tr key="Pots to separate money">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Pots to separate money</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>
                    </tr>

                    <tr key="Free bank transfers">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Free bank transfers</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </span>
                      </td>
                    </tr>

                    <tr key="Business debit card">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Business debit card</th>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </span>
                      </td>

                      <td className="px-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Yes</span>
                        </span>
                      </td>

                      <td className="pl-4 relative w-1/4 py-0 text-center">
                        <span className="relative w-full h-full py-3">
                          <svg className="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">No</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4"></div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-2 ring-primary-600 ring-opacity-100"></div>
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple"/>
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage"/>
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit"/>
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor"/>
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation"/>
            </div>
          </div>
        </div>

        <section aria-labelledby="faqHeading" className="bg-gray-900">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-2xl lg:mx-auto lg:text-center">
              <h2 id="faqHeading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-gray-400">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
            </div>
            <div className="mt-20">
              <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                <div>
                  <dt className="font-semibold text-white">
                    What&#039;s the best thing about Switzerland?
                  </dt>
                  <dd className="mt-3 text-gray-400">
                    I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>

              </dl>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
