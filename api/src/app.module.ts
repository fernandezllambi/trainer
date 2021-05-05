import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutModule } from './workout/workout.module';
import { ExerciseModule } from './exercise/exercise.module';
import { PersonModule } from './person/person.module';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://trainer-user:8mU3nP2FMI0apuIB@cluster0.xickx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), WorkoutModule, ExerciseModule, PersonModule, PlanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
