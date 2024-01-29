import { Injectable } from '@nestjs/common';
import type LoopsClient from 'loops';
import LoopsEmailClient from 'node_modules/loops-cjs/dist';

@Injectable()
export class AppService {
  private loops: LoopsClient;
  constructor() {
    this.loops = new LoopsEmailClient(
      'INVALID LOOP API KEY FOR THE SAKE OF TESTING',
    );
    this.loops
      .sendEvent('hi', 'there')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
