import type {
  ProjectSummaryResponse,
  StageResponse,
  TaskSummaryResponse,
} from "../types";

export const mockProjects: ProjectSummaryResponse[] = [
  {
    id: 1,
    title: "Website Redesign",
    createdAt: new Date("2025-03-15T10:20:00Z"),
    status: "ARCHIVED",
  },
  {
    id: 2,
    title: "Mobile App MVP",
    createdAt: new Date("2025-04-01T08:00:00Z"),
    status: "DRAFT",
  },
  {
    id: 3,
    title: "Internal Dashboard",
    createdAt: new Date("2024-12-10T14:30:00Z"),
    status: "ACTIVE",
  },
  {
    id: 4,
    title: "Marketing Automation",
    createdAt: new Date("2025-01-22T16:45:00Z"),
    status: "DRAFT",
  },
  {
    id: 5,
    title: "AI Chatbot Integration",
    createdAt: new Date("2025-05-11T09:15:00Z"),
    status: "ACTIVE",
  },
  {
    id: 6,
    title: "Customer Survey Platform",
    createdAt: new Date("2024-11-05T12:00:00Z"),
    status: "ARCHIVED",
  },
  {
    id: 7,
    title: "E-commerce Expansion",
    createdAt: new Date("2025-06-01T11:25:00Z"),
    status: "ACTIVE",
  },
  {
    id: 8,
    title: "Data Warehouse Migration",
    createdAt: new Date("2025-02-18T13:10:00Z"),
    status: "DRAFT",
  },
  {
    id: 9,
    title: "Employee Training Portal",
    createdAt: new Date("2024-10-20T07:30:00Z"),
    status: "ARCHIVED",
  },
  {
    id: 10,
    title: "New Branding Initiative",
    createdAt: new Date("2025-06-15T15:55:00Z"),
    status: "ACTIVE",
  },
];

export const mockTasks: TaskSummaryResponse[] = [
  {
    id: 201,
    title: "Собрать требования",
    createdAt: new Date("2025-06-01T08:00:00Z"),
    priority: "HIGH",
    dueDate: new Date("2025-06-30T23:59:59Z"),
    attachmentCount: 3,
    commentsCount: 5,
  },
  {
    id: 202,
    title: "Подготовить дизайн",
    createdAt: new Date("2025-06-05T10:15:00Z"),
    priority: "MEDIUM",
    dueDate: new Date("2025-07-05T23:59:59Z"),
    attachmentCount: 2,
    commentsCount: 1,
  },
  {
    id: 203,
    title: "Разработать прототип",
    createdAt: new Date("2025-06-10T09:30:00Z"),
    priority: "CRITICAL",
    dueDate: null,
    attachmentCount: 0,
    commentsCount: 8,
  },
  {
    id: 204,
    title: "Провести тестирование",
    createdAt: new Date("2025-06-20T14:00:00Z"),
    priority: "LOW",
    dueDate: new Date("2025-07-15T12:00:00Z"),
    attachmentCount: 1,
    commentsCount: 0,
  },
  {
    id: 205,
    title: "Оценка целесообразности",
    createdAt: new Date("2025-06-02T09:00:00Z"),
    priority: "MEDIUM",
    dueDate: new Date("2025-06-25T23:59:59Z"),
    attachmentCount: 1,
    commentsCount: 2,
  },
  {
    id: 206,
    title: "Исследование рынка",
    createdAt: new Date("2025-06-03T11:20:00Z"),
    priority: "LOW",
    dueDate: new Date("2025-06-20T23:59:59Z"),
    attachmentCount: 0,
    commentsCount: 3,
  },
  {
    id: 207,
    title: "Настройка CI/CD",
    createdAt: new Date("2025-06-12T13:40:00Z"),
    priority: "HIGH",
    dueDate: new Date("2025-07-10T23:59:59Z"),
    attachmentCount: 2,
    commentsCount: 4,
  },
  {
    id: 208,
    title: "Разработка API",
    createdAt: new Date("2025-06-14T10:00:00Z"),
    priority: "CRITICAL",
    dueDate: new Date("2025-07-20T23:59:59Z"),
    attachmentCount: 1,
    commentsCount: 5,
  },
  {
    id: 209,
    title: "Интеграция с БД",
    createdAt: new Date("2025-06-16T15:00:00Z"),
    priority: "HIGH",
    dueDate: null,
    attachmentCount: 3,
    commentsCount: 1,
  },
  {
    id: 210,
    title: "Юзабилити-тестирование",
    createdAt: new Date("2025-06-21T09:30:00Z"),
    priority: "MEDIUM",
    dueDate: new Date("2025-07-18T23:59:59Z"),
    attachmentCount: 0,
    commentsCount: 2,
  },
  {
    id: 211,
    title: "Регрессионное тестирование",
    createdAt: new Date("2025-06-22T10:45:00Z"),
    priority: "LOW",
    dueDate: null,
    attachmentCount: 0,
    commentsCount: 0,
  },
  {
    id: 212,
    title: "Тестирование API",
    createdAt: new Date("2025-06-23T12:00:00Z"),
    priority: "HIGH",
    dueDate: new Date("2025-07-22T23:59:59Z"),
    attachmentCount: 1,
    commentsCount: 3,
  },
  {
    id: 213,
    title: "Презентация руководству",
    createdAt: new Date("2025-06-25T10:30:00Z"),
    priority: "LOW",
    dueDate: new Date("2025-07-01T23:59:59Z"),
    attachmentCount: 1,
    commentsCount: 1,
  },
  {
    id: 214,
    title: "Подготовка документации",
    createdAt: new Date("2025-06-26T11:00:00Z"),
    priority: "MEDIUM",
    dueDate: null,
    attachmentCount: 0,
    commentsCount: 2,
  },
  {
    id: 215,
    title: "Обучение сотрудников",
    createdAt: new Date("2025-06-27T14:00:00Z"),
    priority: "HIGH",
    dueDate: new Date("2025-07-10T23:59:59Z"),
    attachmentCount: 2,
    commentsCount: 4,
  },
];

export const mockStageTasks: {
  stage: StageResponse;
  tasks: TaskSummaryResponse[];
}[] = [
  {
    stage: { id: 1, title: "Идея", color: "bg-gray-400" },
    tasks: [mockTasks[0], mockTasks[4], mockTasks[5]], // Идея
  },
  {
    stage: { id: 2, title: "В разработке", color: "bg-blue-400" },
    tasks: [
      mockTasks[1],
      mockTasks[2],
      mockTasks[6],
      mockTasks[7],
      mockTasks[8],
    ], // В разработке
  },
  {
    stage: { id: 3, title: "Тестирование", color: "bg-yellow-400" },
    tasks: [mockTasks[3], mockTasks[9], mockTasks[10], mockTasks[11]], // Тестирование
  },
  {
    stage: { id: 4, title: "Готово", color: "bg-green-400" },

    tasks: [mockTasks[12], mockTasks[13], mockTasks[14]], // Готово
  },
  {
    stage: { id: 5, title: "В продакшене", color: "bg-red-400" },
    tasks: [], // В продакшене (можно добавить по желанию)
  },
];
