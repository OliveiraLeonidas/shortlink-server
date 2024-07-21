import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { LinkService } from './link.service';
import { CreateLinkBody } from './dto/linkBody';
import { Response } from 'express';
import { LinkDto } from './dto/link.dto';
import { UpdateLinkDto } from './dto/updateLinkDto';
//import { LinkDto } from './dto/link.dto';
//@Controller() -> sem prefixo de rota

@Controller('links')
export class LinkController {
  constructor(private readonly linkservice: LinkService) {}

  @Post()
  async createLink(@Body() body: CreateLinkBody) {
    //const { code, originalUrl, createdAt } = await this.linkservice.createLink(body);
    const link = await this.linkservice.createLink(body);
    return { data: new LinkDto(link) };
  }

  @Get(':code')
  async getLinkByCode(@Param('code') code: string) {
    const link = await this.linkservice.getLink(code);
    return link;
  }

  @Get('redirect/:code')
  async redirectCode(@Param('code') code: string, @Res() res: Response) {
    const link = await this.linkservice.getLink(code);
    if (!link) {
      throw new NotFoundException(`Link with code ${code} not found!`);
    }
    return res.redirect(HttpStatus.MOVED_PERMANENTLY, link.originalUrl);
  }

  @Get('user/:id')
  async linkData(@Param('id') id: string, @Res() res: Response) {
    const linkData = await this.linkservice.getLinkInfo(id);
    if (!linkData) {
      throw new NotFoundException(`Link with id ${id} not found!`);
    }
    return res.json(new LinkDto(linkData));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateData: UpdateLinkDto) {
    const link = await this.linkservice.updateLink(id, updateData);
    return new LinkDto(link);
  }
}
