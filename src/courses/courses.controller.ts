import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
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

  @Put(':id')
  update(@Param('id') id: string) {
    return `Atualização do curso #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Exclusão do curso #${id}`;
  }
}
