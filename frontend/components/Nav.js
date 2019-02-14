import React, { useState } from "react";
import Link from "next/link";

import { Flex, Box } from "@rebass/grid";

import {
  Alignment,
  Button,
  Classes,
  FocusStyleManager,
  FormGroup,
  H3,
  InputGroup,
  Intent,
  Navbar,
  Dialog
} from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

export default function Nav() {
  const [isOpen, setIsOpen] = useState(!isOpen);
  const handleDialogToggle = e => setIsOpen(isOpen => !isOpen);

  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>
            <Link href="/">
              <strong><a>Pardy!</a></strong>
            </Link>
          </Navbar.Heading>
          <Navbar.Divider />
          <Link href="/game-room">
            <Button className="bp3-minimal" icon="new-link" text="New Game" />
          </Link>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Flex alignItems="center">
            <Box mr={3}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </Box>
            <Box mr={2}>
              <Button
                className="bp3-minimal"
                rightIcon="log-in"
                text="Log in"
              />
            </Box>
            <Button
              intent="success"
              rightIcon="arrow-right"
              text="Sign up"
              onClick={handleDialogToggle}
            />
          </Flex>
        </Navbar.Group>
      </Navbar>
      <Dialog isOpen={!isOpen} onClose={handleDialogToggle}>
        <div className={Classes.DIALOG_BODY}>
          <H3>Sign up to Pardy!</H3>
          <p>At convallis ac suscipit a non sem urna.</p>
          <br />
          <FormGroup label="Email Address" labelFor="text-input">
            <InputGroup
              large
              type="email"
              leftIcon="envelope"
              autoFocus={true}
            />
          </FormGroup>

          <FormGroup label="Password" labelFor="text-input">
            <InputGroup large type="password" leftIcon="key" />
          </FormGroup>
        </div>

        <div className={Classes.DIALOG_FOOTER}>
          <Flex justifyContent="space-between" alignItems="center">
            <Box width={2 / 3}>
              <Flex alignItems="center">
                <Button onClick={handleDialogToggle}>Cancel</Button>
                <Box ml={2}>
                  Already a member?{" "}
                  <Link href="http://google.com">
                    <a>Log in here</a>
                  </Link>
                  .
                </Box>
              </Flex>
            </Box>
            <Box>
              <Button
                large
                intent={Intent.PRIMARY}
                href="https://www.palantir.com/palantir-foundry/"
                target="_blank"
              >
                Let's go!
              </Button>
            </Box>
          </Flex>
        </div>
      </Dialog>
    </div>
  );
}
