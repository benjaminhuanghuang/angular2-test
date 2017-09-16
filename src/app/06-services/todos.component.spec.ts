import { TodosComponent } from "./todos.component";
import { TodoService } from "./todo.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/observable/empty";

describe("TodosComponent", () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it("Should set todos property with the items returned from the server", () => {
    let todos = [1, 2, 3];
    spyOn(service, "getTodos").and.callFake(() => {
      return Observable.from([todos]);
    });

    component.ngOnInit();
    expect(component.todos.length).toBeGreaterThan(0);
  });

  it("Should call the server to save the changes when a new todo item is added", () => {
    let spy = spyOn(service, "add").and.callFake(() => {
      return Observable.empty();
    });

    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it("Should add the new todo returned from the server", () => {
    let todo = { id: 1 };
    let spy = spyOn(service, "add").and.callFake(() => {
      return Observable.from([todo]);
    });

    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });
});
