import {
  createStyles,
  Center,
  Header,
  Container,
  Group,
  Burger,
  ScrollArea,
  Drawer,
  Divider,
} from "@mantine/core";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";

import { useDisclosure } from "@mantine/hooks";
const HEADER_HEIGHT = 60;
const useStyles = createStyles(theme => ({
  Header: {
    position: "fixed",
  },
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    padding: "100px",
    [theme.fn.smallerThan("lg")]: {
      display: "none",
    },
  },

  no: {
    [theme.fn.smallerThan("lg")]: {
      display: "none",
    },
  },
  burger: {
    [theme.fn.largerThan("lg")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  linkLabel: {
    marginRight: 5,
  },
}));
interface HeaderActionProps {
  links: {
    link: string;
    label: string;
  }[];
}

const Navbar = ({ links }: HeaderActionProps) => {
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  const items = links.map(link => {
    return (
      <a
        href={link.link}
        className={classes.link}
        onClick={event => event.preventDefault()}
      >
        <Center>
          <span className={classes.linkLabel}>{link.label}</span>
        </Center>
      </a>
    );
  });
  return (
    <>
      <Header
        className={classes.Header}
        height={HEADER_HEIGHT}
        sx={{ borderBottom: 0 }}
        mb={10}
      >
        <Container className={classes.inner} fluid>
          <Group>
            <h1>LOGO</h1>
          </Group>
          <Group>
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
            <Group className={classes.no}>
              <WalletSelector />
            </Group>

            <Burger
              opened={opened}
              onClick={toggleDrawer}
              className={classes.burger}
              size="sm"
            />
          </Group>
        </Container>
      </Header>
      <Drawer
        opened={opened}
        onClose={closeDrawer}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="50%"
        position="top"
        padding="md"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        sx={{ textAlign: "center" }}
      >
        <h1>LOGO</h1>
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          {items}
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <Group position="center" grow pb="xl" px="md">
            <WalletSelector />
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
};

export default Navbar;
