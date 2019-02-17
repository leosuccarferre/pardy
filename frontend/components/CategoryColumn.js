import styled from "styled-components";

import { Button, ButtonGroup, Card, Divider, H4 } from "@blueprintjs/core";

import { Flex, Box } from "@rebass/grid";

const Row = props => <Flex {...props} mx={-2} />;

const Column = props => <Box {...props} px={2} flex="1 1 auto" />;

const Clue = props => <Box {...props} p={2} flex="1 1 auto" />;

export default function PlayerCard() {
  return (
    <div>
      <Row>
        <Column>
          <Card>
            <Clue>100</Clue>
            <Clue>100</Clue>
            <Clue>100</Clue>
            <Clue>100</Clue>
            <Clue>100</Clue>
            <Clue>100</Clue>
            <Clue>100</Clue>
          </Card>
        </Column>
        <Column>
          <Card>
            <Box>100</Box>
            <Box>100</Box>
            <Box>100</Box>
            <Box>100</Box>
            <Box>100</Box>
            <Box>100</Box>
            <Box>100</Box>
          </Card>
        </Column>
      </Row>
    </div>
  );
}
