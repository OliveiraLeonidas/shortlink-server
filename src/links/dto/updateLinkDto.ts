import { IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateLinkDto {
  @IsOptional()
  @IsString({ message: 'O código deve ser uma string.' })
  code?: string;

  @IsOptional()
  @IsString({ message: 'A URL original deve ser uma string.' })
  @IsUrl({}, { message: 'A URL original deve ser uma URL válida.' })
  originalUrl?: string;
}
