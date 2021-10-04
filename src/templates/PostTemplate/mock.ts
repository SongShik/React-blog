
import { data } from '../../api/dados.json';
import { PostsTemplateProps } from '../PostsTemplate';

export default {
    settings: data.setting,
    post: data.posts[1],
} as PostsTemplateProps;
