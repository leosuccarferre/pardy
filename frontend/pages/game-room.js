import { Button, ButtonGroup, Card, Divider, Elevation } from "@blueprintjs/core";

import { Flex, Box } from "@rebass/grid";
import PlayerCard from "../components/PlayerCard";
import CategoryColumn from "../components/CategoryColumn";

const GameRoom = () => (
  <div>
      <Flex>
          <PlayerCard/>
      </Flex>
    <Flex>
        <div>
            <CategoryColumn />
        </div>
    </Flex>
  </div>
);

export default GameRoom;
