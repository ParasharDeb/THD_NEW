'use client';

import { MEET_THE_TEAM, RETREAT_INCLUSIONS } from '../constants';

export default function MeetTheTeamSection() {
  return (
    <section className="w-full bg-bgcream py-12 flex flex-col items-center px-4">
      <div className="max-w-6xl w-full">
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-[2rem] font-serif text-white font-normal mb-3 tracking-wide text-center">
            {MEET_THE_TEAM.title}
          </h2>
          <p className="text-accent text-center text-sm mb-8 font-light">
            {MEET_THE_TEAM.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEET_THE_TEAM.teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="rounded-full bg-gray-300 w-24 h-24 mx-auto mb-4 shadow-sm overflow-hidden" />
                <h3 className="text-lg font-serif font-semibold text-textGreen mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-textGreen text-xs leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}
