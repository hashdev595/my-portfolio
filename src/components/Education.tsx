const education = [
    {
      school: "University of Sargodha (UOS), Sargodha",
      degree: "BSCS",
      duration: "2018 – 2022",
    },
    {
      school: "Punjab College, Sargodha",
      degree: "FSc. Pre-Engineering",
      duration: "2016 – 2017",
    },
  ];
  
  export default function Education() {
    return (
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-secondary p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{edu.school}</h3>
              <p>{edu.degree}</p>
              <p className="text-sm text-gray-400">{edu.duration}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  