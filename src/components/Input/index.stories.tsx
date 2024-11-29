import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    placeholder: "Default",
    label: "Default Input",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    placeholder: "Primary",
    label: "Primary Input",
  },
};

export const Error: Story = {
  name: "Input + Error State",
  args: {
    placeholder: "Error",
    label: "Input with Error",
    isInvalid: true,
    errorMessage: "This field is required",
  },
};

export default meta;
