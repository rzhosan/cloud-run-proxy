import { ApiProperty } from '@nestjs/swagger';

export class ProxyResponseDto {
  @ApiProperty()
  status: number;

  @ApiProperty()
  data: any;

  @ApiProperty()
  headers?: Record<string, any>;
}
