import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  decorators: [
    (Story) => (
      <div className="bg-neutral-700 p-4 rounded-2xl text-white">
        <Story />
      </div>
    ),
  ],
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
