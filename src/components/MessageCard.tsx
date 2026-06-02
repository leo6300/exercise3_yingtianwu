import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Message } from "../types";

type Props = {
  message: Message;
  index: number;
};

export function MessageCard({ message, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <View style={[styles.card, isEven ? styles.leftCard : styles.rightCard]}>
      <View style={styles.header}>
        <Text style={styles.sender}>{message.sender}</Text>
        <Text style={styles.time}>{message.time}</Text>
      </View>

      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  leftCard: {
    alignSelf: "flex-start",
    width: "88%",
    backgroundColor: "#ffffff",
  },
  rightCard: {
    alignSelf: "flex-end",
    width: "88%",
    backgroundColor: "#f0f9ff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },
  sender: {
    fontSize: 13,
    fontWeight: "900",
    color: "#2563eb",
  },
  time: {
    fontSize: 12,
    color: "#9ca3af",
  },
  messageText: {
    fontSize: 16,
    lineHeight: 23,
    color: "#111827",
  },
});
