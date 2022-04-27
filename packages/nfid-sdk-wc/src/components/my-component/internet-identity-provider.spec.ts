import { newSpecPage } from '@stencil/core/testing';
import { InternetIdentityProvider } from './internet-identity-provider';

describe('internet-identity-provider', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [InternetIdentityProvider],
      html: '<internet-identity-provider></internet-identity-provider>',
    });
    expect(root).toEqualHtml(`
      <internet-identity-provider>
        <mock:shadow-root>
          <div>
            InternetIdentityProvider
          </div>
        </mock:shadow-root>
      </internet-identity-provider>
    `);
  });
});
