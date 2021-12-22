import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToDos = async (value) => {
  try {
    await AsyncStorage.setItem("@todo", value);
  } catch (e) {
    alert("Error to save todos:" + e);
  }
};

export const getToDos = async () => {
  try {
    return await AsyncStorage.getItem("@todo");
  } catch (e) {
    alert("Error to get todos:" + e);
    return [];
  }
};
