import com.google.firebase.messaging.*;
import org.springframework.stereotype.Service;

@Service
public class FirebaseService {

    public void sendNotificationToUser(String userToken, String notificationTitle, String notificationBody) {
        try {
            Message message = Message.builder()
                    .setNotification(new Notification(notificationTitle, notificationBody))
                    .setToken(userToken)
                    .build();

            String response = FirebaseMessaging.getInstance().send(message);
            System.out.println("Successfully sent message: " + response);
        } catch (FirebaseMessagingException e) {
            System.err.println("Error sending FCM message: " + e.getMessage());
        }
    }

    // Add additional methods as needed for more complex Firebase interactions
}
