import type { Stage } from "../types";

export const mockStages: Stage[] = [
  {
    id: 1,
    title: "Backlog",
    items: [
      {
        id: 1,
        title: "A Very long .... Research feature requests",
        description: "Analyze user feedback and support tickets.",
      },
      {
        id: 2,
        title: "Review competitor tools",
        description: "Compare features with competitors.",
      },
      {
        id: 3,
        title: "Team brainstorming session",
        description: "Hold a meeting to discuss new ideas.",
      },
    ],
  },
  {
    id: 2,
    title: "To Do",
    items: [
      {
        id: 4,
        title: "Create wireframes",
        description: "Design wireframes for the new dashboard.",
      },
      {
        id: 5,
        title: "Set up project board",
        description: "Initialize the Kanban board for tracking tasks.",
      },
    ],
  },
  {
    id: 3,
    title: "In Progress",
    items: [
      {
        id: 6,
        title: "Implement login feature",
        description: "Add authentication with JWT.",
      },
      {
        id: 7,
        title: "Write unit tests",
        description: "Add tests for login and signup components.",
      },
      {
        id: 8,
        title: "Develop user profile UI",
        description: "Create the front-end for user profiles.",
      },
      {
        id: 9,
        title: "API integration",
        description: "Connect the front-end with the backend API.",
      },
      {
        id: 10,
        title: "Set up CI/CD pipeline",
        description: "Configure GitHub Actions for deployment.",
      },
    ],
  },
  {
    id: 4,
    title: "Review",
    items: [
      {
        id: 11,
        title: "Code review: Auth module",
        description: "Ensure code quality and standards are met.",
      },
      {
        id: 12,
        title: "UX Review",
        description: "Evaluate the usability of the new profile page.",
      },
      {
        id: 13,
        title: "Accessibility audit",
        description: "Test and improve accessibility features.",
      },
    ],
  },
  {
    id: 5,
    title: "Done",
    items: [
      {
        id: 14,
        title: "Project kickoff",
        description: "Initial planning and team onboarding.",
      },
      {
        id: 15,
        title: "Setup dev environment",
        description: "Configured tools and environments for all team members.",
      },
      {
        id: 16,
        title: "Initial repo structure",
        description: "Created folder structure and basic setup.",
      },
      {
        id: 17,
        title: "Setup linting",
        description: "Added ESLint and Prettier.",
      },
      {
        id: 18,
        title: "Configured routing",
        description: "Set up basic routes for app navigation.",
      },
      {
        id: 19,
        title: "Deployed MVP",
        description: "Published first working version to staging.",
      },
      {
        id: 20,
        title: "Completed documentation",
        description: "Wrote usage instructions and API docs.",
      },
    ],
  },
];
