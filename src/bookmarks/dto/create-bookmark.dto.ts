
import { IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateBookmarkDto {
  @IsString()
  title: string;

  @IsUrl()
  url: string;

  @IsString()
  description: string;

  @IsUUID()
  idusers: string;

  @IsString()
  categoryName: string;
}

