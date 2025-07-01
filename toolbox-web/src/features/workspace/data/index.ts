import type { ListSummaryResponse } from "../types/list";
import type { TaskSummaryResponse } from "../types/task";

export const mockLists: ListSummaryResponse[] = [
  { id: 1, title: "К выполнению" },
  { id: 2, title: "В процессе" },
  { id: 3, title: "Готово" },
];

export const mockTasks: TaskSummaryResponse[] = [
  // К выполнению (id: 1)
  {
    id: 101,
    title: "Настроить репозиторий",
    priority: "MEDIUM",
    dueDate: new Date("2025-07-05"),
    listId: 1,
  },
  {
    id: 102,
    title: "Создать структуру проекта",
    priority: "HIGH",
    dueDate: new Date("2025-07-06"),
    listId: 1,
  },
  {
    id: 103,
    title: "Сформулировать требования",
    priority: "LOW",
    dueDate: null,
    listId: 1,
  },
  {
    id: 104,
    title: "Подготовить документацию",
    priority: "MEDIUM",
    dueDate: new Date("2025-07-10"),
    listId: 1,
  },

  // В процессе (id: 2)
  {
    id: 201,
    title: "Разработка компонентов UI",
    priority: "HIGH",
    dueDate: new Date("2025-07-07"),
    listId: 2,
  },
  {
    id: 202,
    title: "Интеграция с API",
    priority: "CRITICAL",
    dueDate: new Date("2025-07-08"),
    listId: 2,
  },
  {
    id: 203,
    title: "Тестирование функционала",
    priority: "MEDIUM",
    dueDate: undefined,
    listId: 2,
  },
  {
    id: 204,
    title: "Реализация логики авторизации",
    priority: "CRITICAL",
    dueDate: new Date("2025-07-09"),
    listId: 2,
  },

  // Готово (id: 3)
  {
    id: 301,
    title: "Сборка проекта",
    priority: "LOW",
    dueDate: new Date("2025-07-01"),
    listId: 3,
  },
  {
    id: 302,
    title: "Загрузка на staging",
    priority: "HIGH",
    dueDate: null,
    listId: 3,
  },
  {
    id: 303,
    title: "Обзор кода",
    priority: "MEDIUM",
    dueDate: new Date("2025-06-30"),
    listId: 3,
  },
  {
    id: 304,
    title: "Исправление багов",
    priority: "LOW",
    dueDate: undefined,
    listId: 3,
  },
  {
    id: 305,
    title: "Обновление зависимостей",
    priority: "LOW",
    dueDate: new Date("2025-07-02"),
    listId: 3,
  },
];
