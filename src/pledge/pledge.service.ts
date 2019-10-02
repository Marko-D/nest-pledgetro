import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PledgeEntity } from './pledge.entity';
import { PledgeDTO } from './pledge.dto';

@Injectable()
export class PledgeService {

  constructor(
    @InjectRepository(PledgeEntity) 
    private pledgeRepository: Repository<PledgeEntity>
  ) { }

  async showAll() {
    return await this.pledgeRepository.find();
  }

  async create(data: PledgeDTO){
    const pledge = await this.pledgeRepository.create(data);
    await this.pledgeRepository.save(pledge);
    return pledge;
  }

  async read(id: string){
    return await this.pledgeRepository.findOne({where: {id}})
  }

  async update (id: string, data: Partial<PledgeDTO>){
    await this.pledgeRepository.update({id}, data);
    return await this.pledgeRepository.findOne({id});
  }

  async destroy(id: string){
    await this.pledgeRepository.delete({id});
    return {deleted: true};
  }
}
