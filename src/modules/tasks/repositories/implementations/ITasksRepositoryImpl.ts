import { Task } from '~/configs/db/entities/Tasks.entity';

import {
  IGetTaskByIdDTO,
  ICreateTaskDTO,
  IUpdateTaskDTO,
} from '../../infra/dtos';
import { ITasksRepository } from '../ITasksRepository';

class ITasksRepositoryImpl implements ITasksRepository {
  async index(): Promise<[] | any> {
    return Task.find();
  }
  async show({ _id }: IGetTaskByIdDTO): Promise<any> {
    return Task.findById(_id);
  }
  async create({
    title,
    description,
    priority,
    status,
    members,
    tags,
    startedAt,
    finishedAt,
  }: ICreateTaskDTO): Promise<any> {
    const task = await Task.create({
      title,
      description,
      priority,
      status,
      members,
      tags,
      startedAt,
      finishedAt,
    });
    return task;
  }
  async update({
    _id,
    title,
    description,
    priority,
    status,
    members,
    tags,
    startedAt,
    finishedAt,
  }: IUpdateTaskDTO): Promise<any> {
    const task = await Task.findByIdAndUpdate(_id, {
      $set: {
        title,
        description,
        priority,
        status,
        members,
        tags,
        startedAt,
        finishedAt,
      },
    });
    return task;
  }
  async delete({ _id }: IGetTaskByIdDTO): Promise<any> {
    return Task.findByIdAndDelete(_id);
  }
}

export { ITasksRepositoryImpl };
