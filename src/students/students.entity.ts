import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Student {
    @Prop({ required: true })
    name: string;

    @Prop()
    identification: string;

    @Prop()
    age: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);