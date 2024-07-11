import { Injectable, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { ProxyRequestDto } from './dto/proxy-request.dto';
import { ProxyResponseDto } from './dto/proxy-response.dto';

@Injectable()
export class ProxyService {
  async proxyRequest(request: ProxyRequestDto): Promise<ProxyResponseDto> {
    try {
      const response = await axios({
        method: request.method,
        url: request.url,
        timeout: request.timeout,
        headers: request.headers,
        data: request.body,
        proxy: request.proxyIp
          ? {
              protocol: 'http',
              host: request.proxyIp,
              port: 80,
            }
          : null,
      });

      return {
        status: response.status,
        data: response.data,
        headers: response.headers,
      };
    } catch (error) {
      if (error.response) {
        return {
          status: error.response.status,
          data: error.response.data,
          headers: error.response.headers,
        };
      } else if (error.request) {
        return {
          status: HttpStatus.GATEWAY_TIMEOUT,
          data: 'No response received from the server within the timeout period',
        };
      } else {
        return {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          data: error.message,
        };
      }
    }
  }
}
