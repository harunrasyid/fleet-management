import clsx from "clsx";
import { type IVStackProps } from "./VStack.props";

export const VStack = ({ className, children, ...rest }: IVStackProps) => {
  return (
    <div className={clsx(`flex flex-col`, className)} {...rest}>
      {children}
    </div>
  );
};
