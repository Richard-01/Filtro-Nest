import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { StudentsModule } from "./students/students.module";


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://richardmontoyaa1:3147887840@cluster0.p2vchmy.mongodb.net/FiltroNest'
    ),
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
