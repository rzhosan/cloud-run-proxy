import { Module } from '@nestjs/common';
import { ProxyController } from './proxy/proxy.controller';
import { ProxyService } from './proxy/proxy.service';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [ProxyController, AppController],
  providers: [ProxyService],
})
export class AppModule {}
