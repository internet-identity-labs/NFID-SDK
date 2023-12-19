/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AuthClientLoginOptions } from "@dfinity/auth-client";
export namespace Components {
    interface InternetIdentityProvider {
        /**
          * The first name
         */
        "authClientOptions": AuthClientLoginOptions;
    }
}
declare global {
    interface HTMLInternetIdentityProviderElement extends Components.InternetIdentityProvider, HTMLStencilElement {
    }
    var HTMLInternetIdentityProviderElement: {
        prototype: HTMLInternetIdentityProviderElement;
        new (): HTMLInternetIdentityProviderElement;
    };
    interface HTMLElementTagNameMap {
        "internet-identity-provider": HTMLInternetIdentityProviderElement;
    }
}
declare namespace LocalJSX {
    interface InternetIdentityProvider {
        /**
          * The first name
         */
        "authClientOptions"?: AuthClientLoginOptions;
    }
    interface IntrinsicElements {
        "internet-identity-provider": InternetIdentityProvider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "internet-identity-provider": LocalJSX.InternetIdentityProvider & JSXBase.HTMLAttributes<HTMLInternetIdentityProviderElement>;
        }
    }
}