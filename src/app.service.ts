import { Injectable } from '@nestjs/common';
import LoopsClient from 'loops';

@Injectable()
export class AppService {
  private loops: LoopsClient;

  constructor() {
    this.loops = new LoopsClient('');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
