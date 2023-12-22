 * Изучить работу декораторов.
 * Написать декоратор класса `Injectable({key: string})`, который создает экземпляр класса и помещает его в список (Map) инстансов по переданному ключу. 
Список инстансов можно передавать в декоратор или использовать внешнюю глобальную переменную.
 * Написать декоратор поля `Inject(key)`, который ищет по ключу в списке экземпляр класса и присваивает его полю. 

Пример использования: 
```
@Injectable({key: "TestInjectable"})
class TestInjectable {}

class TestInject {
 @Inject("TestInjectable")
 public testedField: TestInjectable;

 public print(): void {
  console.log(this.testedField);
 }
}
```
