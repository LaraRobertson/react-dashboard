import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WahsegaTestDataDataSource} from '../datasources';
import {Usersonly, UsersonlyRelations} from '../models';

export class UsersonlyRepository extends DefaultCrudRepository<
  Usersonly,
  typeof Usersonly.prototype.user_id,
  UsersonlyRelations
> {
  constructor(
    @inject('datasources.wahsegaTestData') dataSource: WahsegaTestDataDataSource,
  ) {
    super(Usersonly, dataSource);
  }
}
