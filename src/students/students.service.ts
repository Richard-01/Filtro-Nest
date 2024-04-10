import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Student } from "./students.entity";


@Injectable()
export class StudentsService {
    constructor(@InjectModel(Student.name) private readonly studentModel: Model<Student>) { }

    async findAll(){
        return await this.studentModel.find().exec();
    }

    async findOne(id: string) {
        return await this.studentModel.findById(id).exec();
    }

    async create(student: Student) {
        const newStudent = new this.studentModel(student);
        return await newStudent.save();
    }

    async update(id: string, student: Student) {
        return await this.studentModel.findByIdAndUpdate(id, student).exec();
    }

    async delete(id: string) {
        return await this.studentModel.findByIdAndDelete(id).exec();
    }
}
