import { Button, Card, Input } from "@/components";
import Eye from "@/assets/svgs/Eye";

export function LoginForm() {
  return (
    <Card
      variant={"gradient"}
      headerContent={
        <div className="flex flex-col gap-y-1">
          <h1 className="text-2xl">ACME</h1>
          <p className="text-sm text-neutral-500">Sign in to your account</p>
        </div>
      }
      footerContent={
        <div className="flex flex-col gap-y-2">
          <div className="w-full text-center">ACME Inc. © 2024</div>
        </div>
      }
    >
      <Input label="Email" placeholder="username@domain.com" />
      <Input
        label="Password"
        placeholder="*******"
        endContent={
          <Button sizeType={"icon"}>
            <Eye className="size-6" />
          </Button>
        }
        endLabelContent={
          <p>
            Forgot your password?, <span className="underline">Reset it</span>
          </p>
        }
      />

      <Button sizeType={"full"} variant={"primary"}>
        Sign in
      </Button>

      <div>
        <p className="text-sm text-neutral-500">
          Don't have an account? <span className="underline">Sign up</span>
        </p>
      </div>
    </Card>
  );
}
