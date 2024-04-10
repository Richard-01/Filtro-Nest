import { 
    Controller,
    Post,
    Body,
    Get,
    Delete,
    Param, 
    Put} 
from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Post()
    async create(@Body() students: any ){
        return await this.studentsService.create(students);
    }

    @Get()
    async findAll(){
        return await this.studentsService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: string){
        return await this.studentsService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() student: any){
        return await this.studentsService.update(id, student);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.studentsService.delete(id);
    }

}
