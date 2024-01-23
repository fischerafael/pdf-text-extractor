import { useGetAIModels } from "../../general/useGetAIModels";
import { useGetAuthors } from "../../general/useGetAuthors";
import { useGetCategories } from "../../general/useGetCategories";
import { useGetDepartments } from "../../general/useGetDepartments";
import { useGetUser } from "../../general/useGetUser";
import { useAuthentication } from "../useAuthenticationGlobal";

export const useGlobalCache = () => {
  const { presenters } = useAuthentication();
  const { email, fullName } = useGetUser({ access: presenters.access });
  const { options: departmentOptions } = useGetDepartments({
    access: presenters.access,
  });

  const { options: aiModelOptions } = useGetAIModels({
    access: presenters.access,
  });
  const { options: authorOptions } = useGetAuthors({
    access: presenters.access,
  });

  return {
    presenters: {
      userEmail: email,
      userFullName: fullName,
      departmentOptions,

      aiModelOptions,
      authorOptions,
    },
    controllers: {},
  };
};
