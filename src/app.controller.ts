import { Controller, Get, HttpStatus, HttpCode } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('health')
  @HttpCode(HttpStatus.OK)
  async handleProxy(): Promise<any> {
    return {
      version: '1.0',
      healthy: true,
      timestamp: new Date().toISOString(),
    };
  }
}
