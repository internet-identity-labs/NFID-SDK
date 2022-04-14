import { AuthClientLoginOptions } from '@dfinity/auth-client';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'internet-identity-provider',
  styleUrl: 'internet-identity-provider.css',
  shadow: true,
})
export class InternetIdentityProvider {
  /**
   * The first name
   */
  @Prop() authClientOptions: AuthClientLoginOptions;

  render() {
    return <div>InternetIdentityProvider</div>;
  }
}
