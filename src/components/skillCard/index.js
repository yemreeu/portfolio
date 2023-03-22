import React from "react";
import "./styles.scss";

import {
  Card,
  Button,
  CardBody,
  CardFooter,
  Text,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

function SkillCard() {
  return (
    <div className="skillcard">
      <Card
        className="skillcard__items"
        maxW="sm"
        border={"solid 6px cyan"}
        borderRadius={"2xl"}
      >
        <CardBody>
          <Image
            src="./todo.png"
            alt="Green double couch with wooden legs"
            borderRadius="2xl"
            height={""}
          />
          <Stack mt="6px" spacing="3">
            <Heading size="md">Todo list</Heading>
            <Text>
              To-do lists can help you get, and stay, on top of important
              projects and piles of tasks or decisions. For instance, imagine
              you're heading a team that's working on a project. There are so
              many tasks to do, and so many people doing them, that staying on
              top of it all seems overwhelming.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="5">
            <Button variant="solid" colorScheme="cyan" color={"white"}>
              <a
                href="https://todoapp-yeu.vercel.app/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Visit Site
              </a>
            </Button>
            <Button variant="solid" colorScheme="cyan" color={"white"}>
              Source code
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      {/* 2 */}
      <Card maxW="sm" border={"solid 6px cyan"} borderRadius={"2xl"}>
        <CardBody>
          <Image
            src="./weather.png"
            alt="Green double couch with wooden legs"
            borderRadius="2xl"
            height={"s"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Weather Forecast</Heading>
            <Text>
              The goal of weather prediction is to provide information people
              and organizations can use to reduce weather-related losses and
              enhance societal benefits, including protection of life and
              property, public health and safety, and support of economic
              prosperity and quality of life.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="5">
            <Button variant="solid" colorScheme="cyan" color={"white"}>
              <a
                href="https://weather-forecast-app-yeu.vercel.app/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Visit Site
              </a>
            </Button>
            <Button variant="solid" colorScheme="cyan" color={"white"}>
              <a
                href="https://github.com/yemreeu/weatherForecastApp"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Source code
              </a>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      {/* 3 */}
      <Card maxW="sm" border={"solid 6px cyan"} borderRadius={"2xl"}>
        <CardBody>
          <Image
            src="./tour.png"
            alt="Green double couch with wooden legs"
            borderRadius="2xl"
            height={"s"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Tour Places</Heading>
            <Text>
              The purpose of travel sites is to make it easier for people to
              plan and book their trips. They provide a wide range of services,
              from helping you find the best deals on flights and hotels, to
              providing detailed information about destinations around the
              world.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="5">
            <Button variant="solid" colorScheme="cyan" color={"white"}>
              <a
                href="https://tour-places-yeu.vercel.app/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Visit Site
              </a>
            </Button>
            <Button variant="solid" colorScheme="cyan" color={"white"}>
              <a
                href="https://github.com/yemreeu/tourPlaces"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Source code
              </a>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}
export default SkillCard;
