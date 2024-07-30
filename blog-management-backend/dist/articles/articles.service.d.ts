import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './interfaces/article.interface';
export declare class ArticlesService {
    private readonly articles;
    private idCounter;
    create(createArticleDto: CreateArticleDto): Article;
    findAll(): Article[];
    findOne(id: number): Article;
    update(id: number, updateArticleDto: UpdateArticleDto): Article;
    remove(id: number): Article;
}
