export default function ContactForm() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div>
            <h2 className="font-sen text-[35px] font-bold leading-[42px] text-[#248BB3] mb-6">
              Book a Meeting with Pibi Tech
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-50 text-xl"></span>
                <span className="font-sen text-[18px] text-[#248BB3]/80">
                  (+91) 6384300011
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-50 text-xl"></span>
                <span className="font-sen text-[18px] text-[#248BB3]/80">
                  info@PibiTech.ai
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-4xl border border-[#93B8FF] p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-inter text-base font-bold text-[#111] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50 font-sen text-md focus:outline-none focus:border-blue-50"
                  />
                </div>
                <div>
                  <label className="block font-inter text-base font-bold text-[#111] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50 font-sen text-md focus:outline-none focus:border-blue-50"
                  />
                </div>
              </div>

              <div>
                <label className="block font-inter text-base font-bold text-[#111] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="00000 00000"
                  className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50 font-sen text-md focus:outline-none focus:border-blue-50"
                />
              </div>

              <div>
                <label className="block font-inter text-base font-bold text-[#111] mb-2">
                  Email ID *
                </label>
                <input
                  type="email"
                  placeholder="gmail, outlook...."
                  className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50 font-sen text-md focus:outline-none focus:border-blue-50"
                />
              </div>

              <div>
                <label className="block font-inter text-base font-bold text-[#111] mb-2">
                  Industry *
                </label>
                <input
                  type="text"
                  placeholder="Type your industry"
                  className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50 font-sen text-md focus:outline-none focus:border-blue-50"
                />
              </div>

              <div>
                <label className="block font-inter text-base font-bold text-[#111] mb-2">
                  Country *
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-blue-50 font-sen text-base focus:outline-none focus:border-blue-50">
                  <option>Select Country</option>
                  <option>United States</option>
                  <option>India</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div>
                <label className="block font-inter text-base font-bold text-[#111] mb-2">
                  How can we help you *
                </label>
                <textarea
                  placeholder="Description"
                  rows={3}
                  className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-blue-50 font-sen text-md focus:outline-none focus:border-blue-50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-400 text-white font-sen text-md font-bold rounded hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
