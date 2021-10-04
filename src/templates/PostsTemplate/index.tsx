import { useState } from 'react';
import { loadPosts, LoadPostVariables } from "../../api/load-posts";
import { PostGrid } from "../../components/PostGrid";
import { PostStrapi } from "../../shared-types/post-strapi";
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from "../Base";
import * as Styled from './styles';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
  variables?: LoadPostVariables;
};

export const PostsTemplate = ({ settings, posts = [], variables }: PostsTemplateProps) => {
  const [statePosts, setStatePost] = useState(posts);
  const [stateVariables, setstateVariables] = useState(variables);
  const [buttonDisable, setbuttonDisable] = useState(false);
  const [noMorePosts, setnoMorePosts] = useState(false);

  const hendleLoadMorePosts = async () => {
    setbuttonDisable(true);

    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    }
    const morePosts = await loadPosts(newVariables);

    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setnoMorePosts(true);
      return;
    }

    setbuttonDisable(false);
    setstateVariables(newVariables);
    setStatePost((p) => [...p, ...morePosts.posts]);

  };

  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={statePosts} />

      {statePosts && statePosts.length ? (
        <Styled.ButtonContainer>
          <Styled.Button onClick={hendleLoadMorePosts} disabled={buttonDisable}>
            {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
          </Styled.Button>
        </Styled.ButtonContainer>
      ) : null}

    </BaseTemplate>
  );
}
