import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './interfaces/article.interface';

@Injectable()
export class ArticlesService {
  private readonly articles: Article[] = [];
  private idCounter = 1;

  create(createArticleDto: CreateArticleDto): Article {
    const newArticle: Article = { 
      id: this.idCounter++, 
      publicationDate: new Date(), 
      ...createArticleDto 
    };
    this.articles.push(newArticle);
    return newArticle;
  }

  findAll(): Article[] {
    return this.articles;
  }

  findOne(id: number): Article {
    return this.articles.find(article => article.id === id);
  }

  update(id: number, updateArticleDto: UpdateArticleDto): Article {
    const articleIndex = this.articles.findIndex(article => article.id === id);
    if (articleIndex > -1) {
      const updatedArticle = { ...this.articles[articleIndex], ...updateArticleDto };
      this.articles[articleIndex] = updatedArticle;
      return updatedArticle;
    }
    return null;
  }

  remove(id: number): Article {
    const articleIndex = this.articles.findIndex(article => article.id === id);
    if (articleIndex > -1) {
      const [removedArticle] = this.articles.splice(articleIndex, 1);
      return removedArticle;
    }
    return null;
  }
}
