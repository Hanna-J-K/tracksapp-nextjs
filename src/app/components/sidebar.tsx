import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Box,
  Divider,
  Center,
  UnorderedList,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const sidebarItems = [
  {
    icon: MdHome,
    text: "Home",
    route: "/",
  },
  {
    icon: MdLibraryMusic,
    text: "Library",
    route: "/library",
  },
  {
    icon: MdSearch,
    text: "Search",
    route: "/search",
  },
];

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh-100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage
            alt="logo"
            src="/tracksapp-logo.png"
            width={120}
            height={60}
          />
        </Box>
        <Box marginBottom="20px">
          <List spacing={3}>
            {sidebarItems.map((item) => (
              <ListItem
                key={item.text}
                fontSize="20px"
                fontWeight="600"
                paddingY="10px"
                paddingX="20px"
              >
                <LinkBox>
                  <Link href={item.route}>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {item.text}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
