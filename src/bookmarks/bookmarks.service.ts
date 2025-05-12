import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Injectable()
export class BookmarksService {
  constructor(private prisma: PrismaService) { }

  async getAllBookmarks() {
    return this.prisma.bookmarks.findMany({
      include: {
        categories: true,
        users: true,
        bookmark_tags: {
          include: {
            tags: true,
          },
        },
      },
    });
  }
  async createBookmark(dto: CreateBookmarkDto) {
    // 1. Buscar o crear la categoría (usando findUnique + create)

    let category = await this.prisma.categories.findFirst({
      where: { name: dto.categoryName },
    });


    if (!category) {
      category = await this.prisma.categories.create({
        data: { name: dto.categoryName },
      });
    }

    // ID de usuario predeterminado
    const DEFAULT_USER_ID = 'b82ee126-489d-44a4-972a-5243c549d7fa'; // reemplaza esto por uno real

    // Crear el bookmark
    return this.prisma.bookmarks.create({
      data: {
        title: dto.title,
        url: dto.url,
        description: dto.description,
        id_categories: category.id,
        idusers: DEFAULT_USER_ID,
        created_at: new Date(),
      },
    });
  }
}
