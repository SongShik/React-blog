import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { HtmlComponent } from '.';

describe('<HtmlComponent />', () => {
  it('should render a text', () => {
    renderTheme(<HtmlComponent html={'<b>Children</b>'} />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <HtmlComponent html={'<b>Children</b>'} />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
});
