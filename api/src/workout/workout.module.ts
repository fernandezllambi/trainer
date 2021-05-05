import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Workout, WorkoutSchema } from './entities/workout.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Workout.name, schema: WorkoutSchema }])],
  controllers: [WorkoutController],
  providers: [WorkoutService]
})
export class WorkoutModule { }
