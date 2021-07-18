import { Box } from '../Box';

export function ProfileRelationsBox({ title, length, items }) {
  return (
    <Box>
      <h4><a href="#">{title} <span>({length})</span></a></h4>
      <ul>
        {items.slice(0, 6).map(item => {
          return (
            <li key={item.id}>
              <a href={item.html_url}>
                <img src={item.avatar_url} />
                <span>{item.login}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </Box>
  )
}