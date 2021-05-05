import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Person } from "src/person/entities/person.entity";
import * as mongoose from 'mongoose';
import { Workout } from "src/workout/entities/workout.entity";

export type PlanDocument = Plan & Document;

@Schema()
export class Plan {
    @Prop({ required: true })
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Person' })
    person: Person;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }] })
    workouts: Workout[];
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
