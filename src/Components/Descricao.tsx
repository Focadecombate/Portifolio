import { Typography, TypographyProps } from "@material-ui/core";
import React from "react";

export interface DescricaoText {
  Descricao: { text: string; props?: TypographyProps };
  Title: { text: string; props?: TypographyProps };
}

export const Descricao: React.FC<DescricaoText> = ({ Title, Descricao }) => {
  return (
    <>
      <Typography {...Title.props}>{Title.text}</Typography>
      <Typography {...Descricao.props}>{Descricao.text}</Typography>
    </>
  );
};
