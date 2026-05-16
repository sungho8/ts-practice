import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @ApiProperty({ example: 1, description: '할 일 ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '할일 제목', description: '할 일 제목' })
  @Column()
  title: string;

  @ApiProperty({
    example: false,
    description: '할 일 완료 여부',
    required: false,
  })
  @Column({ default: false })
  isComplete: boolean;
}
