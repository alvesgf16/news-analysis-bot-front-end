'use client';

import { useState } from 'react';
import InputForm from './components/input-form';

const Home = () => {
  const [submittedData, setSubmittedData] = useState<string | null>(null);

  const handleDataSubmit = (data: string) => {
    setSubmittedData(data);
    // Here you can handle the submitted data, e.g., send it to an API
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-black">
        Submit Your Information
      </h1>
      <InputForm onSubmit={handleDataSubmit} />
      {submittedData && (
        <div className="mt-4 p-4 bg-white border rounded shadow">
          <h2 className="font-semibold">Submitted Data:</h2>
          <p>{submittedData}</p>
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">Submit Information</h1>
    </div>
  );
};

export default Home;
