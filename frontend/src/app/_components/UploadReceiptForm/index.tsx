'use client';

import React, { useState } from 'react';
import { uploadReceipt } from '@/app/service/uploadReceipt';
import { useRouter } from 'next/navigation';

const UploadReceiptForm = () =>
{
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    if (e.target.files)
    {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) =>
  {
    e.preventDefault();

    if (file)
    {
      try
      {
        await uploadReceipt(file);
        alert('アップロードが完了しました');
        router.refresh();
      } catch (error)
      {
        console.error(error);
        alert('アップロードに失敗しました');
      }
    } else
    {
      alert('ファイルを選択してください');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <h2 className='text-xl font-bond mb-4'>レシートのアップロード</h2>
      <input type="file" onChange={handleFileChange} className='mb-4 border border-gray-300 p-2 rounded w-full' />
      <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
        アップロード
      </button>
    </form>
  )
}

export default UploadReceiptForm;