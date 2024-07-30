import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './interfaces/article.interface';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(createArticleDto: CreateArticleDto): Article;
    findAll(): Article[];
    findOne(id: string): Article;
    update(id: string, updateArticleDto: UpdateArticleDto): Article;
    remove(id: string): Article;
}
