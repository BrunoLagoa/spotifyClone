import { createAppContainer, createStackNavigator } from "react-navigation";
import { colors } from "./styles";

// importacao de paginas
import Main from "./pages/main";
import Search from "./pages/search";
import Album from "./pages/album";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Search: { screen: Search },
      Album: { screen: Album }
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.secundary,
          borderBottomWidth: 0
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          width: "90%",
          textAlign: "center"
        },
        headerBackTitle: null
      }
    }
  )
);

export default Routes;
