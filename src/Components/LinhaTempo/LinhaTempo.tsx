import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { TextosLinhaTempo } from "../../utils/types";

export const LinhaTempo: React.FC<TextosLinhaTempo> = ({ textos }) => {
  return (
    <Timeline align="alternate">
      {textos.map(({ esquerda, direita }, index) => (
        <>
          {direita ? (
            <TimelineItem key={esquerda ?? direita}>
              {esquerda && (
                <TimelineOppositeContent>
                  <Typography
                    variant="body2"
                    color={index % 2 ? "primary" : "secondary"}
                  >
                    {esquerda}
                  </Typography>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  color={index % 2 ? "primary" : "secondary"}
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2">{direita}</Typography>
              </TimelineContent>
            </TimelineItem>
          ) : (
            <TimelineItem  key={esquerda}>
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  color={index % 2 ? "primary" : "secondary"}
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  variant="body2"
                  color={index % 2 ? "primary" : "secondary"}
                >
                  {" "}
                  {esquerda}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          )}
        </>
      ))}
    </Timeline>
  );
};
