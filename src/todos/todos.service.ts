import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(todo);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    await this.todoRepository.update(id, updateTodoDto);
    return this.todoRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.todoRepository.delete(id);
    return { deleted: true };
  }
}
