import com.example.croshay.model.User;
import com.example.croshay.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User registerUser(User newUser) {
        // Check if the user with the same email already exists
        if (userRepository.findByEmail(newUser.getEmail()) != null) {
            throw new IllegalArgumentException("User with this email already exists.");
        }

        // Hash the user's password before saving to the database
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));

        return userRepository.save(newUser);
    }

    public User loginUser(String email, String password) {
        User user = userRepository.findByEmail(email);

        // Check if the user exists and if the provided password matches the hashed password in the database
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return user;
        }

        return null;
    }

    // Add additional methods as needed for more complex business logic
}
