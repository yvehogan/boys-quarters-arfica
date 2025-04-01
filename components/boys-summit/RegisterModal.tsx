import { useState } from 'react';
import Modal from '../Modal';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(); // Show success modal
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <h2 className='md:text-2xl  text-xl  text-center font-semibold my-4'>
        Join the waitlist for International Boys Summit
      </h2>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 mt-16'
      >
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={form.name}
          onChange={handleChange}
          className='w-full border py-2.5 px-5 rounded-[10px] border-[#BCB078] outline-none'
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Email Address'
          value={form.email}
          onChange={handleChange}
          className='w-full border py-2.5 px-5 rounded-[10px] border-[#BCB078] outline-none'
          required
        />
        <button
          type='submit'
          className='flex self-center px-20 py-5 mt-8 bg-[#FEAD3A] text-white rounded-[12px]'
        >
          Register
        </button>
      </form>
    </Modal>
  );
};

export default RegisterModal;
