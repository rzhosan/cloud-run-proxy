import { Method } from 'axios';
import { IsString, IsOptional, IsNumber, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProxyRequestDto {
  @ApiProperty({ example: 'get' })
  @IsString()
  method?: Method = 'get';

  @ApiProperty({ example: 'https://jsonplaceholder.typicode.com/posts/1' })
  @IsString()
  url: string;

  @ApiProperty({
    example: 10000,
    description: 'Request timeout in milliseconds',
  })
  @IsNumber()
  @IsOptional()
  timeout?: number = 10000;

  @ApiProperty({
    example: { 'Content-Type': 'application/json' },
    description: 'Request headers',
  })
  @IsObject()
  @IsOptional()
  headers?: Record<string, string> = {};

  @ApiProperty({ example: { id: 1 }, description: 'Request body' })
  @IsObject()
  @IsOptional()
  body?: Record<string, any> = {};
}
