import React, { createRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress, {
  LinearProgressProps,
} from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useOnScreen from "../../Hooks/useOnScreen";

export function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function LinearWithValueLabel({
  progress,
}: {
  progress: number;
}) {
  const classes = useStyles();
  const ref = createRef<HTMLDivElement>();
  const [percent, setPercent] = useState<number>(0);
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      if (percent >= progress) {
        setPercent(progress);
        return;
      }

      setPercent(percent + 20);
    }
  }, [isOnScreen, percent, progress]);

  return (
    <div ref={ref} className={classes.root}>
      <LinearProgressWithLabel value={percent} />
    </div>
  );
}
