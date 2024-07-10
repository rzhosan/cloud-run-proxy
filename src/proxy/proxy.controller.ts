import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { ProxyService } from './proxy.service';
import { ProxyRequestDto } from './dto/proxy-request.dto';
import { ProxyResponseDto } from './dto/proxy-response.dto';

@Controller('proxy')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async handleProxy(
    @Body() request: ProxyRequestDto,
  ): Promise<ProxyResponseDto> {
    try {
      const response = await this.proxyService.proxyRequest(request);
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
