import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Workout, WorkoutDocument } from './entities/workout.entity';

@Injectable()
export class WorkoutService {

  constructor(@InjectModel(Workout.name) private workoutModel: Model<WorkoutDocument>) { }

  create(createWorkoutDto: CreateWorkoutDto) {
    const createdEntity = new this.workoutModel(createWorkoutDto);
    return createdEntity.save();
  }

  findAll() {
    return this.workoutModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} workout`;
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `This action updates a #${id} workout`;
  }

  remove(id: number) {
    return `This action removes a #${id} workout`;
  }
}
