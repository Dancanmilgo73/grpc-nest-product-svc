import { Controller, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateProductResponse, DecreaseStockResponse, FindOneResponse, PRODUCT_SERVICE_NAME } from './product.pb';
import { CreateProductRequestDto, DecreaseStockRequestDto, FindOneRequestDto } from './product.dto';

@Controller()
export class ProductController {
  @Inject(ProductService)
  private readonly service: ProductService;

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'createProduct')
  private createProduct(payload: CreateProductRequestDto): Promise<CreateProductResponse> {
    
    return this.service.createProduct(payload);
  }

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'findOne')
  private findOne(payload: FindOneRequestDto): Promise<FindOneResponse> {
    return this.service.findOne(payload);
  }

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'decreaseStock')
  private decreaseStock(payload: DecreaseStockRequestDto): Promise<DecreaseStockResponse> {
    return this.service.decreaseStock(payload);
  }
}
