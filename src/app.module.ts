import { Module } from '@nestjs/common';
import { ProxyController } from './proxy/proxy.controller';
import { ProxyService } from './proxy/proxy.service';

@Module({
  imports: [],
  controllers: [ProxyController],
  providers: [ProxyService],
})
export class AppModule {}
