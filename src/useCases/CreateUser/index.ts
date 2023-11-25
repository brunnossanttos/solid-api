import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserControler } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUsersRepository = new PostgresUsersRepository();
const mailTrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
);

const createUserControler = new CreateUserControler(createUserUseCase);

export { createUserUseCase, createUserControler };
