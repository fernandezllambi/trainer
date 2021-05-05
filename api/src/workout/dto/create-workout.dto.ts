import { ApiProperty } from '@nestjs/swagger';
import { Exercise } from 'src/exercise/entities/exercise.entity';

export class CreateWorkoutDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    exercise: Exercise;

    @ApiProperty()
    repetitions: number;

    @ApiProperty()
    load: number;

    @ApiProperty()
    series: number;
}
