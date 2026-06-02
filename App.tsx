import React, { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import { DirectoryCard } from "./src/components/DirectoryCard";
import { MessageCard } from "./src/components/MessageCard";
import { directories } from "./src/data/directories";
import { Directory } from "./src/types";

export default function App() {
  const [selectedDirectory, setSelectedDirectory] = useState<Directory | null>(
    null
  );

  const { width } = useWindowDimensions();

  const numColumns = useMemo(() => {
    if (width >= 900) {
      return 3;
    }

    return 2;
  }, [width]);

  const cardWidth = numColumns === 3 ? "31%" : "47%";

  if (selectedDirectory) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#f7fbff" />

        <View style={styles.screen}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedDirectory(null)}
          >
            <Text style={styles.backButtonText}>← Back to Directories</Text>
          </TouchableOpacity>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.detailContent}
          >
            <View style={styles.detailHeader}>
              <View
                style={[
                  styles.detailIconCircle,
                  { backgroundColor: selectedDirectory.color },
                ]}
              >
                <Image
                  source={selectedDirectory.image}
                  style={styles.detailIconImage}
                  resizeMode="contain"
                />
              </View>

              <Text
                style={[
                  styles.detailTitle,
                  { color: selectedDirectory.textColor },
                ]}
              >
                {selectedDirectory.title}
              </Text>

              <Text style={styles.detailDescription}>
                {selectedDirectory.description}
              </Text>

              <Text style={styles.detailCount}>
                {selectedDirectory.messages.length} stored messages
              </Text>
            </View>

            <View style={styles.messageSection}>
              <Text style={styles.sectionTitle}>Stored Messages</Text>

              {selectedDirectory.messages.map((message, index) => (
                <MessageCard
                  key={message.id}
                  message={message}
                  index={index}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f7fbff" />

      <View style={styles.screen}>
        <View style={styles.homeHeader}>
          <Text style={styles.appTitle}>Yingtian Wu's Message Directory</Text>
        </View>

        <FlatList
          key={numColumns}
          data={directories}
          numColumns={numColumns}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={styles.gridRow}
          contentContainerStyle={styles.gridContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <DirectoryCard
              directory={item}
              cardWidth={cardWidth}
              onPress={() => setSelectedDirectory(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7fbff",
  },
  screen: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: Platform.OS === "android" ? 44 : 22,
  },
  homeHeader: {
    marginBottom: 22,
    alignItems: "center",
  },
  appTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#111827",
    textAlign: "center",
  },
  appSubtitle: {
    marginTop: 8,
    fontSize: 15,
    color: "#6b7280",
    textAlign: "center",
    lineHeight: 22,
  },
  gridContent: {
    paddingBottom: 32,
  },
  gridRow: {
    justifyContent: "space-between",
  },
  backButton: {
    alignSelf: "flex-start",
    backgroundColor: "#e5e7eb",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 14,
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: "800",
    color: "#374151",
  },
  detailContent: {
    paddingBottom: 36,
  },
  detailHeader: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 28,
    paddingVertical: 26,
    paddingHorizontal: 18,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 7 },
    elevation: 5,
  },
  detailIconCircle: {
    width: 118,
    height: 118,
    borderRadius: 59,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    overflow: "hidden",
  },
  detailIconImage: {
    width: 76,
    height: 76,
  },
  detailTitle: {
    fontSize: 32,
    fontWeight: "900",
  },
  detailDescription: {
    marginTop: 7,
    color: "#6b7280",
    fontSize: 15,
    textAlign: "center",
  },
  detailCount: {
    marginTop: 12,
    backgroundColor: "#eef2ff",
    color: "#374151",
    fontWeight: "900",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    overflow: "hidden",
  },
  messageSection: {
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: "900",
    color: "#111827",
    marginBottom: 14,
  },
});