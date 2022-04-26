import React from 'react';

import { Card } from '../card';

const Header: React.FC = ({ children }) => {
  return <>{children}</>;
};

const Items: React.FC = ({ children }) => {
  return <>{children}</>;
};

interface ListCompoundProps {
  Header: React.FC;
  Items: React.FC;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement[] | JSX.Element[] | React.ReactNode;
}

export const List: React.FC<Props> & ListCompoundProps = ({
  children,
  className,
}: any) => {
  const header: React.ReactNode[] = [];
  const items: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (child && child?.type === Header) {
      return header.push(child);
    }
    return items.push(child);
  });

  return (
    <Card className={className}>
      {header}
      <div className="flex flex-col">{items}</div>
    </Card>
  );
};

List.Header = Header;
List.Items = Items;
