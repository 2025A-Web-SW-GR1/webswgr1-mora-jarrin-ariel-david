
import { Controller, Get, Req, Res } from '@nestjs/common';
import { CasaService } from './casa.service';

@Controller('casas') 
export class CasaViewController {
  constructor(private readonly casaService: CasaService) {}

  @Get()
  async listarVistas(@Req() req: any, @Res() res: any) {
    let casas;
    const user = req.session?.user;
    if (user && user.username) {
      casas = await this.casaService.obtenerTodos({
        where: { username: user.username },
      });
    } else {
      casas = await this.casaService.obtenerTodos();
    }
    return res.render('casas', { casas });
  }
}
