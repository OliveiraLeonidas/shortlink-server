import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateLinkBody {
  // decorator
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  originalUrl: string;
}
