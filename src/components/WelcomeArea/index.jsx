import { WelcomeBox } from '../WelcomeBox';
import { TodoListBox } from '../TodoListBox';

import { Container } from './styles';

export function WelcomeArea() {
  return (
    <Container>
      <WelcomeBox />
      <TodoListBox />
    </Container>
  )
}