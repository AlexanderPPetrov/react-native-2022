import Header from "./Header";
import Body from "./Body";
import Container from "./Container";

export default function Default(props) {
    return  (
            <Container>
              <Header/>
              <Body>
                {props.children}
              </Body>
            </Container>
      );
}