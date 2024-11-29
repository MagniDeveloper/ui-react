import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  decorators: [
    (Story) => (
      <div className="bg-neutral-700 p-4 rounded-2xl">
        <Story />
      </div>
    ),
  ],
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

export const Dark: Story = {
  name: "Card + Dark Variant",
  args: {
    variant: "dark",
    headerContent: <p>Header</p>,
    children: <p>Body</p>,
    footerContent: <p>Footer</p>,
  },
};

export const Light: Story = {
  name: "Card + Light Variant",
  args: {
    variant: "light",
    headerContent: <p>Header</p>,
    children: <p>Body</p>,
    footerContent: <p>Footer</p>,
  },
};

export default meta;
