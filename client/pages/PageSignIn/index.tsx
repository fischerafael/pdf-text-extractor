import { Button } from "@/client/components/Button";
import { ContentVStack } from "@/client/components/ContentVStack";
import { Header } from "@/client/components/Header";
import { InputText } from "@/client/components/InputText";
import { Logo } from "@/client/components/Logo";
import { ContainerPagePublic } from "@/client/components/PublicPageContainer";
import { usePageSignIn } from "./hook";
import { Text } from "@/client/components/Text";

export const PageSignIn = () => {
  const { controllers, presenters } = usePageSignIn();

  return (
    <ContainerPagePublic>
      <Header
        actionSlot={
          <Button onClick={controllers.handleBackToHome}>Back to Home</Button>
        }
        logoSlot={<Logo />}
      />
      <ContentVStack
        as="form"
        px="0"
        maxW="container.sm"
        minH="40vh"
        justify="center"
      >
        <Text variant="h2">Log In</Text>
        <InputText label="Email" type="email" />
        <InputText label="Password" type="password" />
        <Button alignSelf="flex-end">Log In</Button>
      </ContentVStack>
    </ContainerPagePublic>
  );
};
