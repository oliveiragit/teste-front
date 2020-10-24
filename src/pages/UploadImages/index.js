import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Container, List } from './styles';

export default function UploadImages() {
  const [uploads, setUploads] = useState([]);
  const [imgURL, setImgURL] = useState([]);

  useEffect(() => {
    setImgURL(uploads.map((file) => URL.createObjectURL(file)));
  }, [uploads]);

  function onChange(e) {
    const { files } = e.target;
    setUploads(Array.from(files));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();

    if (uploads.length > 0) {
      uploads.forEach((file) => {
        data.append('file_upload[file]', file);
      });
      await api
        .post('upload', data)
        .catch(() => toast.error('Oops! não conseguimos enviar'));
    }
  }
  return (
    <Container>
      <h1>Galeria</h1>

      <List>
        {imgURL.map((url) => (
          <li key={url}>
            <img src={url} alt="" />
          </li>
        ))}
      </List>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="file_upload[file]"
          name="file_upload[file]"
          multiple
          accept="image/*"
          onChange={onChange}
        />
        <input type="submit" value="Enviar" />
      </form>
    </Container>
  );
}