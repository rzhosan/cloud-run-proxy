import { Controller, Get, HttpStatus, HttpCode, Ip } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('health')
  @HttpCode(HttpStatus.OK)
  async handleProxy(@Ip() ip: string): Promise<any> {
    return {
      version: process.env.VERSION || 'unspecified',
      healthy: true,
      timestamp: new Date().toISOString(),
      your_ip: ip,
    };
  }
}
