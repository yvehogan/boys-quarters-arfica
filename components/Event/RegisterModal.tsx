import { useEffect, useState } from 'react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    visitorProfile: '',
    physical: '',
  });

  useEffect(() => {
    const {
      name,
      email,
      phoneNumber,
      visitorProfile,
      physical,
    } = form;
    const isValid =
      name.trim() !== '' &&
      email.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      physical.trim() !== '' &&
      visitorProfile.trim() !== '';
    setIsFormValid(isValid);
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      Name: form.name,
      Email: form.email,
      Number: form.phoneNumber,
      Profile: form.visitorProfile,
      Physically: form.physical,
    };

    try {
      const response = await fetch(
        'https://sheetdb.io/api/v1/q3p0l54evo91v',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setForm({
          name: '',
          email: '',
          phoneNumber: '',
          visitorProfile: '',
          physical: '',
        });
        onSuccess();
      } else {
        throw new Error('Failed to save data');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting || !isFormValid}
          type='submit'
          className={`${
            isSubmitting ||
            (!isFormValid && 'cursor-not-allowed')
          } flex self-center px-20 py-5 mt-8 bg-[#FEAD3A] text-white rounded-[12px]`}
        >
          {isSubmitting ? 'Submitting...' : 'Register'}
        </button>
      </form>
    </Modal>
  );
};

export default RegisterModal;
