export default function ContactForm() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div>
            <h2 className="font-sen text-[35px] font-bold leading-[42px] text-PibiTech-navy mb-6">
              Book a Meeting with Pibi Tech
            </h2>
            <p className="font-inter text-[18px] font-normal leading-[27px] text-PibiTech-gray mb-8">
              From instant QC checks to live asset tracking, Pibi Tech gives you
              real-time control. Schedule a session to see it in action.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-PibiTech-blue text-xl"></span>
                <span className="font-sen text-[18px] text-PibiTech-navy-light">
                  (+91) 6384300011
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-PibiTech-blue text-xl"></span>
                <span className="font-sen text-[18px] text-PibiTech-navy-light">
                  info@PibiTech.ai
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-[20px] border border-[#93B8FF] p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-inter text-base font-bold text-[#111] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full px-3 py-3 rounded-lg border border-PibiTech-gray-border bg-PibiTech-bg-lightest font-sen text-sm focus:outline-none focus:border-PibiTech-blue"
                  />
                </div>
                <div>
                  <label className="block font-inter text-base font-bold text-[#111] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full px-3 py-3 rounded-lg border border-PibiTech-gray-border bg-PibiTech-bg-lightest font-sen text-sm focus:outline-none focus:border-PibiTech-blue"
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
                  className="w-full px-3 py-3 rounded-lg border border-PibiTech-gray-border bg-PibiTech-bg-lightest font-sen text-sm focus:outline-none focus:border-PibiTech-blue"
                />
              </div>

              <div>
                <label className="block font-inter text-base font-bold text-[#111] mb-2">
                  Email ID *
                </label>
                <input
                  type="email"
                  placeholder="gmail, outlook...."
                  className="w-full px-3 py-3 rounded-lg border border-PibiTech-gray-border bg-PibiTech-bg-lightest font-sen text-sm focus:outline-none focus:border-PibiTech-blue"
                />
              </div>

              <div>
                <label className="block font-inter text-base font-bold text-[#111] mb-2">
                  Industry *
                </label>
                <input
                  type="text"
                  placeholder="Type your industry"
                  className="w-full px-3 py-3 rounded-lg border border-PibiTech-gray-border bg-PibiTech-bg-lightest font-sen text-sm focus:outline-none focus:border-PibiTech-blue"
                />
              </div>

              <div>
                <label className="block font-inter text-base font-bold text-[#111] mb-2">
                  Country *
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-PibiTech-gray-border bg-PibiTech-bg-lightest font-sen text-base focus:outline-none focus:border-PibiTech-blue">
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
                  className="w-full px-5 py-4 rounded-lg border border-PibiTech-gray-border bg-PibiTech-bg-lightest font-sen text-sm focus:outline-none focus:border-PibiTech-blue resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-PibiTech-blue-dark to-PibiTech-blue-medium text-white font-sen text-sm font-bold rounded hover:opacity-90 transition-opacity"
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
