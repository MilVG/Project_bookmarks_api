import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BookmarksService {
  constructor(private prisma: PrismaService) { }

  async getAllBookmarks() {

    return this.prisma.bookmarks.findMany(); // usando el modelo generado por Prisma
  }
}
