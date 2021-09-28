import Link from 'next/link';
import { StrapiImage } from '../../shared-typed/strapi-image';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type PostCardProps = {
  title: string,
  cover: StrapiImage,
  excerpt: string,
  slug: string;
};

export function PostCard({
  id: string,
  title,
  excerpt,
  cover,
}: PostCardProps) {
  return (
    <Styled.Wrapper>
      <Link href={'/post/${slug}'} >
        <a>
          <Styled.Cover src={cover.url} alt={title} />
        </a>
      </Link>
      <Link href={'/post/${slug}'} >
        <Heading as="h2" size="small"><a>{title}</a></Heading>
      </Link>
      <Styled.Excerpt>
        {excerpt}
      </Styled.Excerpt>
    </Styled.Wrapper>
  );
}
