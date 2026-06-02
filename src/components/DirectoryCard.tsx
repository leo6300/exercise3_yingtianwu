import React from "react";
import {
  DimensionValue,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Directory } from "../types";

type Props = {
  directory: Directory;
  cardWidth: DimensionValue;
  onPress: () => void;
};

export function DirectoryCard({ directory, cardWidth, onPress }: Props) {
  const latestMessage = directory.messages[0]?.text ?? "No messages available";

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        { width: cardWidth },
        pressed && styles.cardPressed,
      ]}
      onPress={onPress}
    >
      <View style={[styles.iconCircle, { backgroundColor: directory.color }]}>
        <Image
          source={directory.image}
          style={styles.iconImage}
          resizeMode="contain"
        />
      </View>

      <Text style={[styles.title, { color: directory.textColor }]}>
        {directory.title}
      </Text>

      <Text style={styles.description}>{directory.description}</Text>

      <View style={styles.countBadge}>
        <Text style={styles.countText}>{directory.messages.length} messages</Text>
      </View>

      <Text numberOfLines={2} style={styles.previewText}>
        Latest: {latestMessage}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 7 },
    elevation: 5,
  },
  cardPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.97 }],
  },
  iconCircle: {
    width: 86,
    height: 86,
    borderRadius: 43,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    overflow: "hidden",
  },
  iconImage: {
    width: 58,
    height: 58,
  },
  title: {
    fontSize: 21,
    fontWeight: "900",
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
    minHeight: 34,
    lineHeight: 17,
  },
  countBadge: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: "#eef2ff",
  },
  countText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#374151",
  },
  previewText: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 17,
    color: "#6b7280",
    textAlign: "center",
  },
});