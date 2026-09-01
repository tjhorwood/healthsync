'use client';
import Link from 'next/link';
import { useState } from 'react';

import GradientText from '@/components/GradientText';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sleep } from '@/lib/utils';

const initialFormData = {
  firstname: '',
  lastname: '',
  email: '',
  subject: '',
  message: '',
};

const nameRow = [
  { name: 'firstname', label: 'First Name' },
  { name: 'lastname', label: 'Last Name' },
];

const singleRows = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'subject', label: 'Subject' },
  { name: 'message', label: 'Message', multiline: true },
];

function Field({
  name,
  label,
  type = 'text',
  multiline,
  half,
  value,
  onChange,
}) {
  const Control = multiline ? Textarea : Input;
  return (
    <div className={`w-full px-3 ${half ? 'md:w-1/2' : ''}`}>
      <label
        className='mb-1 block text-sm font-medium text-gray-800'
        htmlFor={name}
      >
        {label} <span className='text-red-600'>*</span>
      </label>
      <Control
        id={name}
        name={name}
        type={multiline ? undefined : type}
        rows={multiline ? 4 : undefined}
        value={value}
        onChange={onChange}
        required
        placeholder={`Enter your ${name}`}
      />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    await sleep(1000); // Simulate a delay
    setStatus('Message sent successfully!');
    setFormData(initialFormData);
  };

  return (
    <section className='mx-auto max-w-6xl px-4 sm:px-6'>
      <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
        <div className='mx-auto max-w-3xl pb-12 text-center md:pb-16'>
          <h2
            className='leading-tighter text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl'
            data-animate='fade-up'
          >
            Have a question about <GradientText>Health Sync</GradientText>?
            Contact us directly
          </h2>
        </div>

        <form
          className='mx-auto max-w-xl space-y-4'
          data-animate='fade-up'
          data-animate-delay='150'
          onSubmit={handleSubmit}
        >
          <div className='-mx-3 flex flex-wrap space-y-4 md:space-y-0'>
            {nameRow.map((field) => (
              <Field
                key={field.name}
                {...field}
                half
                value={formData[field.name]}
                onChange={handleChange}
              />
            ))}
          </div>
          {singleRows.map((field) => (
            <div key={field.name} className='-mx-3 flex flex-wrap'>
              <Field
                {...field}
                value={formData[field.name]}
                onChange={handleChange}
              />
            </div>
          ))}
          <div className='-mx-3 flex flex-wrap'>
            <div className='w-full px-3'>
              <Button type='submit' size='lg' className='text-md h-12 w-full'>
                Send
              </Button>
              {status && (
                <p className='mt-2 text-center text-sm text-gray-600'>
                  {status}
                </p>
              )}
            </div>
          </div>
          <div className='mt-4 text-sm text-gray-600'>
            By clicking "send" you consent to allow Health Sync to store and
            process the personal information submitted above and agree to our{' '}
            <Link href='/terms-conditions' className='underline'>
              Terms & Conditions
            </Link>{' '}
            as well as our{' '}
            <Link href='/privacy' className='underline'>
              Privacy Policy
            </Link>
            .
          </div>
        </form>
      </div>
    </section>
  );
}
