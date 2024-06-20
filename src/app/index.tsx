import { useRootForm } from "@/hooks/useRootForm";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Root() {
  const { fields, onSubmit, handleSubmit } = useRootForm();

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-zinc-950">
      <View className="flex-1 w-full p-12 justify-center space-y-4">
        <View className="flex space-y-2">
          <Text className="text-lg text-white font-bold">Nome:</Text>
          <TextInput
            value={fields.name.value}
            onChangeText={fields.name.onChange}
            placeholder="Digite seu nome..."
            className="w-full bg-zinc-900 p-4 text-lg text-white"
            placeholderTextColor="#FFF"
          />
        </View>
        <View className="flex space-y-2">
          <Text className="text-lg text-white font-bold">Email:</Text>
          <TextInput
            value={fields.email.value}
            onChangeText={fields.email.onChange}
            placeholder="Digite seu email..."
            className="w-full bg-zinc-900 p-4 text-lg text-white"
            placeholderTextColor="#FFF"
          />
        </View>
        <TouchableOpacity
          className="flex items-center justify-center p-4 w-full bg-emerald-400"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="text-lg text-zinc-900 uppercase font-bold">
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
