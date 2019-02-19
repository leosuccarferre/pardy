import styled from "styled-components";

import { Button, ButtonGroup, Card, Divider, H4 } from "@blueprintjs/core";

import { Flex, Box } from "@rebass/grid";

const Row = props => <Flex {...props} mx={0} />;

const Column = props => <Box {...props} px={1} flex="1 1 auto" />;

const ClueWrap = props => (
  <Flex alignItems="center" {...props} p={2} flex="1 1 auto" />
);

const SingleColumn = styled(Column)`
  background-color: #2458b3;
`;

const CategoryWrap = styled(ClueWrap)`
  color: white;
  font-size: 1rem;
  height: 6rem;
  text-align: center;
`;

const ClueButton = {
  color: "#FFC940",
  fontSize: "2rem",
  fontWeight: "500",
  padding: "1rem"
};

export default function PlayerCard() {
  return (
    <Card>
      <Row>
        <SingleColumn>
          <div>
            <CategoryWrap>American History</CategoryWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                100
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                200
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                300
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                400
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                500
              </Button>
            </ClueWrap>
          </div>
        </SingleColumn>
        <SingleColumn>
          <div>
            <CategoryWrap>Hodgepodge</CategoryWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                100
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                200
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                300
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                400
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                500
              </Button>
            </ClueWrap>
          </div>
        </SingleColumn>
        <SingleColumn>
          <div>
            <CategoryWrap>Rhyme Time</CategoryWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                100
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                200
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                300
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                400
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                500
              </Button>
            </ClueWrap>
          </div>
        </SingleColumn>
        <SingleColumn>
          <div>
            <CategoryWrap>Homophones</CategoryWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                100
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                200
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                300
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                400
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                500
              </Button>
            </ClueWrap>
          </div>
        </SingleColumn>
        <SingleColumn>
          <div>
            <CategoryWrap>Science</CategoryWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                100
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                200
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                300
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                400
              </Button>
            </ClueWrap>
            <ClueWrap>
              <Button minimal fill style={ClueButton}>
                500
              </Button>
            </ClueWrap>
          </div>
        </SingleColumn>
      </Row>
    </Card>
  );
}
