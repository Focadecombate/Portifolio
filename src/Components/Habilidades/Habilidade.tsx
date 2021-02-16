import React from "react";
import { Typography } from "@material-ui/core";
import LinearWithValueLabel from "./BarraProgresso";
import { HabilidadeText } from "../../utils/types";

export const Habilidade: React.FC<HabilidadeText> = ({
  description,
  name,
  progress,
}) => {
  return (
    <>
      <Typography variant="h6">{name.toUpperCase()}</Typography>
      <LinearWithValueLabel progress={progress} />
      <Typography variant="body1">{description}</Typography>
    </>
  );
};
