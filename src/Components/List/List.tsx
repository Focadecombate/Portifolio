import React from "react";

interface Props<A extends Object, S extends Object | null> {
  props?: S;
  array: A[];
  keyProp: string;
  Component: React.ComponentType<A>;
}

const List = <A, S>({ Component, props, array, keyProp }: Props<A, S>) => {
  const getKey = (item: A): string => {
    const ObjectKey = Object.keys(item).findIndex((value) => value === keyProp);

    const ObjectValue = Object.values(item)[ObjectKey ?? 0] as string;

    return ObjectValue.replace(/ /g, "");
  };

  return (
    <>
      {array.map((item) => (
        <Component key={getKey(item)} {...item} {...props} />
      ))}
    </>
  );
};

export default List;
