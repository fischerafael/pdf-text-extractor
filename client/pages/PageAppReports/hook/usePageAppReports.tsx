import { tasksGateway } from "@/client/gateways/api/tasks";
import { useGetClients } from "@/client/hooks/general/useGetClients";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useState } from "react";
import { useQuery } from "react-query";

const initialState = {};

export const usePageAppReports = () => {
  const { presenters: presenterAuth } = useAuthentication();
  const { presenters: presentersClients } = useGetClients(presenterAuth.email);
  const [state, setState] = useState<{
    selectedClient: string;
    daysAgo: number;
  }>({
    selectedClient: "",
    daysAgo: 5,
  });

  const onSelectClient = (id: string) => {
    setState((prev) => ({ ...prev, selectedClient: id }));
  };

  const { data } = useQuery({
    queryKey: ["reports", presenterAuth.email, state.daysAgo],
    queryFn: () =>
      tasksGateway.getTasksUntilDaysAgo(presenterAuth.email, state.daysAgo),
    enabled: !!presenterAuth.email && !!state.selectedClient,
  });

  const stats = {
    totalTasks: data?.reduce((acc, current) => acc + current.count, 0),
    time: data?.reduce(
      (acc, current) =>
        acc +
        current.data?.reduce(
          (acc, curr) => Number(curr?.details?.duration) + acc,
          0
        ),
      0
    ),
  };

  const selectedClientData = presentersClients.data?.data.find(
    (client) => client.details.name === state.selectedClient
  );

  const onDeselectClient = () => {
    setState((prev) => ({ ...prev, selectedClient: "" }));
  };

  const onSelectDays = (value: string) => {
    setState((prev) => ({ ...prev, daysAgo: Number(value) }));
  };

  const columnTitle = data?.map((data) => data.dayOfTheWeek) || [];
  const hoursWorked =
    data?.map(
      (data) =>
        `Total Hours: ${data.data.reduce((total, cur) => {
          return Number(cur.details.duration) || 0 + total;
        }, 0)}` || ""
    ) || [];
  const tasksFormatted =
    data?.map((data) => {
      return data.data;
    }) || [];
  const arrayOfArrayOfTasks = tasksFormatted?.map((task) =>
    task?.map((tk) => tk.details.task)
  );

  const repportData = [
    [
      "Contractor Name",
      "Contractor Email",
      "Company",
      "Company Contact",
      "Company Contact Title",
      "Company Contact Email",
    ],
    [
      presenterAuth.user,
      presenterAuth.email,
      selectedClientData?.details.name,
      `${selectedClientData?.details.firstName} ${selectedClientData?.details.lastName}`,
      `${selectedClientData?.details.role}`,
      `${selectedClientData?.details.email}`,
    ],
    columnTitle,
    ...formatTasks(arrayOfArrayOfTasks || []),
    hoursWorked,
  ];

  const isDownloadEnabled =
    !!presenterAuth.email && !!state.daysAgo && !!state.selectedClient;

  return {
    controllers: { onSelectClient, onDeselectClient, onSelectDays },
    presenters: {
      tasks: data,
      stats,
      clientOptions: [
        { key: "", value: "" },
        ...presentersClients.clientsOptions,
      ],
      selectedClient: state.selectedClient,
      selectedClientData: selectedClientData,
      selectedDaysAgo: state.daysAgo,
      repportData,
      isDownloadEnabled,
    },
  };
};

// const formatData = (
//   data:
//     | {
//         dayOfTheWeek: string;
//         message: string;
//         count: number;
//         data: {
//           id: string;
//           details: {
//             duration: string;
//             createdAt: string;
//             task: string;
//             category: string;
//           };
//         }[];
//       }[]
//     | undefined
// ) => {
//   const columnTitle = data?.map((data) => data.dayOfTheWeek) || [];
//   const hoursWorked =
//     data?.map(
//       (data) =>
//         `Total Hours: ${data.data.reduce((total, cur) => {
//           return Number(cur.details.duration) || 0 + total;
//         }, 0)}` || ""
//     ) || [];
//   const tasksFormatted =
//     data?.map((data) => {
//       return data.data;
//     }) || [];
//   const arrayOfArrayOfTasks = tasksFormatted?.map((task) =>
//     task?.map((tk) => tk.details.task)
//   );

//   const repportData = [
//     [
//       "Contractor Name",
//       "Contractor Email",
//       "Company",
//       "Company Contact",
//       "Company Contact Title",
//       "Company Contact Email",
//     ],
//     [
//       presenterAuth.user,
//       presenterAuth.email,
//       selectedClientData?.details.name,
//       `${selectedClientData?.details.firstName} ${selectedClientData?.details.lastName}`,
//       `${selectedClientData?.details.role}`,
//       `${selectedClientData?.details.email}`,
//     ],
//     columnTitle,
//     ...formatTasks(arrayOfArrayOfTasks || []),
//     hoursWorked,
//   ];
// };

const findLongestCount = (arr: string[][]): number => {
  let longestCount: number = 0;
  for (let ar of arr) {
    longestCount = ar.length > longestCount ? ar.length : longestCount;
  }
  return longestCount;
};

const createInitialMatrix = (maxColumns: number) => {
  let initialMatrix = [];
  for (let i = 0; i < maxColumns; i++) {
    initialMatrix.push([]);
  }
  return initialMatrix;
};

const formatTasks = (arrayOfArrays: string[][]): string[][] => {
  let output: string[][] = [];
  const maxRows = findLongestCount(arrayOfArrays);
  const maxColumns = arrayOfArrays.length;
  output = createInitialMatrix(maxRows);

  for (let indexCol = 0; indexCol < maxRows; indexCol++) {
    for (let indexRow = 0; indexRow < maxColumns; indexRow++) {
      const value = arrayOfArrays[indexRow][indexCol] || "";
      output[indexCol].push(value);
    }
  }

  return output;
};
