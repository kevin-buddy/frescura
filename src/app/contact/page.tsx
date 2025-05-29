'use client'
import { useRef, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { sendEmailServer } from "../../providers/nodemailer"

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(sendEmailServer,{message: 'init'});
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    if (state.message === 'success' && formRef.current) {
      formRef.current.reset();
      setShowPopup(true);
    } else if (state.message !== 'init') {
      console.log(state.message);
      alert(state.message);
    }
    setLoading(false);
  }, [state])
  const handleSubmit = () => {
    setLoading(true);
  };
  const closePopup = () => {
      setShowPopup(false);
  }
  
  return (
    <div
      className="flex flex-col h-full pt-12 px-8
        w-full items-center text-center gap-12"
    >
      <section className="bg-[#315A2E] text-white py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Transform Your Nutrition?
          </h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Join thousands of satisfied customers who have improved their health
            with our meal plans.
          </p>
          <div className="mt-8 flex justify-center">
            {/* <a target="_blank" href="https://wa.me/085233385888">
              <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-[#315A2E] md:py-4 md:text-lg md:px-10 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                Contact Us
              </button>
            </a> */}
            <form className="w-full" action={formAction} onSubmit={handleSubmit} ref={formRef}>
              <input className="mb-3 md:w-2/5 text-black" placeholder="Input your email" type="text" name="email" id="email" />
              <br />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-[#315A2E] md:py-4 md:text-lg md:px-10 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  'Join the waiting list'
                )}
              </button>
            </form>
          </div>
          {showPopup && (
            <div onClick={closePopup} className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full relative animate-fade-in">
                {/* Close Button */}
                <button
                  onClick={() => {setShowPopup(false)}}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl font-bold"
                  aria-label="Close popup"
                >
                  ×
                </button>

                <div className="text-4xl mb-4">🎉</div>
                <h2 className="text-xl font-semibold text-green-700 mb-2">
                  Congratulations!
                </h2>
                <p className="text-gray-700 text-sm">
                  {`You've joined our early access list for`} <strong>Frescura</strong>
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  Stay tuned for <strong>updates</strong>, <strong>exclusive content</strong>, and <strong>healthy surprises</strong> coming your way
                </p>
                {/* <p className="text-gray-700 text-sm mt-2">
                  You're now eligible to receive <strong>free clean food samples</strong> before anyone else.
                </p> */}
              </div>
            </div>
          )}
          
          {/* <p className="mt-4 text-sm">
            No commitment required. Cancel anytime.
          </p> */}
        </div>
      </section>
    </div>
  )
}
