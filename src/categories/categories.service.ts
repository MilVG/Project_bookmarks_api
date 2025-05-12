import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) { }
  async create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.categories.create({
      data: {
        name: createCategoryDto.name,
      },
    });
  }

  // opcional: método para listar todas
  async findAll() {
    return this.prisma.categories.findMany();
  }
}
