import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  saludoDia(): string {
    return 'Buenos dias';
  }

  saludoTarde(): string {
    return 'Buenas tardes';
  }

  saludoNoche(): string {
    return 'Buenas noches';
  }
}
