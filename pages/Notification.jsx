import { FlatList } from "react-native";
import React from "react";
import NotificationStyles from "../assets/Styles/NotificationStyles";
import NotificationCard from "../components/NotificationCard";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useState } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import NotificationBottomSheet from "../components/NotificationBottomSheet";
import { SafeAreaView } from "react-native";
import { readNotification } from "../redux-store/actions/notification/readNotification";
import Colors from "../assets/Colors/Colors";

const Notification = () => {
  const notifications = useSelector((state) => state.notification.notification);
  const dispatch = useDispatch();

  const snapPoints = ["32%"];
  const bottomSheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [bottomSheetContent, setBottomSheetContent] = useState();

  function handleNotificationPress(notification) {
    bottomSheetRef.current?.present();
    setBottomSheetContent(notification);
    setTimeout(() => {
      dispatch(readNotification(notification));
      setIsOpen(true);
    }, 100);
  }

  return (
    // <View>
    <BottomSheetModalProvider>
      <SafeAreaView
        style={[NotificationStyles.container, { opacity: isOpen ? 0.09 : 1 }]}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={notifications}
          renderItem={({ item }) => {
            return (
              <NotificationCard
                notification={item}
                handlePress={handleNotificationPress}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />

        <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onDismiss={() => setIsOpen(false)}
          backgroundStyle={{
            borderRadius: 20,
            backgroundColor: Colors.background,
          }}
        >
          <NotificationBottomSheet bottomSheetContent={bottomSheetContent} />
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
    // </View>
  );
};

export default Notification;
