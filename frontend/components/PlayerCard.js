import styled from "styled-components";

import { Card, H4 } from "@blueprintjs/core";

import { Flex, Box } from "@rebass/grid";

const PlayerAvatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
`;

const PlayerName = styled.div``;

const PlayerScore = styled.div``;

export default function PlayerCard() {
  return (
    <div>
      <Card>
        <Flex>
          <PlayerAvatar src="../static/barry-avatar.jpg" />
          <Box ml={2}>
            <PlayerName>
              <H4>Barry</H4>
            </PlayerName>
            <PlayerScore>$99,999</PlayerScore>
          </Box>
        </Flex>
      </Card>
    </div>
  );
}
