import Modal from '../Modal';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className='flex flex-col justify-center items-center text-[#0C102D]'>
        <div className='flex flex-col text-center'>
          <p>Donate to us via:</p>
          <p className='text-[#0C102D] font-bold text-[40px]'>
            {' '}
            0034494786
          </p>
        </div>
        <div className='flex flex-col text-center my-10 text-lg'>
          <p className='font-light'>
            Bank Name:{' '}
            <span className='font-bold'>
              Stanbic IBTC Bank Plc
            </span>
          </p>
          <p className='font-light'>
            Account Name:{' '}
            <span className='font-bold'>
              Boy Child Reformation Initiative
            </span>
          </p>
        </div>
        <p className='text-lg'>
          Thank you for your support!
        </p>
      </div>
    </Modal>
  );
};

export default AccountModal;
