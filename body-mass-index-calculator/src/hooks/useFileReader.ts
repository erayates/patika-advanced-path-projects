import { useState } from 'react';

interface IStatus {
  loading: boolean;
  error: boolean;
}

const useFileReader = () => {
  const [fileContent, setFileContent] = useState('');
  const [status, setStatus] = useState<IStatus>({
    loading: false,
    error: false,
  });

  const readFile = async (filePath: string) => {
    setStatus({ loading: true, error: false });
    try{
      const data = await fetch(filePath);
      const response = await data.json();
      setStatus({ loading: false, error: false });
      setFileContent(response);
    }
    catch(error){
      setStatus({ loading: false, error: true });
    }
  };

  return { fileContent, readFile, status };
};

export default useFileReader;
