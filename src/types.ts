import { ImageSourcePropType } from "react-native";

export type Message = {
  id: string;
  sender: string;
  text: string;
  time: string;
};

export type Directory = {
  id: string;
  title: string;
  image: ImageSourcePropType;
  color: string;
  textColor: string;
  description: string;
  messages: Message[];
};