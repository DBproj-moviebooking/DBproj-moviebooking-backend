import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from './seat.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Seat])],
})
export class SeatModule {}
