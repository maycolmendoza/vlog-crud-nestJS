"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
let ArticlesService = class ArticlesService {
    constructor() {
        this.articles = [];
        this.idCounter = 1;
    }
    create(createArticleDto) {
        const newArticle = {
            id: this.idCounter++,
            publicationDate: new Date(),
            ...createArticleDto
        };
        this.articles.push(newArticle);
        return newArticle;
    }
    findAll() {
        return this.articles;
    }
    findOne(id) {
        return this.articles.find(article => article.id === id);
    }
    update(id, updateArticleDto) {
        const articleIndex = this.articles.findIndex(article => article.id === id);
        if (articleIndex > -1) {
            const updatedArticle = { ...this.articles[articleIndex], ...updateArticleDto };
            this.articles[articleIndex] = updatedArticle;
            return updatedArticle;
        }
        return null;
    }
    remove(id) {
        const articleIndex = this.articles.findIndex(article => article.id === id);
        if (articleIndex > -1) {
            const [removedArticle] = this.articles.splice(articleIndex, 1);
            return removedArticle;
        }
        return null;
    }
};
exports.ArticlesService = ArticlesService;
exports.ArticlesService = ArticlesService = __decorate([
    (0, common_1.Injectable)()
], ArticlesService);
//# sourceMappingURL=articles.service.js.map