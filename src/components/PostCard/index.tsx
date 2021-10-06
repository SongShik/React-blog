import Link from 'next/link';
import { StrapiImage } from '../../shared-types/strapi-image';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type PostCardProps = {
  id: string,
  title: string,
  cover: StrapiImage,
  excerpt: string,
  slug: string;
};

export function PostCard({
  id,
  title,
  excerpt,
  cover,
  slug,
}: PostCardProps) {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <a>
          <Styled.Cover src={cover.url} alt={title} />
        </a>
      </Link>
      <Link href={`/post/${slug}`}>
        <Heading as="h2" size="small"><a>{title}</a></Heading>
      </Link>
      <Styled.Excerpt>
        {excerpt}
      </Styled.Excerpt>
    </Styled.Wrapper>
  );
}
