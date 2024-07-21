import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { LinkController } from './links/link.controller';
import { LinkService } from './links/link.service';

@Module({
  imports: [],
  controllers: [LinkController],
  providers: [PrismaService, LinkService],
})
export class AppModule {}
