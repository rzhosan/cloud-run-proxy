import { Controller, Get, HttpStatus, HttpCode, Ip, Req } from '@nestjs/common';

import { Request } from 'express';

@Controller()
export class AppController {
  constructor() {}

  @Get('health')
  @HttpCode(HttpStatus.OK)
  async handleProxy(@Req() req: Request, @Ip() ip: string): Promise<any> {
    return {
      version: process.env.VERSION || 'unspecified',
      healthy: true,
      timestamp: new Date().toISOString(),
      your_ip: ip,
      headers: req.headers,
    };
  }
}
