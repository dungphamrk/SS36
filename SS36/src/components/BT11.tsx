import React, { useState, ChangeEvent } from 'react';

const BT11: React.FC = () => {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (file.type.startsWith('image/')) {
          setFileUrl(result);
          setFileContent(null);
        } else {
          setFileContent(result);
          setFileUrl(null);
        }
      };

      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file); 
      } else {
        reader.readAsText(file); 
      }
    }
  };
  return (
    <div className="BT11">
      <h1>Bài 11</h1>
      <input type="file" onChange={handleFileChange} />
      {fileContent && (
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {fileContent}
        </pre>
      )}
      {fileUrl && (
        <img src={fileUrl} alt="Selected file" style={{ maxWidth: '500px', display: 'block' }} />
      )}
    </div>
  );
}
export default BT11;
