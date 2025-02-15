import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 sm:px-12  w-[90%] py-10 rounded-[20px] shadow-lg sm:w-[450px] md:w-[500px]  relative'>
        <button
          onClick={onClose}
          className='absolute top-3 right-6'
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
