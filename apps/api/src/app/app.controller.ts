import { Controller, Get } from '@nestjs/common';

import { Message } from '@angular-nest-herokuapp/api-interfaces';

import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
