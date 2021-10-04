import { request } from 'graphql-request'
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { PostStrapi } from '../shared-types/post-strapi';
import { SettingsStrapi } from '../shared-types/settings-strapi';

export type LoadPostVariables = {
    categorySlug?: string;
    postSlug?: string;
    postSearch?: string;
    authorSlug?: string;
    tagSlug?: string;
    sort?: string;
    start?: number;
    limit?: number;
};

export type StrapiPostAndSettings = {
    setting: SettingsStrapi,
    post: PostStrapi[],
    variables?: LoadPostVariables;
}

export const defaultLoadPostsVariables: LoadPostVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 3,
}

export const loadPosts = async (variables: LoadPostVariables = {}): Promise<PostStrapi[]> => {
    const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
        ...defaultLoadPostsVariables,
        ...variables,
    });

    return data;
}