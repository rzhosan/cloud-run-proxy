import {
  IsString,
  IsOptional,
  IsNumber,
  IsObject,
  IsIP,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProxyRequestDto {
  @ApiProperty({
    example: 'get',
    default: 'get',
    description: 'Request method',
  })
  @IsString()
  method?: string = 'get';

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

  @ApiProperty({ default: null, description: 'Request body' })
  @IsObject()
  @IsOptional()
  body?: Record<string, any> = null;

  @ApiProperty({ default: null, description: 'A proxy host or IP address' })
  @IsIP()
  @IsOptional()
  proxyIp?: string;
}
