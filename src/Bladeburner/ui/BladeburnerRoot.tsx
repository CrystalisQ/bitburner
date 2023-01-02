import React, { useState, useEffect } from "react";
import { Stats } from "./Stats";
import { Console } from "./Console";
import { AllPages } from "./AllPages";

import { Player } from "@player";
import Box from "@mui/material/Box";

export function BladeburnerRoot(): React.ReactElement {
  const setRerender = useState(false)[1];
  function rerender(): void {
    setRerender((old) => !old);
  }

  useEffect(() => {
    const id = setInterval(rerender, 200);
    return () => clearInterval(id);
  }, []);

  const bladeburner = Player.bladeburner;
  if (!bladeburner) return <></>;
  return (
    <Box display="flex" flexDirection="column">
      <Box sx={{ display: "grid", gridTemplateColumns: "4fr 8fr", p: 1 }}>
        <Stats bladeburner={bladeburner} />
        <Console bladeburner={bladeburner} />
      </Box>

      <AllPages bladeburner={bladeburner} />
    </Box>
  );
}
