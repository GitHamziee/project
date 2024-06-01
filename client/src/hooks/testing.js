import { useState } from 'react';
import { message } from 'antd';

const useTestingData = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const getTestingData = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch('http://localhost:4000/api/testing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 200) {
        message.success(data);
        return data;
      } else if (res.status === 404) {
        setError(data.message);
      } else {
        message.error('Penetration Testing Failed');
      }
    } catch (error) {
      message.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error,  getTestingData};
};

export default useTestingData;
