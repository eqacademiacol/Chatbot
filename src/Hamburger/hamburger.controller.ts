import { Controller, Get } from "@nestjs/common";

@Controller('hamburger')
export class HamburgerController {
    @Get()
    getHamburger():string{
        return 'I like burger king';
    }
}