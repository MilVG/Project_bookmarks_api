import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.client.categories.create({
      data: {
        name: createCategoryDto.name,
      },
    });
  }

  // opcional: método para listar todas
  async findAll() {
    return this.prisma.client.categories.findMany();
  }
}
