import { newE2EPage } from '@stencil/core/testing';

describe('internet-identity-provider', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<internet-identity-provider></internet-identity-provider>');
    const element = await page.find('internet-identity-provider');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<internet-identity-provider></internet-identity-provider>');
    const element = await page.find('internet-identity-provider >>> div');
    expect(element.textContent).toEqual('InternetIdentityProvider');
  });
});
