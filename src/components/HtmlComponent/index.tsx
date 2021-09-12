import * as Styled from './styles';

export type HtmlComponentProps = {
  html: string;
};

export const HtmlComponent = ({ html }: HtmlComponentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};
