import { Test, TestingModule } from '@nestjs/testing';
import { CosmosdbService } from './cosmosdb.service';

describe('CosmosdbService', () => {
  let service: CosmosdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CosmosdbService],
    }).compile();

    service = module.get<CosmosdbService>(CosmosdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
