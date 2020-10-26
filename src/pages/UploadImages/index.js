/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Container, List, Form } from './styles';

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
      toast.success('Fotos envidas com sucesso!');
      setImgURL([]);
      setUploads([]);
      document.getElementById('form').reset();
    }
  }
  return (
    <Container>
      <h1>Galeria</h1>
      <div>
        <List>
          {imgURL.map((url) => (
            <li key={url}>
              <img src={url} alt="" />
            </li>
          ))}
        </List>

        <Form id="form" onSubmit={handleSubmit}>
          <label htmlFor="inputfile">
            <input
              type="file"
              className="inputfile"
              id="inputfile"
              name="file_upload[file]"
              multiple="multiple"
              accept="image/*"
              onChange={onChange}
            />
            escolha seus arquivos
          </label>
          <input type="submit" value="Enviar" />
        </Form>
      </div>
    </Container>
  );
}
