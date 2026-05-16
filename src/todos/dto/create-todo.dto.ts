import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({ example: '할일 제목', description: '할 일 제목' })
  title: string;
  @ApiProperty({
    example: false,
    description: '할 일 완료 여부',
    required: false,
  })
  isComplete?: boolean = false;
}
