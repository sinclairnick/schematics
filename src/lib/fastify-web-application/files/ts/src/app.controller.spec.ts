import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    })
    .compile();

    controller = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello Fastify Web Application !"', () => {
      expect(controller.getHello()).toBe('Hello Fastify Web Application !');
    });
  });
});
