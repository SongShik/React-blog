
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from '.';
import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
    it('shold render althor and category links', () => {
        renderTheme(<ArticleMeta {...props} />);

        expect(screen.getByRole('link', { name: 'Song Shik' })).toHaveAttribute('href/author/song-shik');
        expect(screen.getByRole('link', { name: 'Tech' })).toHaveAttribute('href/category/tech');
        expect(screen.getByRole('link', { name: 'JS' })).toHaveAttribute('href/category/javascript');
    });

    it('shuld format date', () => {
        renderTheme(<ArticleMeta {...props} />);

        expect(screen.getByText('2 de mar. de 2021')).toHaveAttribute('datetime', props.createdAt,);
    })

    it('shold match snapshot', () => {
        const { container } = renderTheme(<ArticleMeta {...props} />);

        expect(container).toMatchSnapshot;
    })
});