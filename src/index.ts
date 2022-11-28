import { SessionStorage } from "@remix-run/server-runtime";
import {
  AuthenticateOptions,
  Strategy,
  StrategyVerifyCallback,
} from "remix-auth";

/**
 * This interface declares what configuration the strategy needs from the
 * developer to correctly work.
 */
export interface Fido2StrategyOptions {
  something: "You may need";
}

/**
 * This interface declares what the developer will receive from the strategy
 * to verify the user identity in their system.
 */
export interface Fido2StrategyVerifyParams {
  something: "Dev may need";
}

export class Fido2Strategy<User> extends Strategy<
  User,
  Fido2StrategyVerifyParams
> {
  name = "fido2";

  constructor(
    options: Fido2StrategyOptions,
    verify: StrategyVerifyCallback<User, Fido2StrategyVerifyParams>
  ) {
    super(verify);
    // do something with the options here
  }

  async authenticate(
    request: Request,
    sessionStorage: SessionStorage,
    options: AuthenticateOptions
  ): Promise<User> {
    return await this.failure(
      "Implement me!",
      request,
      sessionStorage,
      options
    );
    // Uncomment me to do a success response
    // this.success({} as User, request, sessionStorage, options);
  }
}
