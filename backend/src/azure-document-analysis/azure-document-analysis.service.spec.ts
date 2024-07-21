import { Test, TestingModule } from '@nestjs/testing';
import { AzureDocumentAnalysisService } from './azure-document-analysis.service';

describe('AzureDocumentAnalysisService', () => {
  let service: AzureDocumentAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AzureDocumentAnalysisService],
    }).compile();

    service = module.get<AzureDocumentAnalysisService>(AzureDocumentAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
