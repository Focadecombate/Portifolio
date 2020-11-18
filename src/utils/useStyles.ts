import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
export const useStyles = (proprieties: Record<string, CSSProperties>) => makeStyles((theme: Theme) =>
    createStyles(
        proprieties
    )
);