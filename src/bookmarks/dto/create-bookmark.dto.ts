
import { IsString, IsUrl } from 'class-validator';

export class CreateBookmarkDto {
  @IsString()
  title: string;

  @IsUrl()
  url: string;

  @IsString()
  description: string;

  @IsString()
  categoryName: string;
}

