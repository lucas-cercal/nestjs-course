import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll(@Res() response: any) {
    return response.status(200).send('Listagem de cursos');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }

  @Post('add')
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') body: object) {
    return body;
  }
}
