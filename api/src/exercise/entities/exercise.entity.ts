import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


export type ExerciseDocument = Exercise & Document;

@Schema()
export class Exercise {
    @Prop({ required: true })
    name: string;

    @Prop()
    image: string;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
