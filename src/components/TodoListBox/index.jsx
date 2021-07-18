import { useState } from 'react';
import { Box } from '../Box';

import { FormGroup, Button } from './styles';

import { useCommunities } from '../../hooks/UseCommunities';

export function TodoListBox() {
  const { createCommunity } = useCommunities();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');

  function handleCreateNewCommunity(event) {
    event.preventDefault();

    createCommunity({
      id: new Date().toISOString(),
      title,
      image,
      link
    });

    setTitle('');
    setImage('');
    setLink('');
  }

  return (
    <Box>
      <h3>O que você deseja fazer hoje?</h3>
      <form onSubmit={handleCreateNewCommunity}>
        <FormGroup>
          <input
            placeholder="Qual vai ser o nome da sua comunidade?"
            name="title"
            aria-label="Qual vai ser o nome da sua comunidade?"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <input
            placeholder="Coloque uma URL para usarmos de capa"
            name="image"
            aria-label="Coloque uma URL para usarmos de capa"
            type="text"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <input
            placeholder="Qual o link para sua comunidade?"
            name="link"
            aria-label="Qual o link para sua comunidade?"
            type="text"
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" disabled>
          Criar Comunidade
        </Button>
      </form>
    </Box>
  )
}