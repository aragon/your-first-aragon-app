import React from "react";
import { useAragonApi } from "@aragon/api-react";
import {
  Box,
  Button,
  GU,
  Header,
  IconMinus,
  IconPlus,
  Main,
  SyncIndicator,
  Text,
  textStyle
} from "@aragon/ui";

function App() {
  const { api, appState } = useAragonApi();
  const { count, isSyncing } = appState;
  const step = 2;

  return (
    <Main>
      {isSyncing && <SyncIndicator />}
      <Header
        primary="Counter"
        secondary={
          <Text
            css={`
              ${textStyle("title2")}
            `}
          >
            {count}
          </Text>
        }
      />
      <Box
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: ${50 * GU}px;
          ${textStyle("title3")};
        `}
      >
        Count: {count}
        <div>
          <Button
            display="icon"
            icon={<IconMinus />}
            label="Decrement"
            onClick={() => api.decrement(step).toPromise()}
          />
          <Button
            display="icon"
            icon={<IconPlus />}
            label="Increment"
            onClick={() => api.increment(step).toPromise()}
            css={`
              margin-left: ${2 * GU}px;
            `}
          />
        </div>
      </Box>
    </Main>
  );
}

export default App;
