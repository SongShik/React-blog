import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlComponent } from '../HtmlComponent';
import * as Styled from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string
};

export const Post = ({
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
  content,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <ArticleHeader
        id={id}
        author={author}
        categories={categories}
        cover={cover}
        createdAt={createdAt}
        excerpt={excerpt}
        title={title}
      />

      <HtmlComponent html={content} />
    </Styled.Wrapper >
  );
};