import { Link } from '@prisma/client';

export class LinkDto {
  id: string;
  code: string;
  originalUrl: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(link: Link) {
    this.id = link.id;
    this.code = link.code;
    this.originalUrl = link.originalUrl;
    this.createdAt = link.createdAt;
    this.updatedAt = link.updatedAt;
  }
}
