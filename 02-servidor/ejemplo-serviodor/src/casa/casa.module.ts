import { Module } from '@nestjs/common';
import { CasaController } from './casa.controller';
import { CasaViewController } from './casa-view.controller';
import { CasaService } from './casa.service';
import { casaProviders } from './casa.repository';
import { DatabaseModule } from '../database/database.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [DatabaseModule, MulterModule],
  controllers: [
    CasaController,      
    CasaViewController,  
  ],
  providers: [...casaProviders, CasaService],
  exports: [...casaProviders, CasaService],
})
export class CasaModule {}
