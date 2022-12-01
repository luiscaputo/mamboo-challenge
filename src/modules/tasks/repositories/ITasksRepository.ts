import { ICreateTaskDTO, IGetTaskByIdDTO, IUpdateTaskDTO } from '../infra/dtos';

interface ITasksRepository {
  index(): Promise<[] | any>;
  show({ _id }: IGetTaskByIdDTO): Promise<any | null>;
  create({
    title,
    description,
    priority,
    status,
    members,
    tags,
    startedAt,
    finishedAt,
  }: ICreateTaskDTO): Promise<any | null>;
  update({
    _id,
    title,
    description,
    priority,
    status,
    members,
    tags,
    startedAt,
    finishedAt,
  }: IUpdateTaskDTO): Promise<any | null>;
  delete({ _id }: IGetTaskByIdDTO): Promise<any | null>;
}

export { ITasksRepository };
