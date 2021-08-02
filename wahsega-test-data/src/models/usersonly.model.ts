import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: "Users"
    }
  }
})
export class Usersonly extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  user_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  UID: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'number',
    required: true,
  })
  active: number;

  @property({
    type: 'date',
    required: true,
  })
  create_date: string;

  @property({
    type: 'date',
  })
  update_date?: string;


  constructor(data?: Partial<Usersonly>) {
    super(data);
  }
}

export interface UsersonlyRelations {
  // describe navigational properties here
}

export type UsersonlyWithRelations = Usersonly & UsersonlyRelations;
