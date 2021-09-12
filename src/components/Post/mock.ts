import { PostProps } from '.';
import { data } from '../../api/dados.json';

const { id, title, excerpt, cover, author, categories, createdAt, content } = data.posts[0];

export default {
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
  content,
} as PostProps;