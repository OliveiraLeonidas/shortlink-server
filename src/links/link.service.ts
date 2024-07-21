import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateLinkBody } from './dto/linkBody';
import { UpdateLinkDto } from './dto/updateLinkDto';

@Injectable()
export class LinkService {
  constructor(private prisma: PrismaService) {}

  async createLink(createLink: CreateLinkBody) {
    const { code, originalUrl } = createLink;
    return this.prisma.link.create({
      data: {
        code,
        originalUrl,
        createdAt: new Date(),
      },
    });
  }

  async getLink(code: string) {
    const link = await this.prisma.link.findUnique({
      where: { code },
    });

    if (!link) {
      throw new NotFoundException('link não encontrado!');
    }

    return link;
  }

  async getLinkInfo(id: string) {
    const linkData = await this.prisma.link.findUnique({
      where: { id },
    });
    return linkData;
  }

  async updateLink(id: string, updateData: UpdateLinkDto) {
    const link = await this.prisma.link.findUnique({
      where: { id },
    });

    if (!link) {
      throw new NotFoundException('Link not found!');
    }

    return this.prisma.link.update({
      where: { id },
      data: {
        ...updateData,
        updatedAt: new Date(),
      },
    });
  }
}
