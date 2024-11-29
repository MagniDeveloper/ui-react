import type { Meta, StoryObj } from "@storybook/react";

import { LoginForm } from ".";

const meta: Meta<typeof LoginForm> = {
  title: "Examples/LoginForm",
  decorators: [
    (Story) => (
      <div className="bg-neutral-700 p-2 rounded-2xl">
        <Story />
      </div>
    ),
  ],
  component: LoginForm,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  name: "LoginForm",
};

export default meta;
