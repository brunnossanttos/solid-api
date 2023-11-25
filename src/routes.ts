import { Router } from "express";
import { createUserControler } from "./useCases/CreateUser";

const router = Router();

router.post("/users", (request, response) => {
  return createUserControler.handle(request, response);
});

export { router };
