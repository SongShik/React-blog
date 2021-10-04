import { StrapiImage } from '../../shared-types/strapi-image';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type ArticleHeaderProps = {
  id: string,
  title: string;
  excerpt: string;
  cover: StrapiImage;
} & ArticleMetaProps;

export const ArticleHeader = ({
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size='big'>{title}</Heading>

      <Styled.Excerpt>{excerpt}</Styled.Excerpt>

      <Styled.ArticleContainer>
        <ArticleMeta categories={categories} author={author} createdAt={createdAt} />
      </Styled.ArticleContainer>

      <Styled.Cover src={cover.url} alt={title} />

    </Styled.Wrapper >
  );
};