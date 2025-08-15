export const classNames = (...classnames: (string | undefined | boolean)[]) => {
  return classnames?.filter(Boolean).join(" ");
};

export const truncate = (char: string, length: number): string => {
  if (char.length > length) {
    return char.slice(0, length) + "...";
  } else {
    return char;
  }
};
