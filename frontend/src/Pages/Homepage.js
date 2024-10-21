import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container mt={10} maxW="xl" centerContent>
    
      <Box bg="grey" w="100%" p={4} borderRadius="lg" borderWidth="1px">
      <Tabs   color='white' variant='enclosed'>
  <TabList>
    <Tab  fontWeight='bolder' >Login</Tab>
    <Tab fontWeight='bolder'  >Sign-Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
    <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
