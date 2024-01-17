import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/users.model';

@Resolver(of => User)
export class UsersResolver {
  constructor() {}

  @Query(returns => User)
  async user(@Args('id') id: string) {
    return {
      id,
      name: id,
    };
  }
}
