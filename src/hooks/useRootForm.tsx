import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerRenderProps, useController, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { z } from "zod";

const rootFormSchema = z.object({
  name: z.string(),
  email: z.string().email().min(4, "E-mail address too small!"),
});

type RootForm = z.infer<typeof rootFormSchema>;

export interface RootFormType {
  onSubmit: (data: RootForm) => boolean;
  handleSubmit: any;
  fields: {
    name: ControllerRenderProps<RootForm, "name">;
    email: ControllerRenderProps<RootForm, "email">;
  };
}

export function useRootForm(): RootFormType {
  const { control, handleSubmit } = useForm<RootForm>({
    resolver: zodResolver(rootFormSchema),
  });

  const { field: emailField } = useController({
    control,
    name: "email",
    defaultValue: "",
  });

  const { field: nameField } = useController({
    control,
    name: "name",
    defaultValue: "",
  });

  function onSubmit(data: RootForm) {
    try {
      rootFormSchema.parse(data);
      Alert.alert("Dados recebidos!", `${data.name} - ${data.email}`);
      return true;
    } catch (error: any) {
      Alert.alert("Erro ao receber os dados!", error.message);
      return false;
    }
  }

  return {
    onSubmit,
    handleSubmit,
    fields: {
      name: nameField,
      email: emailField,
    },
  };
}
