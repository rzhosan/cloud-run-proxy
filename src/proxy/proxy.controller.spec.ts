import { Test, TestingModule } from '@nestjs/testing';
import { ProxyController } from './proxy.controller';
import { ProxyService } from './proxy.service';

describe('ProxyController', () => {
  let proxyController: ProxyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProxyController],
      providers: [ProxyService],
    }).compile();

    proxyController = app.get<ProxyController>(ProxyController);
  });

  describe('ProxyController', () => {
    it('should return 400 response', async () => {
      const response = await proxyController.handleProxy({
        method: 'GET',
        url: 'https://example.com',
        timeout: 1000,
        headers: {},
        body: {},
      });

      expect(response.status).toBe(400);
    });
  });
});
