import { Module } from '@nestjs/common';
import { HamburgerController } from './Hamburger/hamburger.controller';
import { HamburgerModule } from './Hamburger/hamburger.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [HamburgerModule, AppModule],
  controllers: [AppController, HamburgerController],
  providers: [AppService],
})
export class AppModule {}
