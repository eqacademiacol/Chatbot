import { Module } from '@nestjs/common';
import { HamburgerController } from './Hamburger/hamburger.controller';
import { HamburgerModule } from './Hamburger/hamburger.module';
@Module({
  imports: [HamburgerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
