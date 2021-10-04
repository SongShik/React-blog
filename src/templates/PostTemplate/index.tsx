import * as Styled from './styles';
import { Post } from "../../components/Post";
import { PostStrapi } from "../../shared-types/post-strapi";
import { SettingsStrapi } from "../../shared-types/settings-strapi";
import { BaseTemplate } from "../Base";
import { PostTags } from '../../components/PostTags';

export type PostTemplate = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostTemplate = ({ settings, post }: PostTemplate) => {
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>
    </BaseTemplate>
  );
}