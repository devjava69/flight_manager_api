import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World guys, iam available in ghcr and can be pulled from it !';
  }
}
