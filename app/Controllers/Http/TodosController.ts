import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Todo from "App/Models/Todo";

export default class TodosController {
  public async index({ request } : HttpContextContract) {

    const page = request.input('page', 1);

    return Todo.query().paginate(page, 10);
  }

  public async store({ request, response }: HttpContextContract) {
    const todo = await Todo.create({
      title: request.input("title"),
      is_completed: false,
    });
    return response.status(201).send(todo);
  }

  public async update({ request, response, params }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id);
    todo.is_completed = request.input("is_completed");
    todo.save();
    return response.status(200).send(todo);
  }
}
