import React from 'react'

const PaymentMethods = () => {
  return (
    <div className="px-0 lg:px-24">
  <div className="mt-10 flex items-center justify-center space-x-8 px-6 lg:px-0">
    <div className="flex flex-col items-center font-bold">
      <div className="leading-none flex items-center justify-center bg-prim-default text-white rounded-full w-4 h-4">1</div>
      <div className="  text-center">Room Selected</div>
    </div>
    <div className="flex flex-col items-center font-bold">
      <div className="leading-none flex items-center justify-center bg-prim-default text-white rounded-full w-4 h-4">2</div>
      <div className="  text-center">Additional Information</div>
    </div>
    <div className="flex flex-col items-center font-bold">
      <div className="leading-none flex items-center justify-center bg-prim-default text-white rounded-full w-4 h-4">3</div>
      <div className="  text-center">Payment Methods</div>
    </div>
    <div className="flex flex-col items-center font-normal">
      <div className="leading-none flex items-center justify-center   rounded-lg">4</div>
      <div className="  text-center">Booking Confirmation</div>
    </div>
  </div>
  <div className="w-full flex lg:grid flex-col lg:grid-cols-3 mt-10 lg:mt-16 lg:bg-light-blue">
    <div className="w-full lg:col-span-2 bg-white h-fit">
      <div className="px-6 pt-6 lg:pl-32 lg:pr-44">
        <div>
          <div className="mt-4">
            <h3 className="text-2xl text-neutral-100 font-semibold">Payment Methods</h3>
            <p className="mt-2 text-sm text-neutral-300">Guarantee your booking before time runs out.</p>
          </div>
          <div className="mt-8">
            <h4 className="text-neutral-100 text-sm font-semibold">Choose Payment Method</h4>
            <div className="flex flex-col lg:flex-row space-y-7 lg:space-x-7 lg:space-y-0 py-9 border-b border-neutral-400">
              <div className="flex items-center"><input type="radio" name="paymentType" className="" defaultValue="bank" defaultChecked /><label className="text-neutral-100 text-sm font-semibold ml-3">Bank Account</label></div>
              <div className="flex items-center"><input type="radio" name="paymentType" className="" defaultValue="domestic" /><label className="text-neutral-100 text-sm font-semibold ml-3">Domestic Card</label></div>
              <div className="flex items-center"><input type="radio" name="paymentType" className="" defaultValue="international" /><label className="text-neutral-100 text-sm font-semibold ml-3">International Card</label></div>
            </div>
          </div>
          <div>
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-neutral-100">How to pay into our bank account</h4>
              <p className="mt-2 w-full  text-xs leading-5 text-neutral-300">
                Visit any of the banks listed below, and make payment. However, you can make a transfer to any of our bank accounts from your mobile banking application. Once your payment is confirmed, your reservation will
                be processed.
              </p>
              <div className="mt-6  space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-300">Booking amount</div>
                  <div className="text-sm text-neutral-300">₦47,817</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-300">Transaction Charge</div>
                  <div className="text-sm text-neutral-300">₦0</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-300 font-semibold">Grand Total:</div>
                  <div className="text-base text-neutral-100 font-semibold">₦47,817</div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg w-full" style={{borderColor: 'rgb(206, 212, 218)'}}>
                  <img src="https://res.cloudinary.com/diapyzzws/image/upload/v1648466364/Website%20Images/access-bank.jpg" className="h-10 object-scale-down" />
                  <p className="text-sm font-semibold mt-4">Access Bank</p>
                  <div className="flex flex-col">
                    <span className="text-sm leading-6 text-neutral-100">Account Name:</span>
                    <div className="flex justify-between">
                      <span className="text-sm leading-6 text-neutral-100 font-semibold">Travelbeta.com Limited</span>
                      <button className="text-sm leading-6 text-neutral-300 font-semibold">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm leading-6 text-neutral-100">Account Number:</span>
                    <div className="flex justify-between">
                      <span className="text-sm leading-6 text-neutral-100 font-semibold">0728024766</span>
                      <button className="text-sm leading-6 text-neutral-300 font-semibold">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 border rounded-lg w-full" style={{borderColor: 'rgb(206, 212, 218)'}}>
                  <img src="https://res.cloudinary.com/diapyzzws/image/upload/v1648466364/Website%20Images/access-bank.jpg" className="h-10 object-scale-down" />
                  <p className="text-sm font-semibold mt-4">Access Bank</p>
                  <div className="flex flex-col">
                    <span className="text-sm leading-6 text-neutral-100">Account Name:</span>
                    <div className="flex justify-between">
                      <span className="text-sm leading-6 text-neutral-100 font-semibold">Travelbeta.com Limited</span>
                      <button className="text-sm leading-6 text-neutral-300 font-semibold">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm leading-6 text-neutral-100">Account Number:</span>
                    <div className="flex justify-between">
                      <span className="text-sm leading-6 text-neutral-100 font-semibold">0728024766</span>
                      <button className="text-sm leading-6 text-neutral-300 font-semibold">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 border rounded-lg w-full" style={{borderColor: 'rgb(206, 212, 218)'}}>
                  <img src="https://res.cloudinary.com/diapyzzws/image/upload/v1648466364/Website%20Images/access-bank.jpg" className="h-10 object-scale-down" />
                  <p className="text-sm font-semibold mt-4">Access Bank</p>
                  <div className="flex flex-col">
                    <span className="text-sm leading-6 text-neutral-100">Account Name:</span>
                    <div className="flex justify-between">
                      <span className="text-sm leading-6 text-neutral-100 font-semibold">Travelbeta.com Limited</span>
                      <button className="text-sm leading-6 text-neutral-300 font-semibold">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm leading-6 text-neutral-100">Account Number:</span>
                    <div className="flex justify-between">
                      <span className="text-sm leading-6 text-neutral-100 font-semibold">0728024766</span>
                      <button className="text-sm leading-6 text-neutral-300 font-semibold">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 border rounded-lg w-full" style={{borderColor: 'rgb(206, 212, 218)'}}>
                  <img src="https://res.cloudinary.com/diapyzzws/image/upload/v1648466364/Website%20Images/access-bank.jpg" className="h-10 object-scale-down" />
                  <p className="text-sm font-semibold mt-4">Access Bank</p>
                  <div className="flex flex-col">
                    <span className="text-sm leading-6 text-neutral-100">Account Name:</span>
                    <div className="flex justify-between">
                      <span className="text-sm leading-6 text-neutral-100 font-semibold">Travelbeta.com Limited</span>
                      <button className="text-sm leading-6 text-neutral-300 font-semibold">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm leading-6 text-neutral-100">Account Number:</span>
                    <div className="flex justify-between">
                      <span className="text-sm leading-6 text-neutral-100 font-semibold">0728024766</span>
                      <button className="text-sm leading-6 text-neutral-300 font-semibold">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 mb-12">
            <button className="py-4 px-6 text-white bg-cta flex items-center space-x-4 text-base leading-4 font-bold rounded opacity-100">
              <span>Create Reservation</span>
              
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="p-8 w-full">
      <div className="flex w-full items-center h-32 bg-white" style={{boxShadow: 'rgba(109, 109, 109, 0.14) 0px 14px 25px -8px'}}>
        <div className="w-2/5"><img src="https://res.cloudinary.com/diapyzzws/image/upload/v1640205275/Website%20Images/0bfdb948569ff4ec3fa7d33be114b870.jpg" className="h-32 w-full" /></div>
        <div className="w-3/5 py-6 px-4">
          <h3 className="text-sm leading-none text-neutral-100 font-semibold">Hostel 639</h3>
          <div className="mt-1.5 flex items-center">
            <span className="text-xs text-neutral-200 font-semibold leading-none">4.2</span>
            <span className="ml-1.5 text-sm">
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" className="text-cta" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
            <span className="text-xs leading-none text-prim-default ml-3">(1)</span>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-sm">
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="text-neutral-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
            </span>
            <span className="leading-3 text-neutral-200 ml-1.5">639 Harrow Road ; Kensal Green</span>
          </div>
        </div>
      </div>
      <div className="bg-white mt-10 lg:mt-16 px-6">
            <div className="py-6 border-b border-neutral-400">
              <h2 className="text-sm lg:text-2xl leading-none text-neutral-100 font-semibold">
              Single standard Bed and Breakfast
              </h2>
            </div>
            <div className="space-y-6 py-6 pb-8 border-b border-neutral-400">
              <div className="flex justify-between">
                <p className="text-sm leading-none text-neutral-100">
                  Number of rooms
                </p>
                <p className="text-sm leading-none text-neutral-100 font-semibold">
                  1
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm leading-none text-neutral-100">
                  Maximum occupancy
                </p>
                <p className="text-sm leading-none text-neutral-100 font-semibold">
                  1
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center py-6 border-b border-neutral-400">
              <div className="space-y-2.5">
                <p className="text-sm leading-none text-neutral-300">
                  Check-In
                </p>
                <p className="text-sm leading-none text-black">Dec 30, 2021</p>
              </div>
              <div className="space-y-2.5">
                <p className="text-sm leading-none text-neutral-300">
                  Check-Out
                </p>
                <p className="text-sm leading-none text-black">Dec 31, 2021</p>
              </div>
            </div>
            <div className="py-6 border-b border-neutral-400">
              <h4 className="text-sm leading-none text-neutral-100 font-semibold">
                Hotel Base Fare
              </h4>
            </div>
            <div className="space-y-6 py-6 border-b border-neutral-400">
              <div className="flex justify-between">
                <p className="text-sm leading-none text-neutral-100">
                  1 Room x 3 nights
                </p>
                <p className="text-sm leading-none text-neutral-100">₦1,200,000</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm leading-none text-neutral-100">
                  Discount
                </p>
                <p className="text-sm leading-none text-neutral-100">₦0</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm leading-none text-neutral-100">
                  Total Fare
                </p>
                <p className="text-sm leading-none text-neutral-100">₦1,200,000</p>
              </div>
            </div>
            <div className="py-6">
              <div className="flex justify-between">
                <p className="text-xl leading-none text-neutral-100 font-bold">
                  Total:
                </p>
                <p className="text-xl leading-none text-neutral-100 font-bold">
                  ₦1,200,000
                </p>
              </div>
            </div>
          </div>
    </div>
  </div>
</div>

  )
}

export default PaymentMethods