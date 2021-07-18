import { useState } from 'react';
import { Box } from '../Box';

import { useCommunities } from '../../hooks/UseCommunities';

export function TodoListBox() {
  const { createCommunity } = useCommunities();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  function handleCreateNewCommunity(event) {
    event.preventDefault();

    createCommunity({
      title,
      image
    });

    setTitle('');
    setImage('');
  }

  return (
    <Box>
      <h3>O que você deseja fazer hoje?</h3>
      <form onSubmit={handleCreateNewCommunity}>
        <fieldset>
          <input
            placeholder="Qual vai ser o nome da sua comunidade?"
            name="title"
            aria-label="Qual vai ser o nome da sua comunidade?"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Coloque uma URL para usarmos de capa"
            name="image"
            aria-label="Coloque uma URL para usarmos de capa"
            type="text"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </fieldset>
        <button type="submit">
          Criar Comunidade
        </button>
      </form>
    </Box>
  )
}