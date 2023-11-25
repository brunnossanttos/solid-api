import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserControler {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(resquest: Request, response: Response): Promise<Response> {
    const { name, email, password } = resquest.body;

    try {
      await this.createUserUseCase.execute({ name, email, password });

      return response.status(201).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}