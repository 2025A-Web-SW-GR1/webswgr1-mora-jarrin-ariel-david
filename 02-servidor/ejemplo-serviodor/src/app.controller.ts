import { Controller, Get, Param, Query, Headers, Post, Body, HttpCode, HttpException, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id') // /ejemplo/1?hola=mundo
  @HttpCode(200)
  ejemplo(
    @Param('id') id, // Parametro de Ruta llamado 'id'
    @Query('hola') hola, // Parametro de consulta llamado 'hola'
    @Headers('escuela') escuela, // Cabecera con nombre 'escuela'
    @Body('monto') monto, // Cabecera con nombre 'escuela'
  ): string {
    return id + hola + ' Funcionando ' + escuela + monto
  }
  @Get('/casa/:idCasa')
  @HttpCode(200)
  ejemploCasa(@Param('idCasa') idCasa) {
    if (idCasa === '1') {
      return [{ id: 1, nombre: 'Casa 1' }];
    } else if (idCasa === '2') {
      return [{ id: 1, nombre: 'Casa 2' }];
    } else if (idCasa === '3') {
      throw new NotFoundException(
        { message: 'No se encuentra' },
      );
    } else {
      throw new HttpException(
        { statusCode: 400, message: 'Parámetro idCasa inválido' },
        400
      );
    }
  }
}
 