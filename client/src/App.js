import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import memories from "./Images/memories.png";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import { TitleBar, Image, Heading } from "./styles";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <TitleBar position="static" color="inherit">
        <Heading variant="h2" align="center">
          Social Photos
        </Heading>
        <Image src={memories} alt="memories" height="60" />
      </TitleBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
