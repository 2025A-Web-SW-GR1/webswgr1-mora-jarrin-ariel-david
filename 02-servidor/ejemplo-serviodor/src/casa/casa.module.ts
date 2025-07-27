import { Module } from '@nestjs/common';
import { casaProviders } from './casa.repository';
import { CasaController } from './casa.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CasaService } from './casa.service';
import { MulterModule } from '@nestjs/platform-express';
import { CasaViewController } from './casa-view.controller';

@Module({
  imports: [
    DatabaseModule,
    MulterModule
  ],
  controllers: [CasaController, CasaViewController],
  providers: [
    ...casaProviders,
    CasaService,
  ],
  exports: [
    ...casaProviders,
    CasaService,
  ]
})
export class CasaModule {}