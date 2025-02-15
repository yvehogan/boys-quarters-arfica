export default function GoalSection() {
  const goals = [
    'To mobilize Young Men who will contribute toward ending the years of countless biases against Girls and Women.',
    'To advocate for every African Boy-Child who has been subjected to several forms of violence. (Domestic, Emotional and Sexual).',
    'To detox the minds of every boy child that have been immense in the worrisome idea of stereotypical masculine leadership, i.e. a sense that Leadership is Sex & Gender.',
    'To raise an awareness on the silent but cancerous menace of sexual abuse of the Boy Child.',
    'To Empower Boys behind bars and those who already lose hope in themselves and their future. By inspiring them to Exchange their Pains for Purpose, guilt for greatness etc.',
  ];

  return (
    <div className='bg-darkBlue  text-white py-16 mt-16 px-6 min-h-screen'>
      <h2 className='text-center text-4xl font-semibold mb-14'>
        Our Goals
      </h2>

      <div className='grid md:grid-cols-3 mb-6 justify-center gap-7 max-w-5xl mx-auto'>
        {goals.slice(0, 3).map((goal, index) => (
          <div
            key={index}
            className='relative py-2.5 px-5 border border-[#BCB078] rounded-[20px] bg-opacity-10 h-[180px] sm:max-w-[360px]'
          >
            <span className='absolute -bottom-6 right-0 text-[180px] text-gray-700 opacity-10 font-extrabold'>
              {index + 1}
            </span>
            <p className='relative z-10'>{goal}</p>
          </div>
        ))}

        <div className='md:col-span-3 flex md:flex-row flex-col items-center justify-center gap-6'>
          {goals.slice(3).map((goal, index) => (
            <div
              key={index + 3}
              className='relative py-2.5 px-5 border border-[#BCB078] rounded-[20px] bg-opacity-10 h-[180px] w-full sm:max-w-[360px]'
            >
              {/* Large Number in the Background */}
              <span className='absolute -bottom-3 right-0 text-[180px] text-gray-700 opacity-10 font-extrabold'>
                {index + 4}
              </span>
              <p className='relative z-10'>{goal}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
