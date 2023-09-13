import React from "react";

export interface ICard {
  title: string;
  description: string | React.ReactElement;
  key?: number;
}

export interface ICardWithLink extends ICard {
  link?: string;
}
