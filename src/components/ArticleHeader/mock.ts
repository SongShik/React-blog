import { ArticleHeaderProps } from '.';
import { data } from '../../api/dados.json';

const { id, title, excerpt, cover, author, categories, createdAt, } = data.posts[0];

export default {
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
} as ArticleHeaderProps;