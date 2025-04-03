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
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    visitorProfile: '',
    physical: '',
  });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
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
      <h2 className='md:text-2xl md:whitespace-nowrap text-xl  text-center font-semibold my-4'>
        Register for Boys Summit 2025
      </h2>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 mt-10'
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
        <input
          type='text'
          name='phoneNumber'
          placeholder='Phone Number'
          value={form.phoneNumber}
          onChange={handleChange}
          className='w-full border py-2.5 px-5 rounded-[10px] border-[#BCB078] outline-none'
          required
        />
        <select
          name='visitorProfile'
          value={form.visitorProfile}
          onChange={handleChange}
          className='w-full border py-2.5 px-5 rounded-[10px] border-[#BCB078] outline-none bg-white'
          required
        >
          <option
            value=''
            disabled
          >
            Visitor Profile
          </option>
          <option value='Parent'>Parent</option>
          <option value='Policy Maker'>Policy Maker</option>
          <option value='Partner'>Partner</option>
        </select>

        <select
          name='physical'
          value={form.physical}
          onChange={handleChange}
          className='w-full border py-2.5 px-5 rounded-[10px] border-[#BCB078] outline-none bg-white'
          required
        >
          <option
            value=''
            disabled
          >
            Are you open to come physically?
          </option>
          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
        </select>

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
