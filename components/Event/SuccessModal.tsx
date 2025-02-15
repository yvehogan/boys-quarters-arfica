import Modal from '../Modal';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className='flex flex-col items-center'>
        <svg
          width='111'
          height='110'
          viewBox='0 0 111 110'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M55.5 110C40.9131 110 26.9236 104.205 16.6091 93.8909C6.29463 83.5764 0.5 69.5869 0.5 55C0.5 40.4131 6.29463 26.4236 16.6091 16.1091C26.9236 5.79463 40.9131 0 55.5 0C70.0869 0 84.0764 5.79463 94.3909 16.1091C104.705 26.4236 110.5 40.4131 110.5 55C110.5 69.5869 104.705 83.5764 94.3909 93.8909C84.0764 104.205 70.0869 110 55.5 110ZM44.5 82.5L94 35.75L85.75 27.5L44.5 66L25.25 46.75L17 55L44.5 82.5Z'
            fill='#FEAD3A'
          />
        </svg>

        <h2 className='text-[40px] font-semibold mt-4'>
          Thank You!
        </h2>
        <p className='text-[#464646] text-lg font-light'>
          Your registration was successful.
        </p>
      </div>
    </Modal>
  );
};

export default SuccessModal;
