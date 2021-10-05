import { screen } from '@testing-library/react';
import { Comments, CommentsProps } from '.';
import { renderTheme } from '../../styles/render-theme';


const props: CommentsProps = {
    title: 'any',
}

describe('<Comments />', () => {
    it('shold render', () => {
        renderTheme(<Comments {...props} />);

        expect(screen.getByRole('heading', { name: 'oi' })).toBeInTheDocument();
    });
});