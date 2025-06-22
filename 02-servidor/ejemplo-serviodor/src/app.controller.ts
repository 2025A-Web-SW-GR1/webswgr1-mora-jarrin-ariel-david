import {
  Controller,
  Get,
  Query,
  HttpCode,
  HttpException,
  NotFoundException,
} from '@nestjs/common';

@Controller('casa')
export class AppController {
  private readonly casas = [
    { id: 1, nombre: 'Casa 1' },
    { id: 2, nombre: 'Casa 2' },
  ];
    /**
   * Examen Final - Ejemplo de Servicio REST: Obtener casas
   * 
   * Método: GET /casa
   * 
   * - Si no se envía ningún parámetro, devuelve todas las casas:
   *   Código 200
   *   Respuesta: [{ id: 1, nombre: "Casa 1" }, { id: 2, nombre: "Casa 2" }]
   * 
   * - Si se envía el parámetro ?idCasa=:
   *   - Si el ID existe (1 o 2), devuelve solo esa casa:
   *     Código 200
   *     Respuesta: [{ id: X, nombre: "Casa X" }]
   *   - Si el ID no existe (por ejemplo, 3), devuelve:
   *     Código 404
   *     Respuesta: "No se encuentra"
   *   - Si el parámetro es inválido, devuelve:
   *     Código 400
   *     Respuesta: "Parámetro idCasa inválido"
   * 
   * Ejemplos:
   * - /casa?idCasa=1 → Casa 1
   * - /casa?idCasa=2 → Casa 2
   * - /casa?idCasa=3 → 404 No se encuentra
   */

  @Get("/casa")
  @HttpCode(200)
  getCasa(
    @Query('idCasa') idCasa?: string,
  ): { id: number; nombre: string }[] {
    if (!idCasa) {
      return this.casas;
    }
    const id = parseInt(idCasa, 10);
    if (isNaN(id)) {
      throw new HttpException('Parámetro idCasa inválido', 400);
    }
    const casa = this.casas.find(c => c.id === id);
    if (!casa) {
      throw new NotFoundException('No se encuentra');
    }
    return [casa];
  }
}
