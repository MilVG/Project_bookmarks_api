import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {

  constructor(private readonly bookmarksService: BookmarksService) { }

  @Get()
  async getAllBookmarks() {
    return this.bookmarksService.getAllBookmarks()
  }
  // Crear un marcador
  @Post()
  async createBookmark(@Body() createBookmarkDto: CreateBookmarkDto) {
    return this.bookmarksService.createBookmark(createBookmarkDto);
  }

}
