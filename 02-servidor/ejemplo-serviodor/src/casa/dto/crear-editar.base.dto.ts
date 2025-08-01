import { IsInt, IsUrl, Length, Min } from "class-validator";

export class CrearEditarBaseDto{
    @Length(3, 500)
    nombre: string;

    @IsInt()
    @Min(0)
    valor: number;

    @IsUrl()
    imagenUrl: string;
}