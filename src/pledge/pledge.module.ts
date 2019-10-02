import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PledgeController } from './pledge.controller';
import { PledgeService } from './pledge.service';
import { PledgeEntity } from './pledge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PledgeEntity])],
  controllers: [PledgeController],
  providers: [PledgeService]
})
export class PledgeModule {}
