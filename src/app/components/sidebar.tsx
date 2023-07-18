import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import {
  List,
  ListItem,
  ListIcon,
  Box,
  Divider,
  LinkBox,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

import { IconType } from "react-icons";

interface IMenuItem {
  icon: IconType;
  text: string;
  route: string;
}

const sidebarItems: IMenuItem[] = [
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

const musicMenuItems: IMenuItem[] = [
  {
    text: "New Playlist",
    icon: MdPlaylistAdd,
    route: "/new-playlist",
  },
  {
    text: "Favourites",
    icon: MdFavorite,
    route: "/favourites",
  },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh-100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
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
                <Link href={item.route}>
                  <ListIcon as={item.icon} color="white" marginRight="20px" />
                  {item.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginBottom="20px" marginTop="20px">
          {/* break it into a component */}
          <List spacing={3}>
            {musicMenuItems.map((item) => (
              <ListItem
                key={item.text}
                fontSize="20px"
                fontWeight="600"
                paddingY="10px"
                paddingX="20px"
              >
                <Link href={item.route}>
                  <ListIcon as={item.icon} color="white" marginRight="20px" />
                  {item.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
      </Box>
      <Box height="66%" overflowY="auto" overflowX="hidden" paddingY="20px">
        <List spacing={3}>
          {playlists.map((playlist) => (
            <ListItem
              key={playlist}
              fontSize="20px"
              fontWeight="600"
              paddingY="10px"
              paddingX="20px"
            >
              <LinkBox>
                <Link href={`/playlist/${playlist}`}>{playlist}</Link>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
