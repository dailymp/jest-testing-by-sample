import * as React from 'react';

interface Props {
  title: string;
}

export const Header = (props: Props) => (
  <div className="card-header">
    <h3 className="panel-title">{props.title}</h3>
  </div>
);
