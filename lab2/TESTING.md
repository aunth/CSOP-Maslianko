# Інструкція з тестування завдань

## 2.1.2. Тест: Перевірка типу Worker без id

**Що тестуємо:** TypeScript має показати помилку, якщо в об'єкті Worker немає поля `id`.

**Як тестувати:**
1. Відкрийте `lab2/src/workers.ts`
2. Тимчасово видаліть поле `id` з одного з об'єктів в `getAllWorkers()`:
   ```typescript
   {
     // id: 1,  // <-- видаліть цей рядок
     name: "John",
     surname: "Doe",
     available: true,
     salary: 1000,
   }
   ```
3. TypeScript покаже помилку: `Property 'id' is missing in type...`
4. Поверніть `id` назад

**Альтернатива:** Запустіть `npm run lab2:test` та подивіться на розділ "Тест 2.1.2"

---

## 2.5.2. Тест: Створення ref та виклик printItem()

**Що тестуємо:** Створення об'єкта `ReferenceItem` та виклик методу `printItem()`.

**Як тестувати:**
1. Відкрийте `lab2/src/classes.ts`
2. Тимчасово змініть рядок 21:
   ```typescript
   // Було:
   export abstract class ReferenceItem {
   
   // Стало:
   export class ReferenceItem {
   ```
3. Тимчасово закоментуйте рядок 43:
   ```typescript
   // abstract printCitation(): void;
   ```
4. Відкрийте `lab2/src/test-tasks.ts`
5. Розкоментуйте рядки 35-36:
   ```typescript
   const ref = new ReferenceItem("TypeScript Guide", 2023);
   ref.printItem();
   ```
6. Запустіть: `npm run lab2:test`
7. **ВАЖЛИВО:** Поверніть все назад (зробіть клас абстрактним знову)

**Очікуваний результат:**
```
Creating a new ReferenceItem ...
TypeScript Guide was published in 2023
Department: Default Department
```

---

## 2.5.4.c. Тест: Геттер/сетер publisher

**Що тестуємо:** Геттер має повертати значення в верхньому регістрі.

**Як тестувати:**
1. Зробіть `ReferenceItem` неабстрактним (як у попередньому тесті)
2. В `test-tasks.ts` розкоментуйте рядки 50-53:
   ```typescript
   const ref = new ReferenceItem("TypeScript Guide", 2023);
   ref.publisher = "O'Reilly Media";
   console.log("Publisher:", ref.publisher);
   ```
3. Запустіть: `npm run lab2:test`

**Очікуваний результат:**
```
Publisher: O'REILLY MEDIA
```

**Перевірка:** Значення має бути в верхньому регістрі, навіть якщо встановлено в нижньому.

---

## 2.5.5. Тест: Статична властивість department

**Що тестуємо:** Статична властивість доступна без створення екземпляра.

**Як тестувати:**
1. Запустіть: `npm run lab2:test`
2. Подивіться на розділ "Тест 2.5.5"

**Або вручну:**
```typescript
// Доступ до статичної властивості без створення об'єкта
console.log(ReferenceItem.department);

// Або через екземпляр Encyclopedia
const refBook = new Encyclopedia("Test", 2023, 1);
refBook.printItem(); // Виведе department
```

---

## 2.6.3. Тест: Доступ до protected year

**Що тестуємо:** Властивість `year` доступна в класі-нащадку через модифікатор `protected`.

**Як тестувати:**
1. Запустіть: `npm run lab2:test`
2. Подивіться на розділ "Тест 2.6.3"

**Перевірка помилки:**
1. Відкрийте `lab2/src/classes.ts`
2. Тимчасово змініть `protected year` на `private year` (рядок 22)
3. TypeScript покаже помилку в `Encyclopedia.printItem()`:
   ```
   Property 'year' is private and only accessible within class 'ReferenceItem'
   ```
4. Поверніть `protected` назад

---

## 2.7.1. Тест: Абстрактний клас не можна інстанціювати

**Що тестуємо:** Не можна створити екземпляр абстрактного класу.

**Як тестувати:**
1. Відкрийте `lab2/src/classes.ts`
2. Переконайтеся, що `ReferenceItem` абстрактний (рядок 21)
3. Спробуйте розкоментувати в `1_1.ts` рядок 56:
   ```typescript
   const ref = new ReferenceItem("Test", 2023);
   ```
4. TypeScript покаже помилку:
   ```
   Cannot create an instance of an abstract class.
   ```

---

## 2.7.2. Тест: Абстрактний метод має бути реалізований

**Що тестуємо:** Клас-нащадок має реалізувати всі абстрактні методи.

**Як тестувати:**
1. Відкрийте `lab2/src/classes.ts`
2. Тимчасово закоментуйте метод `printCitation()` в `Encyclopedia` (рядки 57-59)
3. TypeScript покаже помилку:
   ```
   Non-abstract class 'Encyclopedia' does not implement inherited abstract member 'printCitation'
   ```
4. Розкоментуйте метод назад

---

## Швидкий тест всіх завдань

Запустіть:
```bash
npm run lab2:test
```

Це виконає всі автоматичні тести, які можна виконати без зміни коду.

---

## Важливо!

Після тестування завдань 2.5.2 та 2.5.4.c **обов'язково поверніть** `ReferenceItem` до абстрактного класу, інакше завдання 2.7 не буде працювати правильно!

