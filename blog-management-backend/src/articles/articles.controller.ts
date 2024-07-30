import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './interfaces/article.interface';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto): Article {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  findAll(): Article[] {
    return this.articlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Article {
    return this.articlesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto): Article {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Article {
    return this.articlesService.remove(+id);
  }
}
