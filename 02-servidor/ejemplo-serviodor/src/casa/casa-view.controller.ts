import { Controller, Get, Req, Res } from '@nestjs/common';
import { CasaService } from './casa.service';
@Controller('casas') 
export class CasaViewController {
  constructor(private readonly casaService: CasaService) {}
  @Get()
  async listarTodas(@Res() res: any) {
    const casas = await this.casaService.obtenerTodos();
    return res.render('casas', { casas, title: 'Todas las casas' });
  }
  @Get('mias')
  async listarMias(@Req() req: any, @Res() res: any) {
    const user = req.session?.user;
    if (!user?.username) {
      return res.redirect('/auth/login-vista?mensaje=Por favor inicia sesión');
    }
    const casas = await this.casaService.obtenerTodos({
      where: { username: user.username },
    });
    return res.render('casas', { casas, title: `Casas de ${user.username}` });
  }
}
