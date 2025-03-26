import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
  icon: string;
}

const StatItem: React.FC<StatItemProps> = ({
  value,
  label,
  icon
}) => (
  <div className='flex flex-col items-center text-center'>
     <img src={icon} alt={label} className='w-12 h-12 mb-2' />
    <span className='text-[40px] font-semibold text-[#2f2f2f]'>
      {value}
    </span>
    <span className='mt-2 text-md text-[#828282] whitespace-pre-wrap'>
      {label}
    </span>
  </div>
);

const StatsDisplay = () => {
  const stats = [
    {
      value: '500,000',
      label: 'Boys Engaged',
      icon: '/icons/landing1.svg',
    },
    {
      value: '20,000',
      label: 'Men Engaged',
      icon: '/icons/landing2.svg',
    },
    {
      value: '11',
      label: 'African Countries',
      icon: '/icons/landing3.svg',
    },
    {
      value: '21',
      label: 'Partners',
      icon: '/icons/landing4.svg',
    },
  ];

  return (
    <div className='w-full bg-[#F7F4F080] py-7 rounded-[30px] px-6'>
      <div className='w-full md:max-w-7xl mx-auto'>
        <div className='flex flex-wrap md:justify-between items-center gap-8'>
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <StatItem
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
              {index < stats.length - 1 && (
                <div className='hidden md:block w-0.5 h-24 bg-primary' />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;
