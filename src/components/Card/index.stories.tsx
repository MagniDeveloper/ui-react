import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Card by default",
  args: {
    variant: "default",
    headerContent: <p>Header</p>,
    children: <p>Body</p>,
    footerContent: <p>Footer</p>,
  },
};

export const Gradient: Story = {
  name: "Card + Gradient Variant",
  args: {
    variant: "gradient",
    headerContent: <p>Header</p>,
    children: <p>Body</p>,
    footerContent: <p>Footer</p>,
  },
};

export default meta;
