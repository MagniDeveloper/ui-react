import type { Meta, StoryObj } from "@storybook/react";
import Home from "@/assets/svgs/Home";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  decorators: [
    (Story) => (
      <div className="bg-neutral-700 p-4 rounded-2xl">
        <Story />
      </div>
    ),
  ],
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

export const Dark: Story = {
  name: "Button + Dark Variant",
  args: {
    children: "Dark",
    variant: "dark",
  },
};

export const Light: Story = {
  name: "Button + Light Variant",
  args: {
    children: "Light",
    variant: "light",
  },
};

export const Loading: Story = {
  name: "Button + Loading State",
  args: {
    variant: "dark",
    children: "Loading",
    isLoading: true,
  },
};

export const FullWidth: Story = {
  name: "Button + Full Width Size",
  args: {
    children: "Full Width",
    sizeType: "full",
  },
};

export const Icon: Story = {
  name: "Button + Icon Size",
  args: {
    children: <Home className="size-6" />,
    sizeType: "icon",
  },
};

export const SizeSM: Story = {
  name: "Button + Small Size",
  args: {
    children: "Small",
    size: "sm",
  },
};

export const SizeMD: Story = {
  name: "Button + Medium Size",
  args: {
    children: "Medium",
    size: "md",
  },
};

export const SizeLG: Story = {
  name: "Button + Large Size",
  args: {
    children: "Large",
    size: "lg",
  },
};

export default meta;
