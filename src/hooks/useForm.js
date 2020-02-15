import { useState } from 'react';

export const useForm = initialForm => {
  const [form, setForm] = useState(initialForm);

  const change = ({ target: { name, type, value } }) => {
    setForm({
      ...form,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  /*
  0 - Form data
  1 - Change functions for input controls
  3 - Reset the form function
  */
  return [form, change, () => setForm(initialForm)];
};
