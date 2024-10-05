import { Module } from "@nestjs/common";
import { HamburgerController } from "./hamburger.controller";

@Module({
    controllers:[HamburgerController],
})
export class HamburgerModule{}