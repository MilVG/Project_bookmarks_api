import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, BookmarksModule, CategoriesModule, TagsModule, AuthModule],
})
export class AppModule { }
