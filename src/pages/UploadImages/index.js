import React, { useState } from 'react';

import api from '../../services/api';
import { Container } from './styles';

export default function UploadImages() {
  const [uploads, setUploads] = useState([]);

  function onChange(e) {
    setUploads(e.target.files);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    if (uploads.length > 0) {
      Array.from(uploads).forEach((file) => data.append('file_upload', file));
      await api.post('upload', data).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.statusText);
      });
    }
  }
  return (
    <Container>
      {}
      <img src={uploads} alt="" />
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="file_upload"
          name="file_upload"
          multiple
          accept="image/*"
          onChange={(e) => onChange(e)}
        />
        <input type="submit" value="Enviar" />
      </form>
    </Container>
  );
}
