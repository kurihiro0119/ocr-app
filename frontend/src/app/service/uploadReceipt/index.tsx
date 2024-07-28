import { handleFailed, handleSucceed, path } from "..";

export const uploadReceipt = async (file: File): Promise<void> =>
{
  const formData = new FormData();
  formData.append('file', file);
  console.log('API_HOST:', process.env.API_HOST);

  const api_path = path("/receipt/upload")
  console.log(api_path)

  return fetch(api_path, {
    method: 'POST',
    body: formData,
    next: { tags: ["upload_receipt"] },
  })
    .then(handleSucceed)
    .catch(handleFailed);
}