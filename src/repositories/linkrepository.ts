import { CreateLinkBody } from 'src/links/dto/linkBody';

export abstract class LinkRepository {
  abstract create(createLink: CreateLinkBody): Promise<void>;
}
