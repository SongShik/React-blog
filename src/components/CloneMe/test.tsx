import { screen } from '@testing-library/react';
import { CloneMe, CloneMeProps } from '.';
import { renderTheme } from '../../styles/render-theme';


const props: CloneMeProps = {
    title: 'any',
}

describe('<CloneMe />', () => {
    it('shold render', () => {
        renderTheme(<CloneMe {...props} />);

        expect(screen.getByRole('heading', {name: 'oi'})).toBeInTheDocument();
    });
});