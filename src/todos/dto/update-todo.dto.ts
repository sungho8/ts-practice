import { PartialType } from '@nestjs/swagger';
import { CreateTodoDto } from './create-todo.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @ApiProperty({
    example: '할일 제목',
    description: '할 일 제목',
    required: false,
  })
  title?: string;
  @ApiProperty({
    example: false,
    description: '할 일 완료 여부',
    required: false,
  })
  isComplete?: boolean;
}
