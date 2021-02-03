import React from "react";
import { GridList, GridListTile, makeStyles } from "@material-ui/core";
import { GridListData } from "../data/GridListData";

const useStyle = makeStyles((theme) => ({
  root: {
    display: `flex`,
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 560,
    width: 780,
  },
}));

const GridListComp = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        {GridListData.map((tile) => (
          <GridListTile key={tile.id} cols={tile.cols || 1}>
            <img src={tile.url} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default GridListComp;
