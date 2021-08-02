import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Usersonly} from '../models';
import {UsersonlyRepository} from '../repositories';

export class UseronlyController {
  constructor(
    @repository(UsersonlyRepository)
    public usersonlyRepository : UsersonlyRepository,
  ) {}

  @post('/users')
  @response(200, {
    description: 'Usersonly model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usersonly)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usersonly, {
            title: 'NewUsersonly',
            exclude: ['user_id'],
          }),
        },
      },
    })
    usersonly: Omit<Usersonly, 'user_id'>,
  ): Promise<Usersonly> {
    return this.usersonlyRepository.create(usersonly);
  }

  @get('/users/count')
  @response(200, {
    description: 'Usersonly model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usersonly) where?: Where<Usersonly>,
  ): Promise<Count> {
    return this.usersonlyRepository.count(where);
  }

  @get('/users')
  @response(200, {
    description: 'Array of Usersonly model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usersonly, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usersonly) filter?: Filter<Usersonly>,
  ): Promise<Usersonly[]> {
    return this.usersonlyRepository.find(filter);
  }

  @patch('/users')
  @response(200, {
    description: 'Usersonly PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usersonly, {partial: true}),
        },
      },
    })
    usersonly: Usersonly,
    @param.where(Usersonly) where?: Where<Usersonly>,
  ): Promise<Count> {
    return this.usersonlyRepository.updateAll(usersonly, where);
  }

  @get('/users/{id}')
  @response(200, {
    description: 'Usersonly model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usersonly, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Usersonly, {exclude: 'where'}) filter?: FilterExcludingWhere<Usersonly>
  ): Promise<Usersonly> {
    return this.usersonlyRepository.findById(id, filter);
  }

  @patch('/users/{id}')
  @response(204, {
    description: 'Usersonly PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usersonly, {partial: true}),
        },
      },
    })
    usersonly: Usersonly,
  ): Promise<void> {
    await this.usersonlyRepository.updateById(id, usersonly);
  }

  @put('/users/{id}')
  @response(204, {
    description: 'Usersonly PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() usersonly: Usersonly,
  ): Promise<void> {
    await this.usersonlyRepository.replaceById(id, usersonly);
  }

  @del('/users/{id}')
  @response(204, {
    description: 'Usersonly DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usersonlyRepository.deleteById(id);
  }
}
