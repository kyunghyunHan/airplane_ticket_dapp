import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
} from "@mantine/core";
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

  linkLabel: {
    marginRight: 5,
  },
  acess: {
    [theme.fn.smallerThan("lg")]: {
      display: "none",
    },
  },
}));
interface HeaderActionProps {
  links: {
    link: string;
    label: string;
  }[];
}

const Navbar = ({ links }: HeaderActionProps) => {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map(link => {
    return (
      <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
        <Menu.Target>
          <a
            href={link.link}
            className={classes.link}
            onClick={event => event.preventDefault()}
          >
            <Center>
              <span className={classes.linkLabel}>{link.label}</span>
            </Center>
          </a>
        </Menu.Target>
      </Menu>
    );
  });
  return (
    <Header
      className={classes.Header}
      height={HEADER_HEIGHT}
      sx={{ borderBottom: 0 }}
      mb={10}
    >
      <Container className={classes.inner} fluid>
        <h1>LOGO</h1>
        <Group spacing={4} className={classes.links}>
          {items}
        </Group>
        <Button className={classes.acess} radius="xl" sx={{ height: 30 }}>
          Get early access
        </Button>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
};

export default Navbar;
