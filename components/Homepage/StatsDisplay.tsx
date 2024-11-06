import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="flex flex-col items-center text-center">
    <span className="text-[40px] font-semibold text-[#2f2f2f]">{value}</span>
    <span className="mt-2 text-md text-[#828282] whitespace-pre-wrap">{label}</span>
  </div>
);

const StatsDisplay = () => {
  const stats = [
    {
      value: "50,000+",
      label: "Boys Engaged"
    },
    {
      value: "150+",
      label: "Volunteers"
    },
    {
      value: "50,000+",
      label: "Campaigns across Africa"
    },
    {
      value: "$150k",
      label: "In Donations and Grants"
    }
  ];

  return (
    <div className="w-full bg-white py-7 rounded-[30px] px-">
      <div className="w-full md:max-w-7xl mx-auto">
        <div className="flex flex-wrap md:justify-between items-center gap-8">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <StatItem value={stat.value} label={stat.label} />
              {index < stats.length - 1 && (
                <div className="hidden md:block w-0.5 h-10 bg-primary" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;