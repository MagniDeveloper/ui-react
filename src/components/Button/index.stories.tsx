import type { Meta, StoryObj } from "@storybook/react";
import Home from "@/assets/svgs/Home";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Button by default",
  args: {
    variant: "default",
    children: "Default",
  },
};

export const Primary: Story = {
  name: "Button + Primary Variant",
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const FullWidth: Story = {
  name: "Button + Full Width Size",
  args: {
    children: "Full Width",
    size: "full",
  },
};

export const Icon: Story = {
  name: "Button + Icon Size",
  args: {
    children: <Home className="size-6" />,
    size: "icon",
  },
};

export default meta;
