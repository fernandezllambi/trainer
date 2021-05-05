import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Exercise } from "src/exercise/entities/exercise.entity";
import * as mongoose from 'mongoose';

export type WorkoutDocument = Workout & Document;

@Schema()
export class Workout {
    @Prop({ required: true })
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' })
    exercise: Exercise;

    @Prop({ required: true })
    repetitions: number;

    @Prop()
    load: number;

    @Prop()
    series: number;
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
