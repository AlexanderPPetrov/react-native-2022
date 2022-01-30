import { useState } from "react";
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';
import { useSelector, useDispatch} from "react-redux";
import { colors } from "../../colors";
import { setLoginDialogOpened } from "../../redux/actions";
import { StyleSheet } from "react-native";

const LoginDialog = () => {

    const dispatch = useDispatch();
    const dialogOpened = useSelector(state => state.loginDialogOpened);

    const closeUserMenu = () => dispatch(setLoginDialogOpened(false));
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return ( 
    <Portal>
        <Dialog visible={dialogOpened} onDismiss={closeUserMenu}>
            <Dialog.Title>Влез в профила си</Dialog.Title>
            <Dialog.Content>
                <TextInput
                    label="Имейл"
                    mode="outlined"
                    value={email}
                    style={styles.textInput}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label="Парола"
                    mode="outlined"
                    value={password}
                    style={styles.textInput}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
                <Button 
                    style={styles.button}
                    onPress={closeUserMenu} 
                    mode="contained"
                    dark={true}
                    color={colors.action}>Напред</Button>
            </Dialog.Content>
        </Dialog>
    </Portal>
    );
};

export default LoginDialog;

const styles = StyleSheet.create({
    button: {
      width: '100%',
      paddingVertical: 10,
      marginTop: 10,
    },
    textInput: {
        marginBottom: 10,
    },
});