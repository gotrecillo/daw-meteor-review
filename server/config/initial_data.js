import { Categories } from '../../lib/collections';

export default function () {
  if (!Categories.findOne()) {
    Categories.insert({ name: 'Videogames', slug: 'videogames' });
    Categories.insert({ name: 'Board Games', slug: 'board-games' });
    Categories.insert({ name: 'Rol Games', slug: 'rol-games' });
    Categories.insert({ name: 'Card Games', slug: 'card-games' });
  }
}
