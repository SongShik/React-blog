
import { data } from '../../api/dados.json';
import { PostTagsProps } from '../../components/PostTags';

export default {
    settings: data.setting,
    posts: data.posts,
} as PostTagsProps;
