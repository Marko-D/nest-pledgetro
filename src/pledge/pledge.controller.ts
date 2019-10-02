import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { PledgeService } from './pledge.service';
import { PledgeDTO } from './pledge.dto';

@Controller('pledge')
export class PledgeController {

  constructor(
    private pledgeService: PledgeService
  ){

  }
  
  @Get()
  showAllPledges(){
    return this.pledgeService.showAll();
  };

  @Post()
  createPledge(@Body() data: PledgeDTO){
    return this.pledgeService.create(data);
  };

  @Get(':id')
  readPledge(@Param('id') id: string ){
    return this.pledgeService.read(id);
  };

  @Put(':id')
  updatePledge(@Param('id') id: string, @Body() data: PledgeDTO){
    return this.pledgeService.update(id, data);
  }

  @Delete(':id')
  destroyPledge(@Param('id') id: string){
    return this.pledgeService.destroy(id);
  }
}
