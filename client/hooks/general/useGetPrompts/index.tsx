import { apiGateway } from "@/client/gateways/api";
import { IPrompt } from "@/client/interfaces";
import { useQuery } from "react-query";

interface Input {
  access?: string;
  title?: string;
  departmentIds?: number[];
  categoryIds?: number[];
  aiModelIds?: number[];
  authorsIds?: number[];
}

interface Output {
  prompts: IPrompt[];
}

export const useGetPrompts = ({ access }: Input): Output => {
  const { data } = useQuery(
    ["user", access],
    async () => {
      const data = await apiGateway.get.user({ access: access! });
      return data;
    },
    {
      enabled: !!access,
    }
  );
  return {
    prompts: [],
  };
};

const HARD_CODED_PROMPTS: IPrompt[] = [
  {
    id: "1",
    title: "Create Unit Tests for Redux Reducers",
    version: "1.0",
    description:
      "Develop unit tests for Redux reducers to ensure data manipulation functions correctly.",
    departments: ["Tech", "Quality Assurance"],
    categories: ["Technology", "Testing"],
    aiModel: "ReduxAI",
    author: "Ana Silva",
  },
  {
    id: "2",
    title: "Optimize Sales Funnel for Increased Conversions",
    version: "1.2",
    description:
      "Improve the sales funnel to boost conversion rates and enhance overall sales performance.",
    departments: ["Sales", "Marketing"],
    categories: ["Sales", "Marketing"],
    aiModel: "SalesOptimizationAI",
    author: "Carlos Oliveira",
  },
  {
    id: "3",
    title: "Implement Authentication in React Native App",
    version: "2.1",
    description:
      "Integrate secure authentication mechanisms into a React Native application for enhanced user security.",
    departments: ["Tech", "Security"],
    categories: ["Technology", "Security"],
    aiModel: "AuthReactNativeAI",
    author: "Fernanda Santos",
  },
  {
    id: "4",
    title: "Enhance Customer Support Chatbot",
    version: "1.5",
    description:
      "Improve the capabilities of the customer support chatbot to provide more accurate and helpful responses.",
    departments: ["Tech", "Customer Support"],
    categories: ["Technology", "Customer Service", "AI"],
    aiModel: "ChatbotEnhancementAI",
    author: "Ricardo Lima",
  },
  {
    id: "5",
    title: "Create Dashboard for Sales Analytics",
    version: "1.0",
    description:
      "Design and implement a dashboard for in-depth sales analytics to aid in data-driven decision-making.",
    departments: ["Tech", "Sales", "Analytics"],
    categories: ["Technology", "Sales", "Analytics"],
    aiModel: "AnalyticsDashboardAI",
    author: "Isabela Costa",
  },
  {
    id: "6",
    title: "Implement Dark Mode in Mobile App",
    version: "1.3",
    description:
      "Add a dark mode feature to the mobile app for improved user experience in low-light environments.",
    departments: ["Tech", "Design"],
    categories: ["Technology", "Design"],
    aiModel: "DarkModeImplementationAI",
    author: "Lucas Oliveira",
  },
  {
    id: "7",
    title: "Optimize Database Queries for Performance",
    version: "2.0",
    description:
      "Review and optimize database queries to enhance the overall performance of the application.",
    departments: ["Tech", "Database"],
    categories: ["Technology", "Database"],
    aiModel: "DatabaseOptimizationAI",
    author: "Juliana Mendes",
  },
  {
    id: "8",
    title: "Create Training Module for Sales Team",
    version: "1.1",
    description:
      "Develop a comprehensive training module to empower the sales team with the latest product knowledge and sales techniques.",
    departments: ["Sales", "Training"],
    categories: ["Sales", "Training"],
    aiModel: "SalesTrainingAI",
    author: "Gabriel Pereira",
  },
  {
    id: "9",
    title: "Implement Two-Factor Authentication in Web App",
    version: "1.2",
    description:
      "Enhance the security of the web application by implementing two-factor authentication for user accounts.",
    departments: ["Tech", "Security"],
    categories: ["Technology", "Security"],
    aiModel: "TwoFactorAuthAI",
    author: "Elena Costa",
  },
  {
    id: "10",
    title: "Improve Cross-Browser Compatibility of Website",
    version: "1.4",
    description:
      "Address and resolve issues related to cross-browser compatibility to ensure a consistent user experience across different web browsers.",
    departments: ["Tech", "Web Development"],
    categories: ["Technology", "Web Development"],
    aiModel: "CrossBrowserCompatibilityAI",
    author: "Mateus Silva",
  },
];
