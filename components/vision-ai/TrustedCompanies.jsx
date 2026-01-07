export default function TrustedCompanies() {
  const companies = [
    { name: "TechCorp", initials: "TC" },
    { name: "ManufacturePro", initials: "MP" },
    { name: "QualityFirst", initials: "QF" },
    { name: "IndustryLeader", initials: "IL" },
    { name: "GlobalFactory", initials: "GF" },
    { name: "SmartMfg", initials: "SM" },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Trusted by Global Enterprises
          </h2>
          <p className="text-gray-600">
            Leading companies rely on Scanflow for quality assurance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 bg-white rounded-lg border border-gray-200 hover:shadow-md transition"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {company.initials}
                  </span>
                </div>
                <span className="text-xs font-medium text-gray-700 text-center">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
