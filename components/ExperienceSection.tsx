import React from 'react';

interface ExperienceItemProps {
  company: string;
  role: string;
  dates: string;
  description: string;
}

function ExperienceItem({ company, role, dates, description }: ExperienceItemProps) {
  return (
    <div className="group flex items-start gap-4 border-t border-[color:var(--line)] px-2 py-4 lg:px-8">
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-medium text-zinc-100">{company}</h3>
          <span className="text-8xl text-[color:var(--muted)]">*</span>
        </div>
        <p className="text-sm text-[color:var(--muted)]">{role}</p>
        <p className="text-sm text-[color:var(--muted)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const experiences = [
    {
      company: "CLOSEADMIN",
      description: "Smart email generator + instant templates. Keep manually typing the same follow-ups if you want... or use this and never send another \"just checking in\" again."
    },
    {
      company: "CLOSEADMIN",
      description: "The cheat code your contracts have been waiting for. A searchable library of razor-sharp real estate clauses so airtight your paperwork could win in court wearing flip-flops."
    },
    {
      company: "SELECTIVE TC SERVICES",
      description: "White-glove contract management. Sure, you can keep babysitting your own deals and living in your inbox —or let me run it all so you can actually sell."
    },
    {
      company: "BOOKS",
      description: "Learn how to sell more, stay sane, and actually enjoy the business. You could keep guessing your way through this career... or shortcut the learning curve with everything I've already figured out the hard way."
    }
  ];

  return (
    <section className="relative text-white py-16 pb-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Sales Copy Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Stuff I Do That Actually Moves the Needle<br />(And Your Closings)
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            These aren't 'cute extras' for your business — they're the difference between coasting and competing. Whether it's managing contracts, crafting the perfect email, or giving you a clause that saves a deal, every product here was built to keep you three steps ahead. Without burning you out in the process.
          </p>
        </div>
        
        {/* Bold Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {experiences.map((experience, index) => (
            <div 
              key={experience.company}
              className={`p-8 border border-white/10 ${
                index === 0 ? 'md:border-r md:border-b' : 
                index === 1 ? 'md:border-b' : 
                index === 2 ? 'md:border-r' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {experience.company}
                </h3>
                <span className="text-white/60 text-3xl">*</span>
              </div>
              <p className="text-white/80 text-base leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
